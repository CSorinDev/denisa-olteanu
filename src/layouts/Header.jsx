import { NavLink } from 'react-router'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Embarazo', href: '/embarazo' },
    { name: 'Bebés', href: '/bebes' },
    { name: 'Comuniones', href: '/comuniones' },
    { name: 'Navidad', href: '/navidad' },
    { name: 'Contacto', href: '/contacto' },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 py-3 shadow-sm backdrop-blur-md'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <NavLink
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-brand-accent z-50 font-serif text-2xl font-bold tracking-tighter transition-colors"
        >
          DENISA OLTEANU
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map(({ name, href }) => (
            <li key={name}>
              <NavLink
                to={href}
                end={href === '/'}
                className={({ isActive }) =>
                  `hover:text-brand-accent text-sm font-medium tracking-widest uppercase transition-colors ${
                    isActive ? 'text-brand-accent' : 'text-brand-primary'
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle — always on top via z-50 */}
        <button
          className="text-brand-primary z-50 cursor-pointer lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`bg-brand-secondary fixed inset-0 z-40 flex flex-col transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Top bar inside the overlay with close button */}
        <div className="flex items-center justify-between px-6 py-6">
          <span className="font-serif text-2xl font-bold tracking-tighter">
            DENISA OLTEANU
          </span>
          <button
            className="text-brand-primary cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <X size={28} />
          </button>
        </div>

        {/* Links */}
        <div className="flex grow flex-col items-center justify-center gap-8">
          {links.map(({ name, href }) => (
            <NavLink
              key={name}
              to={href}
              end={href === '/'}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `font-serif text-3xl tracking-widest uppercase transition-colors duration-300 ${
                  isActive ? 'text-brand-accent' : 'hover:text-brand-accent'
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
