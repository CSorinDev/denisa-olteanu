import { Gift } from 'lucide-react'

export default function NavidadOptionalPack() {
  const opciones = [
    'Lote de 3 calendarios de faldilla con foto 30x30cm - 19,95€',
    'Lote de 6 calendarios de faldilla con foto 15x10 - 18,95€',
    'Calendario wire-o grande - 18,95€',
    'Lote de 18 calendarios de bolsillo 7x10 - 10,95€',
    'Lote de 6 postales dípticos 15x15cm - 15,95€',
    'Lote de 12 postales dípticos 15x15cm - 24,95€',
    'Lote de 24 postales dípticos 15x15cm - 44,95€',
    'Lote de 4 tarjetones 15x15cm - 9,95€',
    'Minicuadro 9x13cm con caballete - 6,95€',
    'Minicuadro 10x15cm con caballete - 7,95€',
    'Cuadro con forma (corazón, nube, óvalo, cometa) impresión UVI - 55,00€',
    'Cuadro/Lienzo a consultar tamaños y precios.',
  ]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 flex items-center gap-4">
          <div className="bg-brand-accent/10 flex h-12 w-12 items-center justify-center rounded-full">
            <Gift size={22} className="text-brand-accent" />
          </div>
          <div>
            <span className="text-brand-accent text-sm font-medium tracking-[0.3em] uppercase">
              Extras
            </span>
            <h3 className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
              Añade complementos a tu pack
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {opciones.map((opcion, i) => (
            <div
              key={i}
              className="border-brand-primary/5 bg-brand-secondary hover:border-brand-accent/30 flex items-start gap-3 rounded-sm border p-4 transition-colors"
            >
              <span className="bg-brand-accent mt-1.5 h-2 w-2 flex-none rounded-full" />
              <span className="text-brand-muted text-sm leading-relaxed font-light">
                {opcion}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
