import PageTitleSection from '../sections/PageTitleSection'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'

export default function ContactoPage() {
  return (
    <>
      <PageTitleSection
        title="Contacto"
        text="Para cualquier pregunta o reserva que queráis hacer poneros en contacto a través del teléfono o e-mail. Os contestaré lo antes posible."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 xl:grid-cols-2">
          {/* Contact Form Container */}
          <div className="border-brand-primary/10 bg-brand-secondary rounded-sm border p-8 shadow-sm md:p-12">
            <span className="text-brand-accent mb-3 block text-sm font-medium tracking-[0.3em] uppercase">
              Formulario
            </span>
            <h2 className="mb-8 font-serif text-3xl font-bold tracking-tight">
              Envíanos un mensaje
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info container */}
          <ContactInfo />
        </div>
      </section>
    </>
  )
}
