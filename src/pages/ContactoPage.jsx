import PageTitleSection from '../sections/PageTitleSection'

export default function ContactoPage() {
  return (
    <>
      <PageTitleSection
        title="Contacto"
        text="Para cualquier pregunta o reserva que queráis hacer poneros en contacto a través del teléfono o e-mail. Os contestaré lo antes posible."
      />
      <div className='xl:flex'>
        <section>
        <h2>Ponte en contacto con nosotros</h2>
        <a href="http://maps.google.com/maps?q=calle+alloza+119,+castell%C3%B3n+de+la+plana">
          C/ Alloza 119, Castellón de la Plana
        </a>
        <a href="tel:642017128">642017128</a>
        <a href="mailto:denisanicoletaolteanu@gmail.com">
          denisanicoletaolteanu@gmail.com
        </a>
      </section>

      <form>
        <h2>Envíanos un mensaje</h2>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="emial">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Mensaje</label>
        <textarea name="message" id="message"></textarea>
        <button>Enviar</button>
      </form>
      </div>
    </>
  )
}
