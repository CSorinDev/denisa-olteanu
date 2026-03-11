/**
 * Base Abstrata para servicios de Email
 */
class BaseEmailService {
  constructor() {
    if (this.constructor === BaseEmailService) {
      throw new Error('No puedes instanciar una clase abstracta.')
    }
  }

  /**
   * Método que debe ser implementado por las subclases
   */
  async sendEmail(data) {
    throw new Error('El método sendEmail() debe ser implementado.')
  }

  /**
   * Formateador de mensajes con estética premium
   */
  formatMessage(name, email, message) {
    const brandPrimary = '#1a1a1a'
    const brandAccent = '#d4af37'
    const brandSecondary = '#faf9f6'

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            .container {
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              max-width: 600px;
              margin: 0 auto;
              background-color: ${brandSecondary};
              border: 1px solid #eeeeee;
              border-radius: 8px;
              overflow: hidden;
            }
            .header {
              background-color: ${brandPrimary};
              color: white;
              padding: 40px 20px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-family: 'Georgia', serif;
              letter-spacing: 2px;
              font-size: 24px;
            }
            .content {
              padding: 30px;
              color: ${brandPrimary};
              line-height: 1.6;
            }
            .field {
              margin-bottom: 20px;
            }
            .label {
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: ${brandAccent};
              font-weight: bold;
              margin-bottom: 5px;
            }
            .value {
              font-size: 16px;
              color: ${brandPrimary};
              background: white;
              padding: 10px;
              border-radius: 4px;
              border-left: 3px solid ${brandAccent};
            }
            .footer {
              background-color: #f0f0f0;
              padding: 20px;
              text-align: center;
              font-size: 12px;
              color: #777777;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>DENISA OLTEANU</h1>
              <p style="margin-top: 10px; opacity: 0.8; font-size: 14px;">Nuevo Mensaje de Contacto</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nombre del cliente</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Correo electrónico</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Mensaje</div>
                <div style="white-space: pre-wrap;" class="value">${message}</div>
              </div>
            </div>
            <div class="footer">
              Este es un mensaje automático enviado desde tu página web oficial.
            </div>
          </div>
        </body>
      </html>
    `
  }
}

module.exports = BaseEmailService
