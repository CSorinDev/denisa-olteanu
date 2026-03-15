import sendEmail from '../services/NodemailerService'

class ContactController {
  /**
   * Maneja el envío del formulario de contacto
   */
  async handleContactForm(req, res) {
    const { name, email, message, website } = req.body

    // Honeypot check: if 'website' is filled, it's likely a bot
    if (website) {
      console.log('Bot detected via honeypot')
      return res
        .status(200)
        .json({ success: true, message: 'Message filtered' })
    }

    // Validación básica
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Todos los campos son obligatorios.',
      })
    }

    try {
      const result = await sendEmail({ name, email, message })
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      })
    }
  }
}

export default new ContactController()
