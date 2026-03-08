import { NavLink } from 'react-router'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { name: 'Embarazo', href: '/embarazo' },
    { name: 'Bebés', href: '/bebes' },
    { name: 'Comuniones', href: '/comuniones' },
    { name: 'Navidad', href: '/navidad' },
    { name: 'Contacto', href: '/contacto' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          className="hover:text-brand-accent font-serif text-2xl font-bold tracking-tighter transition-colors"
        >
          DENISA OLTEANU
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ name, href }) => (
            <li key={name}>
              <NavLink
                to={href}
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

        {/* Mobile Toggle */}
        <button
          className="text-brand-primary md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`bg-brand-secondary fixed inset-0 z-40 transition-transform duration-500 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {links.map(({ name, href }) => (
            <NavLink
              key={name}
              to={href}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-brand-accent font-serif text-2xl tracking-widest uppercase"
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
