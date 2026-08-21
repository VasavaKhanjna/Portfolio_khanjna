import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'

const projects = [
  {
    label: 'Greta',
    tone: 'sand',
    metric: '~5K users',
    description:
      'Designed an AI product end-to-end across web, mobile, and growth, from zero to launch — now ~5,000 paid customers and ~$250K revenue. Led the full redesign of app.greta.sh and built the design system from scratch.',
  },
  {
    label: 'PLGOS',
    tone: 'ink',
    metric: 'PLG platform',
    description:
      'Designed a product-led growth platform end-to-end: onboarding, in-app guidance, gamification (quizzes, streaks, leaderboards), feedback loops, and pricing — in light and dark themes.',
  },
  {
    label: 'Flows',
    tone: 'clay',
    metric: 'No-code builder',
    description:
      'Shipped a no-code workflow automation builder for non-technical users, including the project theme system and full auth UX with OTP and Google OAuth.',
  },
]

const connectLinks = [
  { label: 'Email', href: 'mailto:vasavakhanjna22@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/khanjnavasava' },
  { label: 'Behance', href: 'https://behance.net/vasavakhanjna' },
]

function Home() {
  return (
    <>
      <Nav />

      <div id="layout">
        <Sidebar />

        <main id="content">
          <section className="hero-copy">
            <span className="badge">Product Designer · UI/UX</span>
            <h1>
              Product design for
              <br />
              AI-powered SaaS platforms
            </h1>
            <p className="lede">
              Combining design systems and interaction craft with usability
              testing, continuous user feedback, and AI-assisted development.
            </p>
          </section>

          <section id="work" className="work-grid">
            {projects.map((project) => (
              <div className="work-card" key={project.label}>
                <div className="book-wrap">
                  <div className="book-page" />
                  <div className={`book tone-${project.tone}`}>
                    <span className="book-badge">{project.metric}</span>
                    <span className="book-title">{project.label}</span>
                  </div>
                </div>
                <p className="work-desc">{project.description}</p>
              </div>
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
