import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from '../components/Nav'
import Book from '../components/Book'
import { projects } from '../data/projects'

const slugFor = (hash: string) => {
  const slug = hash.replace('#', '')
  return projects.some((project) => project.slug === slug) ? slug : ''
}

/* Rows with a case study navigate, so the first openable row is the default. */
const firstOpenable = projects.find((project) => !project.caseStudy)?.slug ?? ''

function Work() {
  const { hash } = useLocation()
  const [openSlug, setOpenSlug] = useState(() => slugFor(hash) || firstOpenable)

  // Follow later hash changes (a /work#slug link from the home shelf)
  // without an effect, so opening a row never costs a second render.
  const [seenHash, setSeenHash] = useState(hash)
  if (hash !== seenHash) {
    setSeenHash(hash)
    const slug = slugFor(hash)
    if (slug) setOpenSlug(slug)
  }

  return (
    <>
      <Nav />
      <div id="layout">
        <main id="work-page">
          <div className="page-head">
            <h1>Work</h1>
            <span className="page-count">/{projects.length}</span>
          </div>

          <ul className="ledger">
            <li className="ledger-legend" aria-hidden="true">
              <span>Project</span>
              <span className="ledger-meta">
                <span>Type</span>
                <span>Surface</span>
                <span className="ledger-year">Year</span>
              </span>
              <span />
            </li>

            {projects.map((project) => {
              const isOpen = openSlug === project.slug
              const meta = (
                <span className="ledger-meta">
                  <span>{project.type}</span>
                  <span>{project.surface}</span>
                  <span className="ledger-year">{project.year}</span>
                </span>
              )

              // A project with a case study opens its own page instead of
              // unfolding in place.
              if (project.caseStudy) {
                return (
                  <li className="ledger-row" id={project.slug} key={project.slug}>
                    <Link className="ledger-header is-link" to={`/work/${project.slug}`}>
                      <span className="ledger-name">{project.label}</span>
                      {meta}
                      <span className="ledger-mark" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                )
              }

              return (
                <li
                  className={`ledger-row ${isOpen ? 'open' : ''}`}
                  id={project.slug}
                  key={project.slug}
                >
                  <button
                    type="button"
                    className="ledger-header"
                    onClick={() => setOpenSlug(isOpen ? '' : project.slug)}
                    aria-expanded={isOpen}
                  >
                    <span className="ledger-name">{project.label}</span>
                    {meta}
                    <span className="ledger-mark" aria-hidden="true">
                      {isOpen ? '×' : '+'}
                    </span>
                  </button>

                  <div className="ledger-body">
                    <div className="ledger-clip">
                      <div className="ledger-inner">
                        <Book project={project} />
                        <div className="ledger-detail">
                          <p>{project.description}</p>
                          <dl className="ledger-facts">
                            <dt>Role</dt>
                            <dd>{project.role}</dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <footer id="footer">
            <span>© 2026 Khanjna Vasava</span>
            <a href="mailto:vasavakhanjna22@gmail.com">vasavakhanjna22@gmail.com</a>
          </footer>
        </main>
      </div>
    </>
  )
}

export default Work
