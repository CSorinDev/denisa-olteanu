import { Info } from 'lucide-react'
import { NAVIDAD_INFO_ITEMS } from '../constants/navidad'

export default function NavidadMoreInfo() {
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
            {NAVIDAD_INFO_ITEMS.map((item, i) => (
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
