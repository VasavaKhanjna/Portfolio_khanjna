import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Section } from '../components/CaseStudy'
import journey1 from '../assets/mediq/journey-1.svg'
import journey2 from '../assets/mediq/journey-2.svg'
import journey3 from '../assets/mediq/journey-3.svg'
import journey4 from '../assets/mediq/journey-4.svg'
import journey5 from '../assets/mediq/journey-5.svg'
import journey6 from '../assets/mediq/journey-6.svg'
import journey7 from '../assets/mediq/journey-7.svg'

const tags = ['iOS app', '2 days', 'Figma', 'Research → UI']

const sections = [
  ['01', 'The problem'],
  ['02', 'Goals'],
  ['03', 'Research'],
  ['04', 'Key insights'],
  ['05', 'User journey'],
  ['06', 'Scope'],
  ['07', 'Benchmarking'],
  ['08', 'Process'],
  ['09', 'Core flow'],
  ['10', 'Color & safety'],
]

/* Line icons, drawn on a 24px grid in the current text color. */
const icons: Record<string, ReactNode> = {
  chat: (
    <>
      <path d="M4 5h16v11H9l-5 4z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 17a8 8 0 1 1 16 0" />
      <path d="M12 17l4-5" />
    </>
  ),
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  flag: <path d="M5 21V4h11l-2 4 2 4H5" />,
  hash: <path d="M9 4 7 20M17 4l-2 16M4 9h16M3 15h16" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.5-4.5" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
    </>
  ),
  step: <path d="M4 18h5v-5h5V8h6" />,
  check: <path d="m5 12 5 5 9-10" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
}

function Icon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}

const goals = [
  ['chat', 'Plain language', 'No medical jargon.'],
  ['gauge', 'Show severity', 'How far off, not just high or low.'],
  ['heart', 'Lower anxiety', 'Calm tone and colors.'],
  ['arrow', 'Clear next step', 'Wait, act, or see a doctor.'],
]

const insights = [
  ['flag', 'Look for red first', 'Explain why a value is flagged.'],
  ['hash', 'See status, not meaning', 'Add a short explanation to every result.'],
  ['search', 'Leave to Google', 'Answer questions inside the report.'],
  ['link', 'Doubt AI summaries', 'Link every insight to the original value.'],
  ['step', 'Want a next step', 'Offer safe actions, like asking a doctor.'],
]

const leftOut = [
  'Diagnosis',
  'X-ray / MRI',
  'Genetic reports',
  'Medicines',
  'Treatment plans',
  'Home remedies',
  'Emergency triage',
]

const rules: [boolean, string][] = [
  [true, 'Uses the lab’s own reference range'],
  [true, 'Keeps the original value visible'],
  [false, 'No diagnosis'],
  [false, 'No treatment from one value'],
]

/* Seven journey steps; worry climbs from green to red as the dots fall. */
const journey = [
  [110, 56, '#22A45D', 'Gets report', 'first touch'],
  [215, 82, '#6CAE4A', 'Opens PDF', 'pages of numbers'],
  [320, 104, '#C9B13A', 'Scans for red', 'only highlights'],
  [425, 132, '#F29B2E', 'Hits jargon', 'what is this test?'],
  [530, 150, '#EF7B3A', 'Googles terms', 'many sources'],
  [635, 176, '#E95F43', 'Conflicting info', 'more fear'],
  [740, 188, '#E5484D', 'Stuck', 'wait? diet? pills?'],
] as const

/* Storyboard frames from the Figma file, one per journey step. */
const boards = [
  [journey1, 'Report arrives', 'Before any doctor explains it.', 'A “your report is ready” notification on the lock screen'],
  [journey2, 'Opens the PDF', 'Pages of numbers and terms.', 'Yashika looking worried at a long list of tests'],
  [journey3, 'Scans for red', 'Looks only at flagged values.', 'Yashika frowning at an hs-CRP value flagged out of range'],
  [journey4, 'Hits jargon', 'Doesn’t know what tests mean.', 'Yashika surrounded by test names: hsCRP, HbA1c, ESR, lipid profile'],
  [journey5, 'Googles every term', 'Tab after tab, video after video.', 'Yashika searching “25-Hydroxy” on Google'],
  [journey6, 'Conflicting answers', 'Anxiety goes up, not down.', 'YouTube, an article and Reddit each saying something different'],
  [journey7, 'Stuck on what to do', 'Wait, change diet, or see a doctor?', 'Yashika torn between waiting for a doctor and self-managing'],
]

