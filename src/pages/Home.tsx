import { Link } from 'react-router-dom'
import Dock from '../components/Dock'
import Hero from '../components/Hero'
import Book from '../components/Book'
import { projects } from '../data/projects'

const connectLinks = [
  { label: 'Email', href: 'mailto:vasavakhanjna22@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/khanjnavasava' },
  { label: 'Behance', href: 'https://behance.net/vasavakhanjna' },
]

function Home() {
  return (
    <>
      <Dock />

      <div id="layout">
        <main id="content">
          <Hero />

          <section id="work" className="work-grid">
            {projects.map((project) => (
              <Link
                className="work-card"
                to={project.caseStudy ? `/work/${project.slug}` : `/work#${project.slug}`}
                key={project.slug}
              >
                <Book project={project} />

                <div className="work-caption">
                  <h3 className="work-name">{project.label}</h3>
                  <p className="work-meta">
                    <span>{project.type}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.surface}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </p>
                  <p className="work-desc">{project.description}</p>
                </div>
              </Link>
            ))}
          </section>

          <section id="connect" className="connect-section">
            <div className="connect-row">
              <h2>Hello.</h2>
              <p>
                I'm Khanjna, a product designer based in Gandhinagar, India.
                Over the past 2+ years I've taken complex AI-powered products
                from zero to launch, most recently leading design for Greta
                at Questera AI.
              </p>
            </div>

            <div className="connect-row">
              <h3>How I can help</h3>
              <p>
                I help teams turn ambiguous product ideas into shipped
                experiences — from <strong>user research and design systems</strong> to{' '}
                <strong>interaction design and design QA</strong>. I work closely with
                engineering to <strong>ship fast without losing craft</strong>, across
                web and mobile.
              </p>
            </div>

            <div className="connect-row connect-row-links">
              <h3>Let's connect</h3>
              <div className="connect-links">
                {connectLinks.map((link) => (
                  <a
                    className="connect-link"
                    href={link.href}
                    key={link.label}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <span>{link.label}</span>
                    <span className="connect-arrow" aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <footer id="footer">
            <span>© 2026 Khanjna Vasava</span>
            <a href="mailto:vasavakhanjna22@gmail.com">vasavakhanjna22@gmail.com</a>
          </footer>
        </main>
      </div>
    </>
  )
}

export default Home
