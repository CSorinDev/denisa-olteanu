import cors from 'cors'
import dotenv from 'dotenv'
import express, { json } from 'express'
import contactLimiter from './middlewares/rateLimiter.js'
import contactController from './controllers/ContactController.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  })
)
app.use(json())

// Routes
app.post('/api/contact', contactLimiter, (req, res) => {
  contactController.handleContactForm(req, res)
})

// Health check
app.get('/health', (req, res) => res.send('Backend is running!'))

app.listen(PORT, () => {
  console.log(`Servidor de correos corriendo en http://localhost:${PORT}`)
})
