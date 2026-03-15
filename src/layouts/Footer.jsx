import { Mail, Clock, Phone, MapPin, Instagram, Facebook } from 'lucide-react'
import { NavLink } from 'react-router'
import { NAV_LINKS } from '../constants/navigation'
import { CONTACT_INFO } from '../constants/contactInfo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-primary pt-20 pb-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto_1fr]">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <img
              src={`${import.meta.env.BASE_URL}logo-no-bg.png`}
              alt="Denisa Olteanu Photography"
              className="h-16 aspect-square w-fit brightness-0 invert"
            />
            <p className="text-brand-muted/80 leading-relaxed font-light">
              Capturando la esencia de cada momento. Especialista en fotografía
              de embarazo, bebés y familias en Castellón.
            </p>
            <div className="flex gap-4">
              <a
                href={CONTACT_INFO.social.instagram}
                className="hover:bg-brand-accent hover:border-brand-accent flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
              <a
                href={CONTACT_INFO.social.facebook}
                className="hover:bg-brand-accent hover:border-brand-accent flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
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
              {NAV_LINKS.filter(l => l.href !== '/').map(({ name, href }) => (
                <li key={name}>
                  <NavLink
                    to={href}
                    className="hover:text-brand-accent transition-colors"
                  >
                    {name === 'Navidad' ? 'Sesiones Navidad' : name}
                  </NavLink>
                </li>
              ))}
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
                href={CONTACT_INFO.addressHref}
                target="_blank"
                className="hover:text-brand-accent group flex items-center gap-3 transition-colors"
                rel="noreferrer"
              >
                <MapPin
                  size={18}
                  className="text-brand-accent transition-transform group-hover:scale-110"
                />
                <span>{CONTACT_INFO.address}</span>
              </a>
              <a
                href={CONTACT_INFO.phoneHref}
                className="hover:text-brand-accent group flex items-center gap-3 transition-colors"
              >
                <Phone
                  size={18}
                  className="text-brand-accent transition-transform group-hover:scale-110"
                />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a
                href={CONTACT_INFO.emailHref}
                className="hover:text-brand-accent group flex items-center gap-3 transition-colors"
              >
                <Mail
                  size={18}
                  className="text-brand-accent transition-transform group-hover:scale-110"
                />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-brand-accent" />
                <span>{CONTACT_INFO.schedule}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-brand-muted/60 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs tracking-widest uppercase md:flex-row">
          <p>
            © {currentYear} {import.meta.env.VITE_SITE_NAME || 'Denisa Olteanu Photography'}. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <NavLink
              to="/aviso-legal"
              className="transition-colors hover:text-white"
            >
              Aviso Legal
            </NavLink>
            <NavLink
              to="/politica-privacidad"
              className="transition-colors hover:text-white"
            >
              Política de Privacidad
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
