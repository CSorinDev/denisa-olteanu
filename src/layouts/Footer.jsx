import { Mail, Clock, Phone, MapPin, Instagram, Facebook } from 'lucide-react'
import { NavLink } from 'react-router'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-primary pt-20 pb-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto_1fr]">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <img
              src="/logo-no-bg.png"
              alt="Denisa Olteanu Photography"
              className="h-16 w-fit brightness-0 invert"
            />
            <p className="text-brand-muted/80 leading-relaxed font-light">
              Capturando la esencia de cada momento. Especialista en fotografía
              de embarazo, bebés y familias en Castellón.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:bg-brand-accent hover:border-brand-accent flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="hover:bg-brand-accent hover:border-brand-accent flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-lg font-semibold tracking-widest uppercase">
              Explorar
            </h3>
            <ul className="flex flex-col gap-3 font-light">
              <li>
                <NavLink
                  to="/embarazo"
                  className="hover:text-brand-accent transition-colors"
                >
                  Embarazo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bebes"
                  className="hover:text-brand-accent transition-colors"
                >
                  Bebés
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/comuniones"
                  className="hover:text-brand-accent transition-colors"
                >
                  Comuniones
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/navidad"
                  className="hover:text-brand-accent transition-colors"
                >
                  Sesiones Navidad
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacto"
                  className="hover:text-brand-accent transition-colors"
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-lg font-semibold tracking-widest uppercase">
              Contacto
            </h3>
            <div className="flex flex-col gap-4 font-light">
              <a
                href="http://maps.google.com/maps?q=calle+alloza+119,+castell%C3%B3n+de+la+plana"
                target="_blank"
                className="hover:text-brand-accent group flex items-center gap-3 transition-colors"
              >
                <MapPin
                  size={18}
                  className="text-brand-accent transition-transform group-hover:scale-110"
                />
                <span>C/ Alloza 119, Castellón de la Plana</span>
              </a>
              <a
                href="tel:642017128"
                className="hover:text-brand-accent group flex items-center gap-3 transition-colors"
              >
                <Phone
                  size={18}
                  className="text-brand-accent transition-transform group-hover:scale-110"
                />
                <span>642 01 71 28</span>
              </a>
              <a
                href="mailto:denisanicoletaolteanu@gmail.com"
                className="hover:text-brand-accent group flex items-center gap-3 transition-colors"
              >
                <Mail
                  size={18}
                  className="text-brand-accent transition-transform group-hover:scale-110"
                />
                <span className="break-all">
                  denisanicoletaolteanu@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-brand-accent" />
                <span>L-V 10:30-14:00 | 17:00-19:30</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-brand-muted/60 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs tracking-widest uppercase md:flex-row">
          <p>
            © {currentYear} Denisa Olteanu Photography. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Aviso Legal
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
