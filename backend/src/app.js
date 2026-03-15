const express = require('express')
const cors = require('cors')
require('dotenv').config()
const contactController = require('./controllers/ContactController').default
const contactLimiter = require('./middlewares/rateLimiter').default

const app = express()
const PORT = process.env.PORT || 3001

// Middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  })
)
app.use(express.json())

// Routes
app.post('/api/contact', contactLimiter, (req, res) =>
  contactController.handleContactForm(req, res)
)

// Health check
app.get('/health', (req, res) => res.send('Backend is running!'))

app.listen(PORT, () => {
  console.log(`Servidor de correos corriendo en http://localhost:${PORT}`)
})
