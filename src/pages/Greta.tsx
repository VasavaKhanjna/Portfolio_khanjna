import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Dock from '../components/Dock'
import gretaHero from '../assets/greta/greta-hero.svg'
import homeV1 from '../assets/greta/home-tab-v1.svg'
import homeV2 from '../assets/greta/home-tab-v2.svg'
import Annotated from '../components/Annotated'
import ResearchWall from '../components/ResearchWall'
import comparisonTable from '../assets/greta/comparison-table.svg'
import type { Panel } from '../components/Annotated'

const facts = [
  ['Role', 'Product Designer'],
  ['Timeline', '2025 — 2026'],
  ['Team', 'Questera AI'],
  ['Surface', 'Web · Mobile'],
]

const deliverables = [
  ['End-to-end UX', 'Strategy through shipped screens'],
  ['Activation', 'The core getting-started flow'],
  ['Feature discovery', 'Surfacing what people never found'],
  ['Design system', 'The patterns that keep people coming back'],
]

const sections = [
  ['01', 'The problem', 'Open the app, stare at a blank box', 'Where the experience broke'],
  ['02', 'Team & role', 'Who was in the room', 'What I owned, and what I didn’t'],
  ['03', 'Discovery', 'Starting with questions, not screens', 'Research first, design second'],
  ['04', 'New journey', 'Turning research into a journey', 'Architecture, onboarding, discovery'],
  ['05', 'Testing', 'Testing it before believing it', 'What the flows got wrong'],
  ['06', 'Design system', 'Building it to last', 'A system, not just screens'],
  ['07', 'Outcome', 'What changed', 'The numbers, and what they mean'],
  ['08', 'Reflection', 'Looking back', 'What I’d do differently'],
]

/* Pins are placed in % of each shot, read off the 1440x800 source frames. */
const navBefore: Panel = {
  kind: 'before',
  badge: 'Before',
  caption: 'Old home and hero section',
  src: homeV1,
  alt: 'The old Greta home tab',
  pins: [
    {
      x: 36,
      y: 25,
      dir: 'up',
      gap: 44,
      text: 'Greeting takes the space the task needs',
    },
    {
      x: 80.5,
      y: 4.5,
      dir: 'up',
      gap: 6,
      align: 'end',
      text: 'Too many top-level links',
    },
    {
      x: 28.5,
      y: 72,
      dir: 'down',
      gap: 42,
      text: 'Multiple competing actions',
    },
    {
      x: 63.6,
      y: 76.6,
      dir: 'down',
      gap: 6,
      text: 'Extra chips and secondary CTAs increase cognitive load',
    },
  ],
}

const navAfter: Panel = {
  kind: 'after',
  badge: 'After',
  caption: 'Redesigned home and hero section',
  src: homeV2,
  alt: 'The redesigned Greta home tab',
  pins: [
    {
      x: 49.5,
      y: 5.6,
      dir: 'up',
      gap: 44,
      text: 'Reduced to 3 primary nav links',
    },
    {
      x: 94.4,
      y: 5.4,
      dir: 'up',
      gap: 6,
      align: 'end',
      text: 'Cleaner hierarchy',
    },
    {
      x: 25,
      y: 69,
      dir: 'down',
      gap: 42,
      text: 'Prompt area becomes the focal point',
    },
    {
      x: 75.2,
      y: 81.7,
      dir: 'down',
      gap: 6,
      text: 'Stronger emphasis on the main action',
    },
  ],
}

/** Copy still waiting on a real number, name, or quote. Replace before publishing. */
function T({ children }: { children: ReactNode }) {
  return <span className="cs-todo">{children}</span>
}

