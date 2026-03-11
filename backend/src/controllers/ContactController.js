const emailService = require('../services/NodemailerService')

class ContactController {
  /**
   * Maneja el envío del formulario de contacto
   */
  async handleContactForm(req, res) {
    const { name, email, message } = req.body

    // Validación básica
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Todos los campos son obligatorios.',
      })
    }

    try {
      const result = await emailService.sendEmail({ name, email, message })
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      })
    }
  }
}

module.exports = new ContactController()
