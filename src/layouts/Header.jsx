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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white/95 py-3 shadow-sm backdrop-blur-md'
          : isMenuOpen
            ? 'bg-white/95 py-6 backdrop-blur-md'
            : 'bg-transparent py-6'
      }`}
    >
      {/* Top bar – always visible, same title + same hamburger button */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <NavLink
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-brand-accent font-serif text-2xl font-bold tracking-tighter transition-colors"
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

        {/* Mobile Toggle – same button toggles open/close */}
        <button
          className="text-brand-primary cursor-pointer lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu – full height slide down */}
      <div
        className={`fixed inset-0 -z-10 flex h-screen w-full flex-col items-center justify-center bg-white backdrop-blur-md transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
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
