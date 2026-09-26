import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Sections of the one-page home, in scroll order.
const sections = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
]

/* The home section crossing the middle of the screen, or '' above the first. */
function useSectionInView(enabled: boolean) {
  const [current, setCurrent] = useState('')

  useEffect(() => {
    if (!enabled) return

    const pick = () => {
      const mid = window.innerHeight / 2
      let found = ''
      for (const { id } of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= mid) found = id
      }
      setCurrent(found)
    }

    pick()
    window.addEventListener('scroll', pick, { passive: true })
    window.addEventListener('resize', pick)
    return () => {
      window.removeEventListener('scroll', pick)
      window.removeEventListener('resize', pick)
    }
  }, [enabled])

  return enabled ? current : ''
}

/* A quiet bar across the top: name and title on the left, the home page's
   sections and the résumé on the right. */
function Nav() {
  const { pathname } = useLocation()
  const inView = useSectionInView(pathname === '/')
  // A case study counts as Work.
  const current = pathname.startsWith('/work') ? 'work' : inView

  return (
    <header className="nav">
      <Link className="nav-brand" to="/" aria-label="Khanjna Vasava, product designer — home">
        <span className="nav-name">Khanjna Vasava</span>
        <span className="nav-mark" aria-hidden="true" />
        <span className="nav-role">Product designer</span>
      </Link>

      <nav aria-label="Primary">
        <ul className="nav-links">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                to={`/#${section.id}`}
                className={current === section.id ? 'active' : undefined}
                aria-current={current === section.id ? 'location' : undefined}
              >
                {section.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Résumé
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
