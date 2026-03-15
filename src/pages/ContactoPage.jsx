import PageTitleSection from '../sections/PageTitleSection'
import ContactForm from '../forms/ContactForm'
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
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info container */}
          <ContactInfo />
        </div>
      </section>
    </>
  )
}
