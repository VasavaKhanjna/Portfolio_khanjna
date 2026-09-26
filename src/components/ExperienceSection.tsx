import { useEffect, useRef } from 'react'

type Stop = {
  when: string
  role: string
  place: string
  /** Two short lines; the road leaves no room for a third. */
  note: [string, string]
  /** What the role drew on most, shown as tags under the note. */
  skills: string[]
  /** Where the pin meets the road's centre line, in road units. */
  at: [number, number]
  /** Which side of the road the label sits on. */
  side: 'up' | 'down'
  /** Top-left corner of the label, in road units. */
  label: [number, number]
  /** Pin length when the default would run into the label. */
  pin?: number
}

/* Oldest first, so the road climbs toward today. */
const stops: Stop[] = [
  {
    when: '2020 — 2021',
    role: 'Developer intern',
    place: 'Techinfinity',
    note: ['Built Android app UI in XML and Java,', 'and wrote the architecture docs.'],
    skills: ['Android', 'Java', 'XML'],
    at: [210, 1197],
    side: 'down',
    label: [90, 1285],
  },
  {
    when: '2023',
    role: 'UI/UX intern',
    place: 'Green Aadhaar',
    note: ['Cross-platform UI for an environmental', 'SaaS product, with IIT Madras.'],
    skills: ['Cross-platform UI', 'Visual language'],
    at: [547, 951],
    side: 'up',
    label: [190, 596],
  },
  {
    when: '2023 — 2024',
    role: 'UI/UX intern',
    place: 'Astar Infotech',
    note: ['Marketing, e-books, Product Hunt', 'launches and early dashboard UI.'],
    skills: ['Visual design', 'Marketing', 'Dashboards'],
    at: [915, 636],
    side: 'up',
    label: [690, 330],
  },
  {
    when: '2024 — 2025',
    role: 'UI/UX designer',
    place: 'Questera AI',
    note: ['Shipped PLGOS, Flows and questera.ai;', 'led usability testing and design QA.'],
    skills: ['PLG', 'Onboarding', 'Usability testing', 'Design QA'],
    at: [1167, 1097],
    side: 'down',
    label: [997, 1220],
  },
  {
    when: '2025 — now',
    role: 'Product designer',
    place: 'Greta · Questera AI',
    note: ['Took Greta from zero to launch: ~5,000', 'paid customers and ~$250K revenue.'],
    skills: ['Design systems', '0→1', 'AI product'],
    at: [1459, 304],
    side: 'up',
    label: [1330, 6],
    pin: 40,
  },
]

// Where the road's flat ends reach; far past the drawing so they run to the
// panel's edges however wide it is.
const ROAD_START = -4000
const ROAD_END = 6000

// The road's centre line: flat, a step up, a hump, a dip, a tall hump, then out.
const ROAD = [
  `M ${ROAD_START} 1197 H 370`,
  'A 145 145 0 0 0 515 1052 V 1040',
  'A 140 140 0 0 1 655 900 H 680',
  'A 122 122 0 0 0 802 778 V 747',
  'A 111.5 111.5 0 0 1 1025 747 V 955',
  'A 142 142 0 0 0 1309 955 V 455',
  'A 150 150 0 0 1 1609 455 V 520',
  `A 115 115 0 0 0 1724 635 H ${ROAD_END}`,
].join(' ')

const PIN = 70

// Skill tags are sized from their text: monospace, so every character is as wide as the next.
const CHIP_CHAR = 14.1
const CHIP_PAD = 32
const CHIP_GAP = 10

function chipRow(skills: string[], x: number) {
  let cursor = x
  return skills.map((name) => {
    const width = name.length * CHIP_CHAR + CHIP_PAD
    const chip = { name, x: cursor, width }
    cursor += width + CHIP_GAP
    return chip
  })
}

/* Where along the road a point sits, found by sampling. */
function lengthAt(path: SVGPathElement, [x, y]: [number, number]) {
  const total = path.getTotalLength()
  let best = 0
  let bestD = Infinity
  for (let l = 0; l <= total; l += 4) {
    const pt = path.getPointAtLength(l)
    const d = (pt.x - x) ** 2 + (pt.y - y) ** 2
    if (d < bestD) [best, bestD] = [l, d]
  }
  return best
}

/* The road holds still on screen while scrolling drives a marker along it; once
   the marker reaches today the page scrolls on. Everything it passes lights up. */
