import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;
  private readonly logger = new Logger(MailService.name);

  constructor() {
    // 🚀 Configuración con Gmail en lugar de Ethereal
    this.transporter = nodemailer.createTransport({
      service: 'gmail', // 👈 Usar el servicio Gmail
      auth: {
        user: process.env.GMAIL_USER, // tu correo Gmail
        pass: process.env.GMAIL_APP_PASSWORD, // la contraseña de aplicación de 16 dígitos
      },
    });
  }

  async sendTestMail(to: string, subject: string, text: string, html?: string) {
    const mailOptions = {
      from: `"Mercado Cafetero" <${process.env.GMAIL_USER}>`, // 👈 aquí usas tu Gmail
      to,
      subject,
      text,
      html,
    };

    const info = await this.transporter.sendMail(mailOptions);

    this.logger.log(`Correo enviado: ${info.messageId}`);
    return {
      messageId: info.messageId,
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

    return this.sendTestMail(to, subject, text, html);
  }
}