/** A slot for real product imagery. Swap each one for the actual asset. */
function Shot({
  label,
  brief,
  tall,
}: {
  label: string
  brief: string
  tall?: boolean
}) {
  return (
    <figure className={`cs-shot ${tall ? 'is-tall' : ''}`}>
      <span className="cs-shot-tag">Visual</span>
      <figcaption>
        <b>{label}</b>
        <span>{brief}</span>
      </figcaption>
    </figure>
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
      <Dock />

      <main id="case-page">
        <div className="cs-inner">
          <header className="cs-hero">
            <Link className="cs-back" to="/work">
              ← Work
            </Link>
            <span className="cs-eyebrow">Product Design · 2025 — 2026</span>
            <h1>
              Greta.sh
              <em>Turning a blank prompt box into a path</em>
            </h1>
            <p className="cs-lede">
              Greta turns a described idea into a working app. I led the
              redesign that took it from a great first five minutes to a product
              people actually come back to — end-to-end UX, activation, feature
              discovery, and the design system holding it together.
            </p>
            <p className="cs-sub">
              Now <strong>~5,000 paid customers</strong> and{' '}
              <strong>~$250K revenue</strong>. Led the full redesign of{' '}
              <a href="https://app.greta.sh" target="_blank" rel="noreferrer">
                app.greta.sh
              </a>{' '}
              and built the design system from scratch.
            </p>

            <a
              className="cs-cta"
              href="https://app.greta.sh"
              target="_blank"
              rel="noreferrer"
            >
              <span>View live site</span>
              <span aria-hidden="true">→</span>
            </a>

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

            <figure className="cs-hero-shot">
              <img src={gretaHero} alt="The redesigned Greta dashboard" />
            </figure>
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
            title="Open the app, stare at a blank box"
            kicker="Where the experience broke"
          >
            <div className="cs-two">
              <p className="cs-body">
                Greta's pitch is simple: describe an idea, and AI turns it into
                a working app. Type a sentence, watch something real take shape.
                That's a great first five minutes.
              </p>
              <p className="cs-body">
                The problem showed up on the second visit. By then Greta wasn't
                just a prompt box — it was a whole platform. Integrations. Team
                collaboration. AI agents. A publishing pipeline. A growing list
                of things you <em>could</em> do, with very little telling you
                what you <em>should</em> do next.
              </p>
            </div>

            <p className="cs-body cs-wide cs-spaced">
              <strong>
                New users froze at the blank canvas. People who'd already built
                one app never found out Greta could do five other things they
                actually needed. And most people did exactly one thing and
                disappeared
              </strong>{' '}
              — build, publish, leave — until their next idea, if it ever came.
            </p>

            <p className="cs-stat-note">
              <T>X%</T> of users never returned within 30 days of publishing
              their first app; “where do I start” made up <T>X%</T> of
              first-week support tickets.
            </p>

            <div className="cs-compare">
              <Flow
                title="What people did"
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

            <p className="cs-body cs-wide cs-spaced">
              My job was to take all that power and turn it into something that
              felt like a path, not a maze.
            </p>

            <Annotated
              eyebrow="Greta"
              title="Navigation redesign"
              sub="From cluttered navigation to a cleaner, more focused hero experience."
              panels={[navBefore, navAfter]}
              note="A cleaner, more focused experience for what matters — building."
            />
          </Section>

          <Section
            n="02"
            title="Who was in the room"
            kicker="What I owned, and what I didn't"
          >
            <p className="cs-body cs-wide">
              I led design on this from strategy through shipping, working
              alongside <T>PM name / role</T>, <T>X engineers</T>, and{' '}
              <T>research team, if relevant</T>. <T>Collaborator</T> led{' '}
              <T>a specific piece</T>; engineering scoped what was actually
              buildable around <T>a specific constraint</T>.
            </p>

            <ul className="cs-owned">
              <li>Product strategy</li>
              <li>Information architecture</li>
              <li>Interaction design</li>
              <li>Design system</li>
            </ul>
          </Section>

          <Section
            n="03"
            title="Starting with questions, not screens"
            kicker="Research first, design second"
          >
            <p className="cs-body cs-wide">
              Before I touched a single screen, I wanted to know <em>why</em>{' '}
              people were getting stuck — not assume a fresh coat of paint would
              fix it. So this started as a discovery project.
            </p>

            <h3 className="cs-sub-head">Understanding what Greta actually was</h3>
            <p className="cs-body cs-wide">
              I mapped the entire product — onboarding, the AI app-generation
              flow, publishing, templates, integrations, everything that kept
              people coming back or didn't — and sat down with stakeholders to
              understand what success looked like from the business side: goals,
              metrics, how Greta actually makes money.
            </p>

            <div className="cs-goals">
              <article>
                <span>Success for the business</span>
                <p>
                  <T>e.g. paid conversion within 14 days</T>
                </p>
              </article>
              <article>
                <span>Success for the user</span>
                <p>
                  <T>e.g. a working app by the end of their first session</T>
                </p>
              </article>
            </div>

            <h3 className="cs-sub-head">
              Listening to people who were actually stuck
            </h3>
            <p className="cs-body cs-wide">
              Interviews (<T>N people</T>), product analytics, UX audits,
              support conversations — I went looking for the moments people got
              stuck, and more importantly, why. Three patterns kept surfacing.
            </p>

            <ResearchWall />

            <p className="cs-caption">
              Tagged support conversations, clustered — the three patterns came
              straight out of this pile.
            </p>

            <h3 className="cs-sub-head">
              Looking at what everyone else was doing
            </h3>
            <p className="cs-body cs-wide">
              I spent time with Lovable, Bolt, and Emergent — not to copy them,
              but to understand how they handled onboarding, “type an idea and
              go” flows, project organization, navigation, and how much they
              explained versus left for people to discover on their own.
            </p>
            <p className="cs-body cs-wide cs-spaced">
              <strong>
                Everyone in this space is good at getting people to build fast.
                Almost nobody had thought about what happens after the first app
                ships.
              </strong>{' '}
              That gap is where a lot of this redesign came from — better
              project management, better discoverability, and two features built
              specifically to close it.
            </p>

            <div className="cs-goals">
              <article>
                <span>Launchpad</span>
                <p>
                  <T>plain-language description of what it is and does</T>
                </p>
              </article>
              <article>
                <span>Marketplace</span>
                <p>
                  <T>plain-language description</T>
                </p>
              </article>
            </div>

            <figure className="cs-plate">
              <img
                src={comparisonTable}
                alt="Competitive comparison grid: Greta vs. Lovable, Bolt, and Emergent across onboarding, discoverability, post-launch, and how much each explains."
              />
            </figure>
            <p className="cs-caption">
              Greta vs. Lovable, Bolt, and Emergent — onboarding,
              discoverability, post-launch, and how much each one explains.
            </p>
          </Section>

          <Section
            n="04"
            title="Turning research into a journey"
            kicker="Architecture, onboarding, discovery"
          >
            <p className="cs-body cs-wide">
              With the research done, I stopped asking “does this page look
              better” and started asking “does this feel simpler to move
              through.”
            </p>
            <p className="cs-body cs-wide cs-spaced">
              I rebuilt the information architecture around what people were
              actually trying to <em>do</em>, instead of around Greta's list of
              features. Navigation got simpler. The more advanced tools only
              surfaced when they were actually relevant — progressive
              disclosure — instead of sitting buried in a settings menu waiting
              to be found by accident.
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

            <div className="cs-beat">
              <h3 className="cs-sub-head">Onboarding, before → after</h3>
              <p className="cs-body cs-wide">
                <T>concrete before/after description</T>
              </p>
              <Shot
                tall
                label="The onboarding flow, before and after"
                brief="Three or four screens each way. The strongest craft moment in the study — walk the flow rather than describing it."
              />
            </div>

            <div className="cs-beat">
              <h3 className="cs-sub-head">Feature discovery, before → after</h3>
              <p className="cs-body cs-wide">
                <T>concrete before/after description</T>
              </p>
              <Shot
                label="Contextual suggestion in action"
                brief="One annotated screen with a callout pointing at the moment an integration gets surfaced."
              />
            </div>

            <p className="cs-body cs-wide cs-spaced">
              <strong>
                Complexity didn't disappear. It just stopped being the user's
                problem to figure out alone.
              </strong>
            </p>
          </Section>

          <Section
            n="05"
            title="Testing it before believing it"
            kicker="What the flows got wrong"
          >
            <p className="cs-body cs-wide">
              Before moving into polished, final-looking screens, I put the new
              flows in front of <T>N users</T> —{' '}
              <T>moderated testing / a beta cohort</T>. One real finding:{' '}
              <T>what you learned, and what changed because of it</T>.
            </p>

            <Shot
              label="Usability testing"
              brief="A still from a session, or a before/after showing exactly what moved as a result of testing."
            />
          </Section>

          <Section
            n="06"
            title="Building it to last"
            kicker="A system, not just screens"
          >
            <p className="cs-body cs-wide">
              High-fidelity design came last — only once the flows were tested
              and actually working. Alongside the redesign I built a design
              system: reusable components, consistent interaction patterns, and
              a visual language that looked like the modern, AI-first product
              Greta was trying to be. The point wasn't to make things pretty —
              it meant the next feature Greta shipped wouldn't mean starting
              from zero.
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

            <Shot
              label="Component library snapshot"
              brief="Buttons, cards, colour tokens and type scale laid out in a grid — one image that proves systems thinking."
            />
          </Section>

          <Section
            n="07"
            title="What changed"
            kicker="The numbers, and what they mean"
          >
            <div className="cs-metrics">
              <article>
                <b>
                  <T>X%</T>
                </b>
                <span>increase in 30-day return rate</span>
              </article>
              <article>
                <b>
                  <T>X%</T>
                </b>
                <span>increase in feature adoption</span>
              </article>
              <article>
                <b>
                  <T>X%</T>
                </b>
                <span>fewer “where do I start” tickets</span>
              </article>
              <article>
                <b>
                  <T>X%</T>
                </b>
                <span>faster time to first published app</span>
              </article>
            </div>

            <Shot
              label="Before / after metrics"
              brief="A simple bar chart of the numbers above — two real figures beat four placeholders."
            />

            <p className="cs-body cs-wide cs-spaced">
              <strong>
                This was never really about making Greta prettier.
              </strong>{' '}
              It made Greta easier to learn, easier to move around in, and — for
              the first time — something people actually wanted to come back to.
            </p>
          </Section>

          <Section
            n="08"
            title="Looking back"
            kicker="What I'd do differently"
          >
            <div className="cs-two">
              <p className="cs-body">
                I'd run the competitive research earlier next time — it would
                have sharpened the questions I brought into user interviews,
                instead of mostly confirming what I already suspected.
              </p>
              <p className="cs-body">
                <b>What's next for Greta:</b>{' '}
                <T>e.g. turning Launchpad into a full creator-profile system</T>
              </p>
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
