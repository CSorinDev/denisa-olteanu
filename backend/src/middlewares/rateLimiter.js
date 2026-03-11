const rateLimit = require('express-rate-limit')

// Rate limiting: 5 requests per hour per IP
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: {
    success: false,
    error:
      'Has enviado demasiados mensajes. Por favor, inténtalo de nuevo en una hora.',
  },
  standardHeaders: true,
  legacyHeaders: false,
})

module.exports = contactLimiter
