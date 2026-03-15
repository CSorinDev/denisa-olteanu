import { useActionState, useState } from 'react'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { handleSendMessage } from '../actions/contactAction'

export default function ContactForm() {
  const [formKey, setFormKey] = useState(0)
  const [state, formAction, isPending] = useActionState(
    handleSendMessage,
    null
  )

  const handleReset = () => {
    setFormKey(prev => prev + 1)
  }

  return (
    <div key={formKey} className="border-brand-primary/10 bg-brand-secondary rounded-sm border p-8 shadow-sm md:p-12">
      <span className="text-brand-accent mb-3 block text-sm font-medium tracking-[0.3em] uppercase">
        Formulario
      </span>
      <h2 className="mb-8 font-serif text-3xl font-bold tracking-tight">
        Envíanos un mensaje
      </h2>

      {state?.success ? (
        <div className="flex flex-col items-center gap-4 py-8 text-center">
          <CheckCircle2 size={48} className="text-green-500" />
          <h3 className="font-serif text-2xl font-bold">
            ¡Mensaje enviado!
          </h3>
          <p className="text-brand-muted">
            Gracias por contactarnos. Te responderemos lo antes posible.
          </p>
          <button
            onClick={handleReset}
            className="btn-outline mt-4"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form action={formAction} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium tracking-widest uppercase opacity-60"
            >
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="border-brand-primary/15 focus:border-brand-accent rounded-sm border bg-white px-4 py-3 text-base transition-colors outline-none"
              placeholder="Tu nombre"
            />
          </div>

          {/* Honeypot field (hidden from users) */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <input type="text" name="website" tabIndex="-1" autoComplete="off" />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium tracking-widest uppercase opacity-60"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="border-brand-primary/15 focus:border-brand-accent rounded-sm border bg-white px-4 py-3 text-base transition-colors outline-none"
              placeholder="tu@email.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium tracking-widest uppercase opacity-60"
            >
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="border-brand-primary/15 focus:border-brand-accent resize-none rounded-sm border bg-white px-4 py-3 text-base transition-colors outline-none"
              placeholder="Cuéntanos en qué podemos ayudarte..."
            />
          </div>

          {state?.success === false && (
            <div className="flex items-center gap-2 rounded-sm bg-red-50 p-4 text-red-600">
              <AlertCircle size={20} />
              <span className="text-sm">{state.error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="btn-primary mt-2 flex items-center justify-center gap-3 disabled:opacity-70"
          >
            {isPending ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send size={16} />
                Enviar Mensaje
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
