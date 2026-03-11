const nodemailer = require('nodemailer')
const BaseEmailService = require('./BaseEmailService')
require('dotenv').config()

class NodemailerService extends BaseEmailService {
  constructor() {
    super()
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  }

  /**
   * Implementación específica para enviar con Nodemailer
   */
  async sendEmail({ name, email, message }) {
    try {
      const htmlContent = this.formatMessage(name, email, message)

      const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`, // Gmail suele sobreescribir el 'from', por eso se pone el nombre
        to: process.env.RECIPIENT_EMAIL,
        replyTo: email,
        subject: `Nuevo mensaje de ${name} - Web Denisa Olteanu`,
        html: htmlContent,
      }

      const info = await this.transporter.sendMail(mailOptions)
      console.log('Email enviado: %s', info.messageId)
      return { success: true, messageId: info.messageId }
    } catch (error) {
      console.error('Error enviando email:', error)
      throw new Error('No se pudo enviar el correo.')
    }
  }
}

// Exportamos una instancia única (Singleton)
module.exports = new NodemailerService()
