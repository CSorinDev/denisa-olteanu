export default function NavidadHero() {
  return (
    <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}hero/navidad-hero.webp`}
          alt="Mini-Sesiones de Navidad"
          className="h-full w-full object-cover"
        />
        <div className="bg-brand-primary/40 absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <span className="text-brand-accent mb-4 block text-sm font-medium tracking-[0.3em] uppercase drop-shadow-sm">
          Edición Limitada
        </span>
        <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight drop-shadow-2xl md:text-7xl">
          Mini-Sesiones <br />
          <span className="text-brand-accent italic">Navidad</span>
        </h1>
        <p className="text-lg font-light tracking-wide opacity-90 drop-shadow-md">
          Captura la magia de estas fiestas con una sesión fotográfica única
        </p>
      </div>
    </section>
  )
}