const pains = [
  ['Too much info', 'Dense reports, hard to scan'],
  ['Hard to understand', 'Terms and abbreviations'],
  ['Unclear severity', '“High” doesn’t say how serious'],
  ['Conflicting answers', 'Sites and AI tools disagree'],
  ['Anxiety', 'Abnormal values cause fear'],
  ['No next step', 'Wait, self-manage, or see a doctor?'],
  ['Risk of wrong decision', 'Delayed care or self-diagnosis'],
]

const screens = [
  ['Home', 'empty state'],
  ['Who’s it for', 'self or family'],
  ['Upload PDF', 'or photo'],
  ['Scanning', 'reads values'],
  ['Body overview', 'grouped by status'],
  ['Test detail', 'range + meaning'],
]

const scale = ['Low', 'OK', 'Border', 'High', 'V. high']

/** A recreation of the result screen, built in markup until the real shot lands. */
function ResultPhone() {
  return (
    <div className="mq-phone" aria-label="The MediQ result screen">
      <div className="mq-who">Rajesh</div>
      <div>
        <div className="mq-test">Cholesterol-LDL</div>
        <div className="mq-rec">Recommended: below 100 mg/dL</div>
      </div>
      <div className="mq-result">
        <b>Above recommended range</b>
        <span className="mq-val">Your result: 174.24 mg/dL</span>
        <div className="mq-scale">
          <i className="mq-pin" />
          {scale.map((step) => (
            <span key={step} />
          ))}
          {scale.map((step) => (
            <small key={step}>{step}</small>
          ))}
        </div>
      </div>
      <div className="mq-seg">
        <span className="on">Summary</span>
        <span>Detail</span>
      </div>
      <div className="mq-note n1">
        <strong>Understanding your result</strong>
        <p>LDL is above range. Over time it can raise heart risk.</p>
      </div>
      <div className="mq-note n2">
        <strong>Steps you can take</strong>
        <p>Less saturated fat · move more · eat more greens</p>
      </div>
      <div className="mq-note n3">
        <strong>Next step</strong>
        <p>Talk to your doctor about these results.</p>
      </div>
    </div>
  )
}

/* How long each storyboard frame holds before the board moves on. */
const BOARD_HOLD = 3500

/* The storyboard steps itself forward on a timer, looping at the end. It holds
   while it is hovered, focused or touched, while it is off screen, and for
   anyone who prefers reduced motion; scrolling it by hand restarts the clock. */
