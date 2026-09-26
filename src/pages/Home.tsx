import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Book from '../components/Book'
import ExperienceSection from '../components/ExperienceSection'
import AboutSection from '../components/AboutSection'
import { projects } from '../data/projects'

function Home() {
  return (
    <>
      <Nav />

      <div id="layout">
        <main id="content">
          <Hero />

          <section id="intro" className="intro">
            <p className="intro-hello">Hello.</p>
            <h2 className="intro-lead">
              Hi, I&rsquo;m Khanjna — a Product Designer based in Gandhinagar,
              India. I believe design starts with empathy, not aesthetics. As
              the founding designer at Greta, I helped take it from zero to
              5,000+ paying customers while building the design system that
              keeps product and engineering in sync. I turn ambiguous ideas
              into thoughtful, shippable experiences through research,
              interaction design, and design systems — always designing for the
              person on the other side of the screen.
            </h2>
          </section>

          <section id="work" className="work-grid">
            {projects.map((project) => (
              <Link
                className="work-card"
                to={`/work/${project.slug}`}
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
                </div>
              </Link>
            ))}
          </section>

          <ExperienceSection />

          <AboutSection />


          <Footer />
        </main>
      </div>
    </>
  )
}

export default Home
