import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const facts = [
  ['Role', 'Lead Product Designer'],
  ['Team', 'Questera AI'],
  ['Year', '2025 —'],
  ['Surface', 'Web · Mobile'],
]

const sections = [
  ['01', 'Introduction', 'What is this product?'],
  ['02', 'The challenge', "What wasn't working?"],
  ['03', 'Discovery', 'Why was it happening?'],
  ['04', 'Principles', 'What needed to change?'],
  ['05', 'Key solutions', 'What did I design, and why?'],
  ['06', 'Product structure', 'How did I simplify the whole?'],
  ['07', 'Design system', 'How did I make it scale?'],
  ['08', 'Outcome', 'What changed?'],
]

/** Abstract product screen — swap for a real capture when one can be shared. */
function Mock({
  variant,
  children,
}: {
  variant: 'crowded' | 'focused' | 'contextual' | 'plain'
  children?: ReactNode
}) {
  return (
    <div className={`mock mock-${variant}`}>
      <div className="mock-bar">
        <span />
        <span />
        <span />
        <em>greta</em>
      </div>
      <div className="mock-body">
        <div className="mock-rail" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="mock-stage">{children}</div>
      </div>
    </div>
  )
}

function Flow({
  title,
  steps,
  end,
  loop,
}: {
  title: string
  steps: string[]
  end?: string
  loop?: boolean
}) {
  return (
    <div className={`flow ${loop ? 'flow-loop' : ''}`}>
      <span className="flow-title">{title}</span>
      <ol className="flow-chain">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
        {end && <li className="flow-terminal">{end}</li>}
      </ol>
    </div>
  )
}

function Section({
  n,
  title,
  kicker,
  children,
}: {
  n: string
  title: string
  kicker: string
  children: ReactNode
}) {
  return (
    <section className="cs-section" id={`s${n}`}>
      <header className="cs-section-head">
        <span className="cs-num">{n}</span>
        <div>
          <h2>{title}</h2>
          <span className="cs-kicker">{kicker}</span>
        </div>
      </header>
      {children}
    </section>
  )
}

