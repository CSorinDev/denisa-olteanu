export default function SobreMiSection() {
  return (
    <section className="overflow-hidden bg-white py-24" id="sobre-mi">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image with decorative Frame */}
          <div className="group relative">
            <div className="border-brand-accent/30 absolute -inset-4 translate-x-4 translate-y-4 border transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative aspect-4/5 overflow-hidden shadow-2xl">
              <img
                src="/do.jpg"
                alt="Denisa Olteanu"
                className="h-full w-full scale-105 object-cover grayscale transition-all duration-700 hover:scale-100 hover:grayscale-0"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-brand-accent text-sm font-medium tracking-[0.3em] uppercase">
                Conóceme
              </span>
              <h2 className="font-serif text-4xl leading-tight font-bold md:text-5xl">
                Detrás de <br /> la Cámara
              </h2>
            </div>

            <div className="text-brand-muted flex flex-col gap-6 text-lg leading-relaxed font-light">
              <p className="first-letter:text-brand-accent first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-5xl">
                Hola, soy Denisa y esta era antes mi pasión, pero ahora es mi
                profesión. Mi pequeña fábrica de recuerdos.
              </p>
              <p>
                Empecé en la fotografía hace unos cuantos años, capturando de
                todo, y hace unos 7 años que me dedico a la fotografía newborn
                donde descubrí una nueva rama creativa para expresarme y
                disfrutar con la fotografía.{' '}
                <span className="text-brand-primary font-medium italic">
                  ¡Amo mi trabajo!
                </span>
              </p>
              <p>
                Siempre he sido creativa y, como muchos me dicen, artista. En el
                estudio hay una prueba de ello: unas cuantas ilustraciones de mi
                antigua pasión que ahora conviven con mis cámaras.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="/contacto"
                className="text-brand-primary group inline-flex items-center gap-4 font-semibold tracking-widest uppercase"
              >
                <span className="bg-brand-accent h-px w-8 transition-all duration-300 group-hover:w-16" />
                Trabajemos Juntos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
