import type { ReactNode } from 'react'

/** A slot for real product imagery. Swap each one for the actual asset. */
export function Shot({
  label,
  brief,
  tall,
  src,
}: {
  label: string
  brief: string
  tall?: boolean
  /** The finished visual. Without it the frame shows as a labelled placeholder. */
  src?: string
}) {
  if (src) {
    return (
      <figure className="cs-shot is-filled">
        <img src={src} alt={`${label}: ${brief}`} />
      </figure>
    )
  }

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

export function Section({
  n,
  title,
  kicker,
  label,
  children,
}: {
  n: string
  title: string
  kicker?: string
  /** Names the section above its title (e.g. "Scope") in place of the number. */
  label?: string
  children: ReactNode
}) {
  return (
    <section className="cs-section" id={`s${n}`}>
      <header className={`cs-section-head ${label ? 'is-labelled' : ''}`}>
        {label ? <span className="cs-label">{label}</span> : <span className="cs-num">{n}</span>}
        <div>
          <h2>{title}</h2>
          {kicker && <span className="cs-kicker">{kicker}</span>}
        </div>
      </header>
      {children}
    </section>
  )
}
