import { ContactService } from '../services/ContactService'

export async function handleSendMessage(prevState, formData) {
  // 1. Lógica de validación previa (Honeypot)
  if (formData.get('website')) {
    return { success: true }
  }

  // 2. Extracción de datos
  const payload = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  }

  // 3. Delegación al Servicio
  try {
    await ContactService.sendMessage(payload)
    return { success: true }
  } catch (error) {
    console.error('Action Error:', error)
    return {
      success: false,
      error: error.message || 'Error de conexión. Por favor, inténtalo más tarde.'
    }
  }
}
