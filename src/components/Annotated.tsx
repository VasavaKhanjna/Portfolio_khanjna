import type { CSSProperties } from 'react'

/* A pin is placed in percentages of the shot, so the callout stays glued to
   its target at every width. The leader line stretches from the dot to just
   outside the shot, and `gap` is how far past that edge the label sits —
   vary it to stop neighbouring labels colliding. */
export type Pin = {
  x: number
  y: number
  dir: 'up' | 'down'
  gap: number
  align?: 'start' | 'center' | 'end'
  text: string
}

export type Panel = {
  kind: 'before' | 'after'
  badge: string
  caption: string
  src: string
  alt: string
  pins: Pin[]
}

type PinStyle = CSSProperties & { '--x': string; '--y': string; '--gap': string }

function Shot({ panel }: { panel: Panel }) {
  return (
    <div className={`anno-panel is-${panel.kind}`}>
      <div className="anno-panel-head">
        <span className="anno-badge">{panel.badge}</span>
        <span className="anno-caption">{panel.caption}</span>
      </div>

      <div className="anno-shot">
        <img src={panel.src} alt={panel.alt} />

        {panel.pins.map((pin, i) => (
          <span
            className={`anno-pin dir-${pin.dir} align-${pin.align ?? 'center'}`}
            key={pin.text}
            style={
              {
                '--x': `${pin.x}%`,
                '--y': `${pin.y}%`,
                '--gap': `${pin.gap}px`,
              } as PinStyle
            }
          >
            <i className="anno-dot">{i + 1}</i>
            <i className="anno-line" aria-hidden="true" />
            <b className="anno-label">{pin.text}</b>
          </span>
        ))}
      </div>

      {/* Narrow screens drop the leader lines and read the pins as a list. */}
      <ol className="anno-legend">
        {panel.pins.map((pin) => (
          <li key={pin.text}>{pin.text}</li>
        ))}
      </ol>
    </div>
  )
}

function Annotated({
  eyebrow,
  title,
  sub,
  panels,
  note,
  tag,
}: {
  eyebrow: string
  title: string
  sub: string
  panels: [Panel, Panel]
  note: string
  tag?: string
}) {
  return (
    <figure className="anno">
      <header className="anno-head">
        <span className="anno-eyebrow">{eyebrow}</span>
        <h3>{title}</h3>
        <p>{sub}</p>
      </header>

      <div className="anno-panels">
        <Shot panel={panels[0]} />
        <span className="anno-arrow" aria-hidden="true">
          →
        </span>
        <Shot panel={panels[1]} />
      </div>

      <figcaption className="anno-foot">
        <span>{note}</span>
        {tag && <span className="anno-tag">{tag}</span>}
      </figcaption>
    </figure>
  )
}

export default Annotated
