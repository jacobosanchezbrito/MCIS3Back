import { 
  Injectable, 
  BadRequestException, 
  UnauthorizedException, 
  NotFoundException 
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { RequestPasswordResetDto } from './dto/request-password-reset.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { randomBytes } from 'crypto';
import { MailService } from '../mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  // 📌 Registro con token de verificación
  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existingUser) throw new BadRequestException('Email ya registrado');

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const verificationCode = Math.floor(1000000 + Math.random() * 9000000).toString(); // 7 dígitos
    const verificationExpires = new Date(Date.now() + 1000 * 60 * 15); // 15 minutos

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
        nombre: dto.nombre,
        direccion: dto.direccion,
        telefono: dto.telefono,
        rol: 'cliente',
        verificado: false,
        verificationCode,
        verificationExpires,
      },
    });

    const confirmUrl = `http://localhost:3000/auth/confirm-email?token=${verificationCode}`;

    await this.mailService.sendVerificationCode(user.email, verificationCode);


    const { password, verificationCode: _, verificationExpires: __, ...result } = user;
    return { message: 'Registro exitoso. Revisa tu correo para confirmar la cuenta.', user: result };
  }

  // 📌 Confirmar correo
  async confirmEmail(email: string, code: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    if (user.verificado) {
      return { message: 'El correo ya está verificado.' };
    }

    if (!user.verificationCode || !user.verificationExpires) {
      throw new BadRequestException('No se generó un código de verificación.');
    }

    if (user.verificationCode !== code) {
      throw new BadRequestException('Código inválido.');
    }

    if (user.verificationExpires < new Date()) {
      throw new BadRequestException('El código ha expirado.');
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        verificado: true,
        verificationCode: null,
        verificationExpires: null,
      },
    });

    return { message: 'Correo verificado con éxito. Ya puedes iniciar sesión.' };
  }

  async resendVerificationCode(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) throw new NotFoundException('Usuario no encontrado');
    if (user.verificado) throw new BadRequestException('La cuenta ya está verificada');

    // Generar nuevo código de 7 dígitos
    const newCode = Math.floor(1000000 + Math.random() * 9000000).toString();
    const newExpires = new Date(Date.now() + 1000 * 60 * 15); // 15 min

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        verificationCode: newCode,
        verificationExpires: newExpires,
      },
    });

    await this.mailService.sendMail(
      user.email,
      'Reenvío de código de verificación',
      `Tu nuevo código es: ${newCode}`,
      `<p>Tu nuevo código de verificación es: <b>${newCode}</b></p>`
    );

    return { message: 'Se ha enviado un nuevo código de verificación.' };
  }

  // 📌 Validación de credenciales
  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException('Email no registrado');

    // 🚨 Revisar si la cuenta está bloqueada
    if (user.lockUntil && user.lockUntil > new Date()) {
      throw new UnauthorizedException('Cuenta bloqueada temporalmente. Intenta más tarde.');
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      // Incrementar intentos fallidos
      let failedAttempts = user.failedAttempts + 1;
      let lockUntil: Date | null = null;

      if (failedAttempts >= 3) {
        lockUntil = new Date(Date.now() + 1000 * 60 * 15); // bloquea 15 minutos
        failedAttempts = 0; // reinicia el contador
        await this.mailService.sendMail(
          user.email,
          'Están intentando acceder a tu cuenta',
          `Tu cuenta ha sido bloqueada temporalmente debido a múltiples intentos fallidos de inicio de sesión.\n\nSi no fuiste tú, considera cambiar tu contraseña e ingresar en 15 minutos.`
        );
      }

      await this.prisma.user.update({
        where: { email },
        data: { failedAttempts, lockUntil },
      });

      throw new UnauthorizedException('Contraseña incorrecta');
    }

    // ✅ Si la contraseña es correcta, reinicia contador
    await this.prisma.user.update({
      where: { email },
      data: { failedAttempts: 0, lockUntil: null },
    });

    if (!user.verificado) {
      throw new UnauthorizedException('Debes confirmar tu correo antes de iniciar sesión.');
    }

    return user;
  }


  // 📌 Login y generación de JWT
  async login(dto: LoginDto) {
    const user = await this.validateUser(dto.email, dto.password);
    const payload = { sub: user.id, email: user.email, role: user.rol };
    return { access_token: this.jwtService.sign(payload) };
  }

  // 📌 Recuperar contraseña
  async requestPasswordReset(dto: RequestPasswordResetDto) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    const token = randomBytes(20).toString('hex');

    await this.prisma.user.update({
      where: { email: dto.email },
      data: {
        resetToken: token,
        resetTokenExpiry: new Date(Date.now() + 1000 * 60 * 15), // 15 minutos
      },
    });

    await this.mailService.sendMail(
      user.email,
      'Recupera tu contraseña',
      `Tu token es: ${token}`,
      `<p>Tu token de recuperación es: <b>${token}</b></p>`
    );

    return { message: 'Se envió el enlace de recuperación. Revisa tu correo (o vista previa en consola).' };
  }

  // 📌 Resetear contraseña con token
  async resetPassword(dto: ResetPasswordDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        resetToken: dto.token,
        resetTokenExpiry: { gt: new Date() },
      },
    });

    if (!user) throw new BadRequestException('Token inválido o expirado');

    const hashedPassword = await bcrypt.hash(dto.newPassword, 10);

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    return { message: 'Contraseña actualizada con éxito' };
  }

  async checkEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return { available: !user };
  }
}
