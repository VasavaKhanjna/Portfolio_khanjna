/* The support inbox behind section 03 — the raw material the three themes
   were clustered from, rebuilt in markup so the text stays selectable. */

type Tone = 'start' | 'hidden' | 'exit'

const tickets: {
  title: string
  body: string
  time: string
  state: 'Open' | 'Resolved'
  tone?: Tone
}[] = [
  {
    title: 'New user question',
    body: "Where do I start? I'm new here and not sure how t…",
    time: '2h ago',
    state: 'Open',
    tone: 'start',
  },
  {
    title: 'Feature discovery',
    body: "I didn't know I could do that. Is there a way to…",
    time: '5h ago',
    state: 'Open',
    tone: 'hidden',
  },
  {
    title: 'Project stuck',
    body: "I'm done. What now? My app is built but I'm not…",
    time: '8h ago',
    state: 'Open',
    tone: 'exit',
  },
  {
    title: 'Billing question',
    body: 'Can I upgrade later? Also, what happens to my…',
    time: '1d ago',
    state: 'Resolved',
  },
  {
    title: 'Technical issue',
    body: 'The preview is not loading on mobile. Any fixes?',
    time: '1d ago',
    state: 'Resolved',
  },
  {
    title: 'How to use templates',
    body: 'Where can I find more templates? I only see a few…',
    time: '2d ago',
    state: 'Resolved',
  },
  {
    title: 'Publishing question',
    body: 'Do I need to connect a domain to publish my app?',
    time: '2d ago',
    state: 'Resolved',
  },
]

const threads: {
  tone: Tone
  name: string
  time: string
  mark: string
  rest: string
  chip: string
  note: string
  rot: string
}[] = [
  {
    tone: 'start',
    name: 'Priya S.',
    time: '2h ago',
    mark: '“Where do I start?”',
    rest: " I'm new here and not sure how to create my first app. The interface looks great but I'm a bit lost 😅",
    chip: 'Where do I start?',
    note: 'Too many possibilities made the first step intimidating.',
    rot: '-0.8deg',
  },
  {
    tone: 'hidden',
    name: 'Alex T.',
    time: '5h ago',
    mark: "I didn't know I could do that.",
    rest: " I was trying to manually set up the backend, but then I found out there's an AI agent that does it automatically. Wish I knew this earlier!",
    chip: "I didn't know I could do that.",
    note: 'Genuinely useful features existed, but stayed invisible.',
    rot: '0.7deg',
  },
  {
    tone: 'exit',
    name: 'Neha K.',
    time: '1d ago',
    mark: "I'm done. What now?",
    rest: " My app is built and running, but I'm not sure how to publish it, connect a domain, or what the next steps are.",
    chip: "I'm done. What now?",
    note: 'Most people vanished after their first build.',
    rot: '-0.6deg',
  },
]

function Face() {
  return (
    <svg className="wall-face" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8.5" r="3.6" />
      <path d="M4.6 20.5c0-4 3.3-6.2 7.4-6.2s7.4 2.2 7.4 6.2z" />
    </svg>
  )
}

function Arrow() {
  return (
    <svg className="wall-arrow" viewBox="0 0 70 50" aria-hidden="true">
      <path
        d="M66 9C51 2 26 7 14 34"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M10 43l1-11.2 8.8 4.6z" fill="currentColor" />
    </svg>
  )
}

function ResearchWall() {
  return (
    <figure className="wall">
      <div className="wall-main">
        <article className="wall-inbox">
          <header className="wall-inbox-head">
            <div>
              <span className="wall-brand">✦ Greta</span>
              <h4>Support Conversations</h4>
            </div>
            <span className="wall-search">Search tickets…</span>
          </header>

          <div className="wall-filters">
            <span className="wall-chip is-on">All</span>
            <span className="wall-chip">Open</span>
            <span className="wall-chip">Resolved</span>
            <span className="wall-range">Last 30 days</span>
          </div>

          <ul className="wall-tickets">
            {tickets.map((t) => (
              <li className={t.tone ? `tone-${t.tone}` : ''} key={t.title}>
                <span className="wall-avatar">
                  <Face />
                </span>
                <span className="wall-ticket-copy">
                  <b>{t.title}</b>
                  <span>{t.body}</span>
                </span>
                <span className="wall-ticket-meta">
                  <span className="wall-time">{t.time}</span>
                  <span className={`wall-state is-${t.state.toLowerCase()}`}>
                    {t.state}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </article>

        <div className="wall-threads">
          {threads.map((t) => (
            <div className={`wall-theme tone-${t.tone}`} key={t.name}>
              <article
                className="wall-conv"
                style={{ transform: `rotate(${t.rot})` }}
              >
                <header>
                  <span className="wall-avatar is-big">
                    <Face />
                  </span>
                  <span className="wall-who">
                    <b>{t.name}</b>
                    <span>{t.time}</span>
                  </span>
                  <span className="wall-state is-open">Open</span>
                </header>
                <p className="wall-msg">
                  <mark>{t.mark}</mark>
                  {t.rest}
                </p>
              </article>

              <aside className="wall-note">
                <Arrow />
                <span className="wall-label">{t.chip}</span>
                <p>{t.note}</p>
              </aside>
            </div>
          ))}
        </div>
      </div>

      <blockquote className="wall-quote">
        <span className="wall-quote-mark" aria-hidden="true">
          “
        </span>
        <div>
          <p>
            “I was trying to create my first app and got stuck because{' '}
            <b>I didn't know where to start</b>. The platform looks powerful,
            but it wasn't clear how to begin.”
          </p>
          <cite>— Support conversation, Greta user</cite>
        </div>
      </blockquote>
    </figure>
  )
}

export default ResearchWall
