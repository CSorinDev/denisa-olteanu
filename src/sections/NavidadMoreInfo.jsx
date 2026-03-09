import { Info } from 'lucide-react'

export default function NavidadMoreInfo() {
  const info = [
    'Puedes comprar la galería completa, en bruto, por 40€ más. Además puedes elegir fotografías extra a editar por 10€/foto.',
    'Para bloquear la fecha de tu sesión debes realizar un pago de 17,00€ en concepto de reserva, que luego será descontado del precio final del pack que elijas el día de la sesión.',
    'Se puede pagar vía transferencia bancaria, bizum o acudiendo al estudio y pagando en efectivo.',
    'La cancelación de la sesión supone la pérdida de la reserva.',
    'No presentarse el día de la sesión supone la pérdida de la reserva.',
    'La cancelación de la sesión por motivos de salud con justificante médico supone la posibilidad de aplazamiento de la sesión según disponibilidad del fotógrafo o canjear los 30,00€ por productos de impresión en el estudio en un plazo de máximo 30 días.',
    'Reservar tu sesión supone la aceptación de las bases anteriormente escritas.',
  ]

  return (
    <section className="bg-brand-secondary py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="border-brand-accent/20 rounded-sm border bg-white p-8 shadow-sm md:p-10">
          <div className="mb-6 flex items-center gap-3">
            <Info size={20} className="text-brand-accent" />
            <h4 className="font-serif text-lg font-semibold tracking-tight">
              Información importante
            </h4>
          </div>

          <ul className="flex flex-col gap-4">
            {info.map((item, i) => (
              <li
                key={i}
                className="text-brand-muted flex items-start gap-3 text-sm leading-relaxed font-light"
              >
                <span className="bg-brand-accent/60 mt-1.5 h-1.5 w-1.5 flex-none rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
