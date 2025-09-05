import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;
  private readonly logger = new Logger(MailService.name);

  constructor() {
    // 🚀 Crea un test account en Ethereal
    nodemailer.createTestAccount().then((testAccount) => {
      this.transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure, // true para 465, false para otros puertos
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });

      this.logger.log(`Cuenta de prueba Ethereal creada: ${testAccount.user}`);
      this.logger.log(`Contraseña: ${testAccount.pass}`);
    });
  }

  async sendMail(to: string, subject: string, text: string, html?: string) {
    const mailOptions = {
      from: '"Mercado Cafetero" <no-reply@mercadocafetero.com>',
      to,
      subject,
      text,
      html,
    };

    const info = await this.transporter.sendMail(mailOptions);

    this.logger.log(`Correo enviado: ${info.messageId}`);
    this.logger.log(`Vista previa: ${nodemailer.getTestMessageUrl(info)}`);

    return {
      messageId: info.messageId,
      previewUrl: nodemailer.getTestMessageUrl(info), // 👈 Link para ver el correo
    };
  }

  async sendStockAlert(to: string, producto: string, stock: number) {
    const subject = `⚠️ Stock bajo: ${producto}`;
    const text = `El producto "${producto}" ha alcanzado un nivel crítico de stock (${stock} unidades).`;
    const html = `
      <h2>⚠️ Alerta de stock bajo</h2>
      <p>El producto <strong>${producto}</strong> está en nivel crítico.</p>
      <p>Unidades restantes: <strong>${stock}</strong></p>
    `;

    return this.sendMail(to, subject, text, html);
  }
}