function JourneyBoard() {
  const board = useRef<HTMLOListElement>(null)
  const [current, setCurrent] = useState(0)
  const [held, setHeld] = useState(false)
  const [onScreen, setOnScreen] = useState(false)
  const [still] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const count = boards.length + 1
  const running = onScreen && !held && !still

  const frames = () => Array.from(board.current?.children ?? []) as HTMLElement[]

  const goTo = (i: number) => {
    const el = board.current
    const [first, target] = [frames()[0], frames()[i]]
    if (!el || !first || !target) return
    el.scrollTo({ left: target.offsetLeft - first.offsetLeft, behavior: still ? 'auto' : 'smooth' })
  }

  // Follow the frame at the left edge, however the board got there.
  useEffect(() => {
    const el = board.current
    if (!el) return
    const onScroll = () => {
      const first = frames()[0]
      if (!first) return
      const x = el.scrollLeft + first.offsetLeft
      let nearest = 0
      frames().forEach((f, i) => {
        if (Math.abs(f.offsetLeft - x) < Math.abs(frames()[nearest].offsetLeft - x)) nearest = i
      })
      setCurrent(nearest)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const el = board.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!running) return
    const t = window.setTimeout(() => {
      const el = board.current
      if (!el) return
      // Once the last frames are all in view there is nowhere left to go.
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2
      goTo(atEnd ? 0 : current + 1)
    }, BOARD_HOLD)
    return () => window.clearTimeout(t)
  }, [running, current])

  return (
    <div
      className="mq-board-wrap"
      onPointerEnter={() => setHeld(true)}
      onPointerLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
      onTouchStart={() => setHeld(true)}
      onTouchEnd={() => setHeld(false)}
    >
      <ol className="mq-board" ref={board} tabIndex={0} aria-label="Yashika’s journey, scroll sideways">
        {boards.map(([src, step, detail, alt]) => (
          <li key={step}>
            <img src={src} alt={alt} loading="lazy" />
            <h3>{step}</h3>
            <p>{detail}</p>
          </li>
        ))}
        <li className="is-end">
          <h3>She needs clarity, not a diagnosis.</h3>
          <p>Context and confidence to pick the right next step.</p>
        </li>
      </ol>

      <div className="mq-board-dots">
        {Array.from({ length: count }, (_, i) => (
          <button
            type="button"
            // A fresh key on pause/resume restarts the fill with the timer.
            key={`${i}-${running}`}
            className={i === current ? 'is-on' : undefined}
            style={{ animationDuration: `${BOARD_HOLD}ms` }}
            data-running={running || undefined}
            aria-label={`Go to step ${i + 1}`}
            aria-current={i === current ? 'step' : undefined}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}

function Mediq() {
  return (
    <>
      <Nav />

      <main id="case-page" className="cs-mediq">
        <div className="cs-inner">
          <header className="cs-hero mq-hero">
            <div>
              <Link className="cs-back" to="/#work">
                ← Work
              </Link>
              <span className="cs-eyebrow">UX case study · 2026</span>
              <h1>
                MediQ
                <em>Blood test reports, explained</em>
              </h1>
              <p className="cs-lede">
                Upload a lab report. Get plain-language meaning, a color-coded
                range and a safe next step.
              </p>
              <ul className="cs-owned mq-tags">
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

            <ResultPhone />
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
            label="The problem"
            title="Reports arrive before the doctor does"
            kicker="A value marked “High” says nothing about how worried to be."
          >
            <div className="mq-band">
              <svg viewBox="0 0 150 170" aria-hidden="true">
                <rect x="18" y="10" width="100" height="130" rx="10" fill="currentColor" opacity=".14" />
                <rect x="10" y="20" width="100" height="130" rx="10" fill="none" stroke="currentColor" strokeWidth="3" />
                <path
                  d="M28 48h52M28 64h64M28 80h40M28 96h58M28 112h36"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity=".55"
                />
                <circle cx="112" cy="126" r="30" fill="var(--sun)" />
                <text x="112" y="138" textAnchor="middle" fontSize="34" fontWeight="700" fill="var(--accent)">
                  ?
                </text>
              </svg>
              <p>
                People get lab reports before seeing a doctor. They see “High”
                but don’t know if they should worry.
              </p>
            </div>
          </Section>

          <Section n="02" label="Goals" title="What the app must do">
            <div className="mq-tiles mq-g4">
              {goals.map(([icon, title, detail]) => (
                <article className="mq-tile" key={title}>
                  <span className="mq-ic">
                    <Icon name={icon} />
                  </span>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section
            n="03"
            label="Research"
            title="Two real conversations"
            kicker="Informal chats, used as early assumptions."
          >
            <div className="mq-tiles mq-g2">
              <article className="mq-tile">
                <svg className="mq-spot" viewBox="0 0 260 72" aria-hidden="true">
                  <rect x="0" y="6" width="58" height="58" rx="29" className="mq-f-soft" />
                  <circle cx="29" cy="28" r="10" className="mq-f-accent" />
                  <path d="M13 56a16 14 0 0 1 32 0z" className="mq-f-accent" />
                  <rect x="76" y="14" width="160" height="42" rx="8" className="mq-f-paper mq-s-line" />
                  <rect x="88" y="26" width="46" height="18" rx="4" className="mq-f-soft" />
                  <rect x="142" y="26" width="46" height="18" rx="4" className="mq-f-soft" />
                  <rect x="196" y="26" width="28" height="18" rx="4" fill="var(--high)" opacity=".8" />
                  <text x="76" y="70" className="mq-tm">
                    Hospital portal dashboard
                  </text>
                </svg>
                <h3>User 1 · Patient portal</h3>
                <p>
                  Easy to open. Hard to understand. Looks only at highlighted
                  numbers.
                </p>
              </article>
              <article className="mq-tile">
                <svg className="mq-spot" viewBox="0 0 260 72" aria-hidden="true">
                  <rect x="0" y="6" width="58" height="58" rx="29" fill="var(--sun-soft)" />
                  <circle cx="29" cy="28" r="10" fill="#B7860B" />
                  <path d="M13 56a16 14 0 0 1 32 0z" fill="#B7860B" />
                  <rect x="76" y="10" width="36" height="46" rx="4" className="mq-f-paper mq-s-line" />
                  <text x="94" y="38" textAnchor="middle" className="mq-tpdf">
                    PDF
                  </text>
                  <path d="M122 33h40" className="mq-s-accent" strokeWidth="2" strokeDasharray="4 4" />
                  <rect x="172" y="12" width="64" height="40" rx="8" className="mq-f-soft" />
                  <text x="204" y="37" textAnchor="middle" className="mq-t">
                    24 hrs
                  </text>
                  <text x="76" y="70" className="mq-tm">
                    Lab report via email / WhatsApp
                  </text>
                </svg>
                <h3>User 2 · Diagnostic lab</h3>
                <p>
                  Gets a PDF in a day. Wants to know: normal or not, and what to
                  do.
                </p>
              </article>
            </div>
          </Section>

          <Section
            n="04"
            label="Key insights"
            title="Five things users do"
            kicker="And what each one asks of the design."
          >
            <div className="mq-tiles mq-g3">
              {insights.map(([icon, title, detail]) => (
                <article className="mq-tile" key={title}>
                  <span className="mq-ic is-warn">
                    <Icon name={icon} />
                  </span>
                  <h3>{title}</h3>
                  <p>→ {detail}</p>
                </article>
              ))}
              <article className="mq-tile is-summary">
                <h3>In one line</h3>
                <p>Users don’t need a diagnosis. They need clarity and confidence.</p>
              </article>
            </div>
          </Section>

          <Section
            n="05"
            label="User journey"
            title="Meet Yashika"
            kicker="Her journey without MediQ, one step at a time."
          >
            <div className="mq-persona">
              <img src={journey1} alt="" aria-hidden="true" />
              <div>
                <h3>The uncertain report reader</h3>
                <p>
                  Gets her blood test before her appointment. Sees “High” and
                  “Low”, but not how worried to be.
                </p>
                <ul className="cs-owned mq-facts-chips">
                  <li>Age 22</li>
                  <li>Reads highlights first</li>
                  <li>Asks family</li>
                </ul>
              </div>
            </div>

            <JourneyBoard />

            <h3 className="cs-sub-head">How her mood changes</h3>
            <div className="mq-fig">
              <svg
                viewBox="0 0 800 250"
                className="mq-wide"
                role="img"
                aria-label="Emotion curve across seven steps, dropping from calm to stuck"
              >
                <defs>
                  <linearGradient id="mq-emo" x1="0" x2="1">
                    <stop offset="0" stopColor="#22A45D" />
                    <stop offset=".45" stopColor="#F29B2E" />
                    <stop offset="1" stopColor="#E5484D" />
                  </linearGradient>
                </defs>
                <text x="16" y="44" className="mq-tmono">
                  CALM
                </text>
                <text x="16" y="194" className="mq-tmono">
                  ANXIOUS
                </text>
                <path d="M90 40H780M90 115H780M90 190H780" className="mq-s-line" strokeDasharray="3 5" />
                <path
                  d="M110 56 C160 60,180 78,215 82 S290 96,320 104 S395 126,425 132 S500 146,530 150 S600 172,635 176 S710 184,740 188"
                  fill="none"
                  stroke="url(#mq-emo)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {journey.map(([x, y, color, step, note]) => (
                  <g key={step}>
                    <circle cx={x} cy={y} r="8" className="mq-f-surface" stroke={color} strokeWidth="3" />
                    <text x={x} y="226" textAnchor="middle" className="mq-t">
                      {step}
                    </text>
                    <text x={x} y="242" textAnchor="middle" className="mq-tm">
                      {note}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <blockquote className="cs-quote">
              “I can see something is out of range, but I don’t know how worried
              to be.”
            </blockquote>

            <h3 className="cs-sub-head">Pain points in the journey</h3>
            <ul className="mq-pains">
              {pains.map(([pain, detail]) => (
                <li key={pain}>
                  <b>{pain}</b> <span>{detail}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section
            n="06"
            label="Scope"
            title="Start with lab reports only"
            kicker="Each report type needs its own logic. Lab panels fit 2 days."
          >
            <div className="mq-scope">
              <div className="mq-fig">
                <svg
                  viewBox="0 0 440 440"
                  role="img"
                  aria-label="Six lab panels in scope, circled by what is left out on purpose"
                >
                  <circle cx="220" cy="220" r="206" className="mq-f-soft mq-ring-out" />
                  <circle cx="220" cy="220" r="112" className="mq-f-accent" />
                  <text x="220" y="48" textAnchor="middle" className="mq-tmono">
                    OUT OF SCOPE
                  </text>
                  {leftOut.map((item, i) => {
                    // Seven items share the ring with the heading: eight slots, the top one taken.
                    const a = ((i + 1) * 45 - 90) * (Math.PI / 180)
                    return (
                      <text
                        key={item}
                        x={220 + Math.cos(a) * 160}
                        y={224 + Math.sin(a) * 160}
                        textAnchor="middle"
                        className="mq-tout"
                      >
                        {item}
                      </text>
                    )
                  })}
                  <text x="220" y="166" textAnchor="middle" className="mq-tmono is-on-accent">
                    IN SCOPE
                  </text>
                  <text x="220" y="196" textAnchor="middle" className="mq-t is-on-accent">
                    Numerical lab reports
                  </text>
                  <text x="220" y="230" textAnchor="middle" className="mq-tpanel">
                    CBC · SUGAR
                  </text>
                  <text x="220" y="250" textAnchor="middle" className="mq-tpanel">
                    THYROID · LIPID
                  </text>
                  <text x="220" y="270" textAnchor="middle" className="mq-tpanel">
                    LIVER · KIDNEY
                  </text>
                </svg>
              </div>
            </div>
          </Section>

          <Section
            n="07"
            label="Benchmarking"
            title="Tried uploading a report in 2 apps"
            kicker="Both ended in a dead end."
          >
            <div className="mq-tiles mq-g2">
              {[
                ['Apple Health', 'No upload', 'Reports buried at the bottom. Lab section found, but no way to attach one.'],
                ['Tata 1mg', 'Confusing', 'Upload hides under “Insights”. Asks again for details given at sign-up.'],
              ].map(([app, end, detail]) => (
                <article className="mq-tile" key={app}>
                  <svg className="mq-dead" viewBox="0 0 280 44" aria-hidden="true">
                    <circle cx="16" cy="22" r="10" className="mq-f-accent" />
                    <path d="M30 22H100" className="mq-s-accent" strokeWidth="2" />
                    <circle cx="110" cy="22" r="10" className="mq-f-accent" opacity=".6" />
                    <path d="M124 22H194" className="mq-s-accent" strokeWidth="2" strokeDasharray="4 4" />
                    <rect x="198" y="8" width="76" height="28" rx="14" fill="var(--high)" opacity=".15" />
                    <text x="236" y="26" textAnchor="middle" className="mq-tdead">
                      {end}
                    </text>
                  </svg>
                  <h3>{app}</h3>
                  <p>{detail}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section
            n="08"
            label="Process"
            title="Sketch to system"
            kicker="Paper first, then wireframes, hi-fi screens and a small system."
          >
            <div className="mq-fig">
              <svg viewBox="0 0 800 150" className="mq-wide" role="img" aria-label="Four stages: sketch, lo-fi, hi-fi, design system">
                <g transform="translate(40 14)">
                  <rect width="100" height="80" rx="8" className="mq-f-paper mq-s-line" strokeWidth="1.5" />
                  <path
                    d="M14 20q20-8 40 0t34 0M14 40q18 6 36 0t38 2M14 60q22-6 44 0"
                    fill="none"
                    className="mq-s-accent"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
                <g transform="translate(250 6)">
                  <rect width="56" height="96" rx="10" className="mq-f-surface mq-s-line" strokeWidth="1.5" />
                  <rect x="8" y="14" width="40" height="26" rx="3" className="mq-f-paper" />
                  <rect x="8" y="46" width="30" height="5" rx="2" className="mq-f-soft" />
                  <rect x="8" y="56" width="40" height="5" rx="2" className="mq-f-soft" />
                  <rect x="8" y="80" width="40" height="9" rx="3" fill="var(--ink-soft)" opacity=".5" />
                </g>
                <g transform="translate(456 6)">
                  <rect width="56" height="96" rx="10" className="mq-f-surface mq-s-line" strokeWidth="1.5" />
                  <rect x="8" y="14" width="40" height="22" rx="4" fill="#FDECEC" />
                  <rect x="11" y="28" width="7" height="4" fill="#22A45D" />
                  <rect x="19" y="28" width="7" height="4" fill="#F2C94C" />
                  <rect x="27" y="28" width="7" height="4" fill="#F29B2E" />
                  <rect x="35" y="28" width="7" height="4" fill="#E5484D" />
                  <rect x="8" y="42" width="40" height="14" rx="3" fill="#FBF4E3" />
                  <rect x="8" y="60" width="40" height="12" rx="3" fill="#EAF8FB" />
                  <rect x="8" y="80" width="40" height="9" rx="3" fill="#0F5C54" />
                </g>
                <g transform="translate(660 16)">
                  <rect width="28" height="28" rx="6" fill="#0F5C54" />
                  <rect x="34" width="28" height="28" rx="6" fill="#EFB920" />
                  <rect x="68" width="28" height="28" rx="6" fill="#E5484D" />
                  <rect y="40" width="96" height="14" rx="7" className="mq-f-soft" />
                  <rect y="62" width="60" height="14" rx="7" className="mq-f-accent" />
                </g>
                <path d="M156 54H236M322 54H442M528 54H646" className="mq-s-line" strokeWidth="2" strokeDasharray="4 5" />
                {[
                  [90, 'Paper sketches', 'explore flows fast'],
                  [278, 'Lo-fi wireframes', '16 screens'],
                  [484, 'Hi-fi UI', 'upload + result'],
                  [708, 'Design system', 'range & upload states'],
                ].map(([x, stage, note]) => (
                  <g key={stage} textAnchor="middle">
                    <text x={x} y="124" className="mq-t">
                      {stage}
                    </text>
                    <text x={x} y="140" className="mq-tm">
                      {note}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

          </Section>

          <Section
            n="09"
            label="Core flow"
            title="Upload to answer in 6 screens"
            kicker="From an empty home screen to a result she can act on."
          >
            <div className="mq-fig">
              <svg
                viewBox="0 0 800 190"
                className="mq-wide"
                role="img"
                aria-label="Six screens: Home, Report for, Upload, Scanning, Body overview, Test detail"
              >
                <defs>
                  <g id="mq-ph">
                    <rect width="80" height="136" rx="12" className="mq-f-surface mq-s-line" strokeWidth="1.5" />
                    <rect x="28" y="6" width="24" height="5" rx="2.5" className="mq-f-paper" />
                  </g>
                </defs>
                <g transform="translate(20 10)">
                  <use href="#mq-ph" />
                  <rect x="14" y="36" width="52" height="34" rx="4" className="mq-f-paper" />
                  <rect x="20" y="78" width="40" height="5" rx="2" className="mq-f-soft" />
                  <rect x="10" y="114" width="60" height="12" rx="4" className="mq-f-accent" />
                </g>
                <g transform="translate(150 10)">
                  <use href="#mq-ph" />
                  <rect x="10" y="24" width="60" height="12" rx="6" className="mq-f-soft" />
                  <rect x="10" y="24" width="30" height="12" rx="6" className="mq-f-accent" />
                  <rect x="10" y="46" width="60" height="10" rx="3" className="mq-f-paper" />
                  <rect x="10" y="62" width="60" height="10" rx="3" className="mq-f-paper" />
                  <rect x="10" y="78" width="60" height="10" rx="3" className="mq-f-paper" />
                  <rect x="10" y="114" width="60" height="12" rx="4" className="mq-f-accent" />
                </g>
                <g transform="translate(280 10)">
                  <use href="#mq-ph" />
                  <rect x="10" y="24" width="60" height="44" rx="6" className="mq-f-soft" stroke="var(--accent)" strokeDasharray="3 3" />
                  <path d="M40 52V38m-6 6 6-6 6 6" fill="none" className="mq-s-accent" strokeWidth="2" strokeLinecap="round" />
                  <rect x="10" y="76" width="60" height="12" rx="3" className="mq-f-paper" />
                  <rect x="10" y="92" width="60" height="12" rx="3" className="mq-f-paper" />
                  <rect x="10" y="114" width="60" height="12" rx="4" className="mq-f-accent" />
                </g>
                <g transform="translate(410 10)">
                  <use href="#mq-ph" />
                  <circle cx="40" cy="62" r="22" fill="none" className="mq-s-line" strokeWidth="4" />
                  <path d="M40 40a22 22 0 0 1 22 22" fill="none" className="mq-s-accent" strokeWidth="4" strokeLinecap="round" />
                  <rect x="10" y="114" width="60" height="12" rx="4" className="mq-f-accent" />
                </g>
                <g transform="translate(540 10)">
                  <use href="#mq-ph" />
                  <circle cx="26" cy="36" r="6" fill="var(--ink-soft)" opacity=".5" />
                  <path d="M20 46h12v40h-3v26h-6V86h-3z" fill="var(--ink-soft)" opacity=".5" />
                  <rect x="44" y="30" width="28" height="10" rx="3" fill="#E5484D" opacity=".8" />
                  <rect x="44" y="46" width="28" height="10" rx="3" fill="#F29B2E" opacity=".8" />
                  <rect x="44" y="62" width="28" height="10" rx="3" fill="#22A45D" opacity=".8" />
                </g>
                <g transform="translate(670 10)">
                  <use href="#mq-ph" />
                  <rect x="8" y="22" width="64" height="26" rx="4" fill="#FDECEC" />
                  <rect x="12" y="38" width="11" height="5" fill="#22A45D" />
                  <rect x="24" y="38" width="11" height="5" fill="#F2C94C" />
                  <rect x="36" y="38" width="11" height="5" fill="#F29B2E" />
                  <rect x="48" y="38" width="11" height="5" fill="#E5484D" />
                  <rect x="60" y="38" width="9" height="5" fill="#A3202A" />
                  <rect x="8" y="56" width="64" height="18" rx="3" fill="#FBF4E3" />
                  <rect x="8" y="78" width="64" height="16" rx="3" fill="#EAF8FB" />
                  <rect x="8" y="98" width="64" height="16" rx="3" fill="#EDF3FC" />
                </g>
                <path
                  d="M104 78h40m-6-5 6 5-6 5M234 78h40m-6-5 6 5-6 5M364 78h40m-6-5 6 5-6 5M494 78h40m-6-5 6 5-6 5M624 78h40m-6-5 6 5-6 5"
                  fill="none"
                  className="mq-s-accent"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {screens.map(([screen, note], i) => (
                  <g key={screen} textAnchor="middle">
                    <text x={60 + i * 130} y="170" className="mq-t">
                      {screen}
                    </text>
                    <text x={60 + i * 130} y="185" className="mq-tm">
                      {note}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </Section>

          <Section
            n="10"
            label="Color & safety"
            title="Calm, not clinical"
            kicker="A palette for anxious readers, and the lines the app won’t cross."
          >
            <div className="cs-two">
              <div>
                <span className="cs-label">Color</span>
                <p className="cs-body">
                  Blue feels like banks and hospitals. Teal and yellow feel
                  calmer. Red is only for status.
                </p>
                <div className="mq-swatches">
                  <div>
                    <i style={{ background: '#0F5C54' }} />
                    Primary
                  </div>
                  <div>
                    <i style={{ background: '#EFB920' }} />
                    Secondary
                  </div>
                  <div>
                    <i className="mq-status" />
                    Status
                  </div>
                </div>
              </div>
              <div>
                <span className="cs-label">Safety rules</span>
                <h3 className="mq-mini-head">Explain, never diagnose</h3>
                <ul className="mq-rules">
                  {rules.map(([ok, rule]) => (
                    <li key={rule} className={ok ? undefined : 'is-no'}>
                      <Icon name={ok ? 'check' : 'x'} />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <div className="mq-band mq-outcome">
            <div>
              <span>Outcome</span>
              <p>
                Every flagged value now has a range, a meaning and a next step,
                all in one screen.
              </p>
            </div>
            <small>
              Next: formal interviews, comprehension tests on the range bar,
              report comparison, more languages.
            </small>
          </div>

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

export default Mediq
