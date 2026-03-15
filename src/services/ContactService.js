const API_URL = 'http://localhost:3001/api'

export class ContactService {
  static async sendMessage(data) {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok || !result.success) {
      throw new Error(result.error || 'Error al enviar el mensaje')
    }

    return result
  }
}
