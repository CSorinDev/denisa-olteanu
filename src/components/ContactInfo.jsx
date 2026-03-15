import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactInfo() {
  return (
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
          rel="noreferrer"
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
  )
}
