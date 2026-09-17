import { NavLink } from 'react-router-dom'
import { BehanceIcon, DocIcon, HomeIcon, LinkedInIcon } from './icons'

const pages = [
  { to: '/work', label: 'Work' },
  { to: '/experience', label: 'Experience' },
  { to: '/about', label: 'About' },
]

const externals = [
  { href: 'https://linkedin.com/in/khanjnavasava', label: 'LinkedIn', icon: <LinkedInIcon /> },
  { href: 'https://behance.net/vasavakhanjna', label: 'Behance', icon: <BehanceIcon /> },
  { href: '/resume.pdf', label: 'Résumé', icon: <DocIcon />, sameTab: false },
]

/* One floating control instead of a top bar: home, the three pages, the
   off-site links, and the call to action. */
function Dock() {
  return (
    <nav className="dock" aria-label="Primary">
      <NavLink className="dock-home" to="/" aria-label="Home" end>
        <HomeIcon />
      </NavLink>

      <span className="dock-divider" aria-hidden="true" />

      <ul className="dock-pages">
        {pages.map((page) => (
          <li key={page.to}>
            <NavLink to={page.to}>{page.label}</NavLink>
          </li>
        ))}
      </ul>

      <span className="dock-divider" aria-hidden="true" />

      <ul className="dock-links">
        {externals.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>

      <a className="dock-cta" href="mailto:vasavakhanjna22@gmail.com?subject=Let%27s%20talk">
        Book a Call
      </a>
    </nav>
  )
}

export default Dock
