import { Injectable, Logger } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class MailService {
  private resend: Resend;
  private readonly logger = new Logger(MailService.name);

  constructor() {
    if (!process.env.RESEND_API_KEY) {
      this.logger.warn('⚠️ RESEND_API_KEY no está configurada. No se enviarán correos.');
    }
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

  async sendMail(to: string, subject: string, text: string, html?: string) {
    try {
      const response = await this.resend.emails.send({
        from: process.env.RESEND_SENDER || 'Mercado Cafetero <no-reply@resend.dev>',
        to: [to],
        subject,
        text,
        html,
        replyTo: process.env.RESEND_REPLY_TO || undefined,
      });

      if (response.error) {
        this.logger.error(`❌ Error al enviar correo: ${response.error.message}`);
        throw new Error(response.error.message);
      }

      this.logger.log(`✅ Correo enviado con Resend. ID: ${response.data?.id}`);
      return { id: response.data?.id };
    } catch (error: any) {
      this.logger.error(`❌ Error inesperado al enviar correo: ${error.message}`);
      throw error;
    }
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
