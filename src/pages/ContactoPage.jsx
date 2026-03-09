import { MapPin, Phone, Mail, Send } from 'lucide-react'
import PageTitleSection from '../sections/PageTitleSection'

export default function ContactoPage() {
  return (
    <>
      <PageTitleSection
        title="Contacto"
        text="Para cualquier pregunta o reserva que queráis hacer poneros en contacto a través del teléfono o e-mail. Os contestaré lo antes posible."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 xl:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-brand-accent mb-3 block text-sm font-medium tracking-[0.3em] uppercase">
                Información
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                Ponte en contacto con nosotros
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <a
                href="http://maps.google.com/maps?q=calle+alloza+119,+castell%C3%B3n+de+la+plana"
                target="_blank"
                className="hover:text-brand-accent group flex items-start gap-4 transition-colors"
              >
                <div className="bg-brand-accent/10 flex h-12 w-12 flex-none items-center justify-center rounded-full">
                  <MapPin size={20} className="text-brand-accent" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs font-medium tracking-widest uppercase opacity-50">
                    Dirección
                  </span>
                  <span className="text-lg font-light">
                    C/ Alloza 119, Castellón de la Plana
                  </span>
                </div>
              </a>

              <a
                href="tel:642017128"
                className="hover:text-brand-accent group flex items-start gap-4 transition-colors"
              >
                <div className="bg-brand-accent/10 flex h-12 w-12 flex-none items-center justify-center rounded-full">
                  <Phone size={20} className="text-brand-accent" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs font-medium tracking-widest uppercase opacity-50">
                    Teléfono
                  </span>
                  <span className="text-lg font-light">642 01 71 28</span>
                </div>
              </a>

              <a
                href="mailto:denisanicoletaolteanu@gmail.com"
                className="hover:text-brand-accent group flex items-start gap-4 transition-colors"
              >
                <div className="bg-brand-accent/10 flex h-12 w-12 flex-none items-center justify-center rounded-full">
                  <Mail size={20} className="text-brand-accent" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs font-medium tracking-widest uppercase opacity-50">
                    Email
                  </span>
                  <span className="text-lg font-light break-all">
                    denisanicoletaolteanu@gmail.com
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border-brand-primary/10 bg-brand-secondary rounded-sm border p-8 shadow-sm md:p-12">
            <span className="text-brand-accent mb-3 block text-sm font-medium tracking-[0.3em] uppercase">
              Formulario
            </span>
            <h2 className="mb-8 font-serif text-3xl font-bold tracking-tight">
              Envíanos un mensaje
            </h2>

            <form className="flex flex-col gap-6">
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
                  className="border-brand-primary/15 focus:border-brand-accent rounded-sm border bg-white px-4 py-3 text-base transition-colors outline-none"
                  placeholder="Tu nombre"
                />
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
                  className="border-brand-primary/15 focus:border-brand-accent resize-none rounded-sm border bg-white px-4 py-3 text-base transition-colors outline-none"
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary mt-2 flex items-center justify-center gap-3"
              >
                <Send size={16} />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