function Greta() {
  return (
    <>
      <Nav />

      <main id="case-page">
        <div className="cs-inner">
          <header className="cs-hero">
            <Link className="cs-back" to="/work">
              ← Work
            </Link>
            <span className="cs-eyebrow">Case study · 01</span>
            <h1>
              Greta
              <em>Turning an idea into a working product</em>
            </h1>
            <p className="cs-lede">
              Greta helps people turn an idea into a working digital product
              using AI. As Lead Product Designer I worked across the core
              experience — from helping someone start their first project to
              making a growing platform easier to navigate, discover, and
              return to.
            </p>
            <p className="cs-sub">
              Designed an AI product end-to-end across web, mobile, and growth,
              from zero to launch — now{' '}
              <strong>~5,000 paid customers</strong> and{' '}
              <strong>~$250K revenue</strong>. Led the full redesign of{' '}
              <a href="https://app.greta.sh" target="_blank" rel="noreferrer">
                app.greta.sh
              </a>{' '}
              and built the design system from scratch.
            </p>
            <dl className="cs-facts">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </header>

          <nav className="cs-toc" aria-label="Sections">
            {sections.map(([n, title]) => (
              <a href={`#s${n}`} key={n}>
                <span>{n}</span>
                {title}
              </a>
            ))}
          </nav>

          <Section n="01" title="Introduction" kicker="What is this product?">
            <div className="cs-stage">
              <Mock variant="focused">
                <div className="mock-prompt">
                  <span>Describe the product you want to build…</span>
                  <b>Build</b>
                </div>
                <div className="mock-tiles">
                  <i />
                  <i />
                  <i />
                </div>
              </Mock>
              <ol className="cs-steps">
                <li>Describe your idea</li>
                <li>Build with AI</li>
                <li>Launch</li>
              </ol>
            </div>
          </Section>

          <Section n="02" title="The challenge" kicker="More power, more complexity">
            <div className="cs-two">
              <p className="cs-body">
                As Greta grew, we added more ways for people to build,
                customize, publish, and manage their work. More capability also
                meant more complexity.
              </p>
              <p className="cs-body">
                <strong>
                  New users struggled to know where to start, useful features
                  were easy to miss, and there was little reason to come back
                  after finishing a project.
                </strong>{' '}
                My challenge was to make the experience feel simpler without
                making the product less powerful.
              </p>
            </div>

            <div className="cs-compare">
              <Flow
                title="Greta before"
                steps={['Idea', 'Build', 'Publish']}
                end="Leave"
              />
              <span className="cs-versus" aria-hidden="true">
                →
              </span>
              <Flow
                title="What we needed"
                steps={[
                  'Idea',
                  'Build',
                  'Discover',
                  'Improve',
                  'Publish',
                  'Explore',
                ]}
                end="Return"
                loop
              />
            </div>
          </Section>

          <Section n="03" title="Discovery" kicker="Where people got stuck">
            <p className="cs-body cs-wide">
              Before changing any interface, I followed how people moved through
              Greta — from arriving with an idea to publishing a first project.
              User feedback, product behaviour, support conversations, and UX
              audits kept pointing at the same three problems.
            </p>

            <div className="cs-cards">
              <article className="cs-card">
                <span className="cs-card-num">01</span>
                <h3>“Where do I start?”</h3>
                <p>Too many possibilities made the first step intimidating.</p>
                <div className="cs-card-vis vis-blank">
                  <span>?</span>
                  <span>?</span>
                  <span>?</span>
                </div>
              </article>

              <article className="cs-card">
                <span className="cs-card-num">02</span>
                <h3>“I didn't know I could do that.”</h3>
                <p>
                  Useful capabilities existed, but people never ran into them.
                </p>
                <div className="cs-card-vis vis-hidden">
                  <i />
                  <i />
                  <i />
                  <b>hidden</b>
                </div>
              </article>

              <article className="cs-card">
                <span className="cs-card-num">03</span>
                <h3>“I'm done. What now?”</h3>
                <p>Finishing a project felt like the end of the experience.</p>
                <div className="cs-card-vis vis-exit">
                  <span>Build</span>
                  <span>Publish</span>
                  <span className="dim">Exit</span>
                </div>
              </article>
            </div>
          </Section>

          <Section n="04" title="Principles" kicker="What I decided to change">
            <p className="cs-body cs-wide">
              Those three problems gave the redesign three principles.
            </p>

            <div className="cs-principles">
              <article>
                <h3>Guide</h3>
                <p>Don't make people figure out the first step.</p>
                <code>Blank canvas → Clear starting point</code>
              </article>
              <article>
                <h3>Reveal</h3>
                <p>Introduce capabilities when they become useful.</p>
                <code>Hidden features → Shown in context</code>
              </article>
              <article>
                <h3>Return</h3>
                <p>Make publishing the start of the next journey.</p>
                <code>Build → Publish → Discover → Build again</code>
              </article>
            </div>

            <blockquote className="cs-quote">
              The goal wasn't to remove complexity. It was to reveal complexity
              at the right time.
            </blockquote>
          </Section>

          <Section n="05" title="Key solutions" kicker="Designing the new journey">
            <article className="cs-solution">
              <div className="cs-solution-copy">
                <span className="cs-solution-index">5A</span>
                <h3>Making the first step obvious</h3>
                <p>
                  <b>Problem.</b> People arrived knowing what they wanted to
                  make, but not how to begin.
                </p>
                <p>
                  <b>Design response.</b> I cut the competing actions on the
                  starting screen and made the main creation path the thing you
                  see first.
                </p>
              </div>
              <div className="cs-solution-vis">
                <figure>
                  <Mock variant="crowded">
                    <div className="mock-tiles many">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </Mock>
                  <figcaption className="note bad">
                    Too many competing actions
                  </figcaption>
                </figure>
                <figure>
                  <Mock variant="focused">
                    <div className="mock-prompt">
                      <span>What do you want to build?</span>
                      <b>Start</b>
                    </div>
                    <div className="mock-tiles">
                      <i />
                      <i />
                    </div>
                  </Mock>
                  <figcaption className="note good">
                    One clear starting point
                  </figcaption>
                </figure>
              </div>
            </article>

            <article className="cs-solution">
              <div className="cs-solution-copy">
                <span className="cs-solution-index">5B</span>
                <h3>Making features easier to discover</h3>
                <p>
                  <b>Problem.</b> You shouldn't need to understand the whole
                  product before you can use it.
                </p>
                <p>
                  <b>Design response.</b> Instead of exposing everything
                  upfront, relevant capabilities surface as the work moves
                  forward.
                </p>
              </div>
              <div className="cs-solution-vis single">
                <div className="callout-scene">
                  <Mock variant="contextual">
                    <div className="mock-prompt">
                      <span>Your project</span>
                      <b>Publish</b>
                    </div>
                    <div className="mock-tiles">
                      <i />
                      <i />
                      <i />
                    </div>
                  </Mock>
                  <ul className="callouts">
                    <li>
                      <b>Need to connect something?</b>Integrations appear here.
                    </li>
                    <li>
                      <b>Ready to publish?</b>Publishing becomes prominent here.
                    </li>
                    <li>
                      <b>Want to extend it?</b>Relevant next actions appear here.
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="cs-solution">
              <div className="cs-solution-copy">
                <span className="cs-solution-index">5C</span>
                <h3>Creating reasons to return</h3>
                <p>
                  <b>Problem.</b> The journey effectively ended at publish.
                </p>
                <p>
                  <b>Design response.</b> I extended Greta beyond creation with
                  places to discover projects, find inspiration, reuse ideas,
                  and pick existing work back up.
                </p>
              </div>
              <div className="cs-solution-vis single">
                <Mock variant="plain">
                  <div className="mock-gallery">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </Mock>
                <div className="cs-compare tight">
                  <Flow title="Old" steps={['Build', 'Publish']} end="Leave" />
                  <span className="cs-versus" aria-hidden="true">
                    →
                  </span>
                  <Flow
                    title="New"
                    steps={[
                      'Build',
                      'Publish',
                      'Share',
                      'Discover',
                      'Get inspired',
                    ]}
                    end="Build again"
                    loop
                  />
                </div>
              </div>
            </article>
          </Section>

          <Section n="06" title="Product structure" kicker="Simplifying the whole">
            <p className="cs-body cs-wide">
              Improving single screens wasn't enough. As Greta grew, the overall
              structure had to become easier to understand too, so I
              reorganized the main areas around what people were trying to
              accomplish rather than how the product was built.
            </p>

            <div className="cs-ia">
              <div className="ia-col">
                <span className="ia-label">Before</span>
                <ul className="ia-flat">
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                </ul>
              </div>
              <span className="cs-versus" aria-hidden="true">
                →
              </span>
              <div className="ia-col">
                <span className="ia-label">After</span>
                <ul className="ia-grouped">
                  <li>
                    <b>Create</b>Start something
                  </li>
                  <li>
                    <b>Work</b>Continue building
                  </li>
                  <li>
                    <b>Discover</b>Find ideas
                  </li>
                  <li>
                    <b>Manage</b>Your projects
                  </li>
                </ul>
              </div>
            </div>

            <p className="cs-caption">
              From “What does this feature do?” to “What am I trying to
              accomplish?”
            </p>
          </Section>

          <Section n="07" title="Design system" kicker="A system, not just screens">
            <p className="cs-body cs-wide">
              Greta was still evolving, so the redesign couldn't only solve
              today's problems. I built reusable patterns for navigation,
              actions, states, AI interactions, cards, and content hierarchy, so
              new capability could land without making the experience heavier
              each time.
            </p>

            <div className="cs-system">
              <div className="sys-cell">
                <span>Navigation</span>
                <div className="sys-nav">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="sys-cell">
                <span>Cards</span>
                <div className="sys-cards">
                  <i />
                  <i />
                </div>
              </div>
              <div className="sys-cell">
                <span>Inputs</span>
                <div className="sys-input" />
              </div>
              <div className="sys-cell">
                <span>AI states</span>
                <div className="sys-ai">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="sys-cell">
                <span>Buttons</span>
                <div className="sys-btns">
                  <b>Primary</b>
                  <em>Ghost</em>
                </div>
              </div>
              <div className="sys-cell">
                <span>Feedback</span>
                <div className="sys-feedback">
                  <i />
                  <i />
                </div>
              </div>
            </div>

            <div className="cs-chain">
              <span>Component</span>
              <span>Pattern</span>
              <span>Product screen</span>
            </div>
          </Section>

          <Section n="08" title="Outcome" kicker="What changed, and what I learned">
            <div className="cs-two">
              <p className="cs-body">
                The redesign moved Greta from a collection of capabilities
                toward a connected journey. People had a clearer place to start,
                important capabilities became easier to find, and the experience
                carried on past building and publishing a project.
              </p>
              <p className="cs-body">
                <strong>
                  It also changed how I work: instead of designing features in
                  isolation, I started designing the relationships between them.
                </strong>
              </p>
            </div>

            <div className="cs-outcomes">
              <article>
                <h3>Clearer</h3>
                <p>A more obvious path from idea to first project.</p>
              </article>
              <article>
                <h3>Discoverable</h3>
                <p>Advanced capabilities appear when they become relevant.</p>
              </article>
              <article>
                <h3>Connected</h3>
                <p>
                  Building, publishing, discovering, and returning feel like one
                  experience.
                </p>
              </article>
            </div>
          </Section>

          <div className="cs-end">
            <Link className="cs-end-link" to="/work">
              <span>All work</span>
              <span aria-hidden="true">→</span>
            </Link>
            <a className="cs-end-link" href="mailto:vasavakhanjna22@gmail.com">
              <span>Talk about a project</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <footer id="footer">
          <span>© 2026 Khanjna Vasava</span>
          <a href="mailto:vasavakhanjna22@gmail.com">vasavakhanjna22@gmail.com</a>
        </footer>
      </main>
    </>
  )
}

export default Greta
