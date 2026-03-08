export default function HomeHero() {
  return (
    <section className="relative flex h-[80vh] items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero/hero-image.jpg"
          alt="Denisa Olteanu Photography"
          className="h-full w-full object-cover"
        />
        <div className="bg-brand-primary/30 absolute inset-0 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight drop-shadow-2xl md:text-7xl lg:text-8xl">
          Denisa Olteanu <br />
          <span className="text-brand-accent font-normal italic">
            Photography
          </span>
        </h1>
        <p className="mb-10 text-lg font-light tracking-[0.2em] uppercase opacity-90 drop-shadow-md md:text-xl">
          Capturando la belleza de tu historia
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#sesiones"
            className="text-brand-primary hover:bg-brand-accent bg-white px-8 py-3 font-medium tracking-widest uppercase transition-all duration-300 hover:text-white"
          >
            Ver Sesiones
          </a>
          <a
            href="/contacto"
            className="hover:text-brand-primary border border-white px-8 py-3 font-medium tracking-widest text-white uppercase transition-all duration-300 hover:bg-white"
          >
            Reservar Ahora
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="h-12 w-px bg-white/50" />
      </div>
    </section>
  )
}
