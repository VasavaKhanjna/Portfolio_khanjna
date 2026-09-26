import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Section, Shot } from '../components/CaseStudy'
import hero from '../assets/plgos/hero.png'
import approach from '../assets/plgos/approach.jpg'
import onboarding from '../assets/plgos/onboarding.jpg'
import libOnboarding from '../assets/plgos/lib-onboarding.svg'
import libFeedback from '../assets/plgos/lib-feedback.svg'
import libGamification from '../assets/plgos/lib-gamification.svg'
import libAssistance from '../assets/plgos/lib-assistance.svg'

const facts = [
  ['Role', 'Lead Designer'],
  ['Timeline', '2024 — 2025'],
  ['Team', 'Questera AI'],
  ['Surface', 'Web'],
]

const library = [
  ['Onboarding', libOnboarding],
  ['Feedback and surveys', libFeedback],
  ['Gamification', libGamification],
  ['User assistance', libAssistance],
]

const deliverables = [
  ['Component library', 'SaaS product-led growth components'],
  ['UI/UX design', 'End-to-end, from auth to billing'],
  ['Conversion workflows', 'Onboarding, upgrades, paywalls'],
  ['Dashboard assets', 'Pre-built, ready to drop in'],
]

const sections = [
  ['01', 'The challenge'],
  ['02', 'My approach'],
  ['03', 'Architecture'],
  ['04', 'Onboarding'],
]

function Plgos() {
  return (
    <>
      <Nav />

      <main id="case-page">
        <div className="cs-inner">
          <header className="cs-hero">
            <Link className="cs-back" to="/#work">
              ← Work
            </Link>
            <span className="cs-eyebrow">Product Design · 2024 — 2025</span>
            <h1>
              PLGOS
              <em>Product-led growth, without the engineering backlog</em>
            </h1>
            <p className="cs-lede">
              A pre-built library of product-led growth components that drops
              into any SaaS platform — onboarding, self-serve upgrades, viral
              loops, and usage-based paywalls, ready in hours instead of weeks.
            </p>
            <p className="cs-sub">
              <strong>100+ PLG components</strong>, from simple authentication
              forms to complex billing management dashboards.
            </p>

            <dl className="cs-facts">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>

            <ul className="cs-deliverables">
              {deliverables.map(([name, detail]) => (
                <li key={name}>
                  <b>{name}</b>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <Shot
              tall
              label="PLGOS hero"
              src={hero}
              brief="The component library at a glance — a spread of onboarding, paywall and billing components side by side."
            />
          </header>

          <nav className="cs-toc" aria-label="Sections">
            {sections.map(([n, toc]) => (
              <a href={`#s${n}`} key={n}>
                <span>{n}</span>
                {toc}
              </a>
            ))}
          </nav>

          <Section
            n="01"
            title="The challenge"
            kicker="PLG is a product problem, and an engineering one"
          >
            <p className="cs-body cs-wide">
              SaaS companies looking to shift to a Product-Led Growth (PLG)
              model face a massive technical hurdle: building the
              infrastructure. Features like seamless onboarding, self-serve
              upgrades, viral loops, and usage-based paywalls require
              significant engineering resources, delaying time-to-market.
            </p>
            <p className="cs-body cs-wide cs-spaced">
              <strong>
                The challenge was to design a comprehensive, pre-built library
                of PLG components that integrates effortlessly into SaaS
                platforms
              </strong>{' '}
              — drastically reducing development time while ensuring high
              conversion rates and a premium user experience.
            </p>
          </Section>

          <Section n="02" title="My approach" kicker="Abstracting the complexity">
            <p className="cs-body cs-wide">
              To build a truly useful PLG system, we had to abstract complexity.
              The approach focused on creating highly modular, plug-and-play UI
              components that looked native to any SaaS environment. We
              prioritized frictionless onboarding flows and transparent upgrade
              paths.
            </p>

            <Shot
              label="My approach"
              brief="The campaign editor, with the live preview of a component beside its settings."
              src={approach}
            />
          </Section>

          <Section
            n="03"
            title="Component architecture"
            kicker="100+ components, one system"
          >
            <div className="cs-two">
              <p className="cs-body">
                I architected a comprehensive library of 100+ PLG components,
                ranging from simple authentication forms to complex billing
                management dashboards.
              </p>
              <p className="cs-body">
                Each component was designed to be highly customizable, ensuring
                it could seamlessly match the branding of any host application
                while maintaining proven conversion-optimized layouts.
              </p>
            </div>

            <div className="pg-strip" tabIndex={0} aria-label="Component library, scroll sideways">
              {library.map(([name, img]) => (
                <figure key={name}>
                  <img src={img} alt={`${name} components`} loading="lazy" />
                  <figcaption>{name}</figcaption>
                </figure>
              ))}
            </div>
          </Section>

          <Section
            n="04"
            title="Optimizing onboarding"
            kicker="From weeks to hours"
          >
            <p className="cs-body cs-wide">
              A core focus was reducing friction during the initial user
              onboarding flow.
            </p>
            <p className="cs-body cs-wide cs-spaced">
              We developed a modular authentication and setup wizard that
              integrates social logins, magic links, and progressive profiling,
              allowing SaaS companies to implement a best-in-class onboarding
              experience <strong>in hours instead of weeks</strong>.
            </p>

            <Shot
              tall
              label="Onboarding wizard"
              brief="PLGOS site screens laid out at an angle — the AI-powered onboarding hero, integrations, user assistance and feedback."
              src={onboarding}
            />
          </Section>

          <div className="cs-end">
            <Link className="cs-end-link" to="/#work">
              <span>All work</span>
              <span aria-hidden="true">→</span>
            </Link>
            <a className="cs-end-link" href="mailto:vasavakhanjna22@gmail.com">
              <span>Talk about a project</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

export default Plgos
