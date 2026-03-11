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
   * Formateador básico de mensajes
   */
  formatMessage(name, email, message) {
    return `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `
  }
}

module.exports = BaseEmailService
