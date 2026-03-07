import { NavLink } from 'react-router'

export default function Header() {
  const links = [
    {
      name: 'Denisa Olteanu Photography',
      href: '/',
    },
    {
      name: 'Embarazo',
      href: '/embarazo',
    },
    {
      name: 'Bebés',
      href: '/bebes',
    },
    {
      name: 'Comuniones',
      href: '/comuniones',
    },
    {
      name: 'Mini-Sesiones Navidad',
      href: '/navidad',
    },

    {
      name: 'Contacto',
      href: '/contacto',
    },
  ]
  return (
    <header>
      <nav>
        <ul>
          {links.map(({ name, href }, index) => (
            <li key={name.concat(index)}>
              <NavLink to={href}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