function useRoadDrive() {
  const drive = useRef<HTMLDivElement>(null)
  const road = useRef<SVGPathElement>(null)
  const trail = useRef<SVGPathElement>(null)
  const marker = useRef<SVGGElement>(null)
  const pins = useRef<(SVGGElement | null)[]>([])

  useEffect(() => {
    const path = road.current
    const track = drive.current
    if (!path || !track || !trail.current || !marker.current) return

    const total = path.getTotalLength()
    const stopsAt = stops.map((s) => lengthAt(path, s.at))
    // The drive runs from just inside the panel's left edge to just inside its
    // right edge, wherever those fall in the drawing. Both end stretches are
    // straight, so a position on them converts to a length by simple arithmetic.
    let from = 0
    let to = total
    const fit = () => {
      const svg = path.ownerSVGElement
      const ctm = svg?.getScreenCTM()
      const panel = svg?.parentElement?.getBoundingClientRect()
      if (!ctm || !panel) return
      const leftX = (panel.left - ctm.e) / ctm.a + 60
      const rightX = (panel.right - ctm.e) / ctm.a - 60
      from = leftX - ROAD_START
      to = total - (ROAD_END - rightX)
    }

    let frame = 0
    const draw = () => {
      frame = 0
      // How far through the pinned stretch the page has scrolled.
      const box = track.getBoundingClientRect()
      const room = box.height - window.innerHeight
      const p = room > 0 ? Math.min(1, Math.max(0, -box.top / room)) : 1
      const at = from + (to - from) * p
      const pt = path.getPointAtLength(at)
      marker.current?.setAttribute('transform', `translate(${pt.x} ${pt.y})`)
      // Paint only the stretch driven so far: skip to the start, draw to the marker.
      trail.current!.style.strokeDasharray = `0 ${from} ${at - from} ${total}`
      stopsAt.forEach((l, i) => pins.current[i]?.classList.toggle('is-passed', at >= l))
    }
    const queue = () => {
      if (!frame) frame = requestAnimationFrame(draw)
    }
    const onResize = () => {
      fit()
      queue()
    }

    fit()
    draw()
    window.addEventListener('scroll', queue, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', queue)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return { drive, road, trail, marker, pins }
}

function ExperienceSection() {
  const { drive, road, trail, marker, pins } = useRoadDrive()

  return (
    <section id="experience">
      {/* A tall track; the stage inside stays pinned while the page scrolls through it. */}
      <div className="xp-drive" ref={drive}>
        <div className="xp-stage">
          <div className="page-head">
            <h2>Experience</h2>
            <span className="page-count">/{stops.length}</span>
          </div>

          <div className="xp-road">
            <svg viewBox="0 0 1900 1520" aria-hidden="true">
              <path d={ROAD} className="xp-road-bed" ref={road} />
              <path d={ROAD} className="xp-road-line" />
              <path d={ROAD} className="xp-road-trail" ref={trail} />

              {stops.map(({ at: [x, y], side, label: [lx, ly], pin = PIN, when, role, place, note, skills }, i) => {
                const end = side === 'up' ? y - pin : y + pin
                return (
                  <g key={when} className="xp-stop" ref={(el) => { pins.current[i] = el }}>
                    <line x1={x} y1={y} x2={x} y2={end} className="xp-pin" />
                    <circle cx={x} cy={y} r="7" className="xp-pin-dot" />
                    <circle cx={x} cy={end} r="7" className="xp-pin-dot" />

                    <text x={lx} y={ly + 30} className="xp-when">
                      {when.toUpperCase()} · {role.toUpperCase()}
                    </text>
                    <text x={lx} y={ly + 84} className="xp-place">
                      {place}
                    </text>
                    <text x={lx} y={ly + 132} className="xp-note">
                      {note[0]}
                    </text>
                    <text x={lx} y={ly + 168} className="xp-note">
                      {note[1]}
                    </text>

                    {chipRow(skills, lx).map((chip) => (
                      <g key={chip.name} className="xp-chip">
                        <rect x={chip.x} y={ly + 190} width={chip.width} height={40} rx={20} />
                        <text x={chip.x + chip.width / 2} y={ly + 217} textAnchor="middle">
                          {chip.name}
                        </text>
                      </g>
                    ))}
                  </g>
                )
              })}

              <g ref={marker} className="xp-marker">
                <circle r="34" className="xp-marker-glow" />
                <circle r="17" className="xp-marker-dot" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* The same stops as a list: read aloud everywhere, shown on narrow screens. */}
      <ol className="xp-list">
        {[...stops].reverse().map(({ when, role, place, note, skills }) => (
          <li key={when}>
            <span className="xp-list-when">
              {when} · {role}
            </span>
            <h3>{place}</h3>
            <p>{note.join(' ')}</p>
            <ul className="xp-list-skills" aria-label="Skills">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ExperienceSection
