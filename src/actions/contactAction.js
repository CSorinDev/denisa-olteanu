export async function handleSendMessage(prevState, formData) {
  // Honeypot check
  if (formData.get('website')) {
    return { success: true }
  }

  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  try {
    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })

    const data = await response.json()

    if (data.success) {
      return { success: true }
    } else {
      return { 
        success: false, 
        error: data.error || 'Hubo un problema al enviar el mensaje.' 
      }
    }
  } catch (error) {
    console.error('Error:', error)
    return { 
      success: false, 
      error: 'Error de conexión. Por favor, inténtalo de nuevo más tarde.' 
    }
  }
}
