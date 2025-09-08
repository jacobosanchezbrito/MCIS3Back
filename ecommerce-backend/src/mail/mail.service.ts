import { Injectable, Logger } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { config } from 'dotenv';

// Cargar las variables de entorno
config();

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  constructor() {
    // Configura SendGrid con la API Key desde el archivo .env
    sgMail.setApiKey('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');  // Usar la API Key desde las variables de entorno
  }

  // Método para enviar correos
  async sendMail(to: string, subject: string, text: string, html?: string) {
    const msg = {
      to,  // Destinatario
      from: 'no-reply@mercadocafetero.com',  // Correo verificado desde tu dominio
      subject,
      text,
      html,
    };

    try {
      // Envía el correo con SendGrid
      const response = await sgMail.send(msg);
      this.logger.log(`Correo enviado: ${response[0].statusCode}`);
      this.logger.log(`Respuesta del servidor de SendGrid: ${response[0].body}`);

      return {
        messageId: response[0].headers['x-message-id'],  // ID del mensaje de SendGrid
      };
    } catch (error) {
      this.logger.error(`Error al enviar correo: ${error}`);
      throw error;
    }
  }

  // Método específico para enviar alertas de stock bajo
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
