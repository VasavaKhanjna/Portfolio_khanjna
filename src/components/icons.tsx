/* Small line marks for the skill pills, plus the tool logos.
   All inline so the marquee never waits on a network request. */

type IconProps = { className?: string }

const line = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/* ---------- pill marks ---------- */

const pillIcons = {
  grid: (
    <svg {...line}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9.5h18M9 9.5V20" />
    </svg>
  ),
  bulb: (
    <svg {...line}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4.9 1 .9 1.7V16h5.2v-.4c0-.7.3-1.3.9-1.7A6 6 0 0 0 12 3Z" />
    </svg>
  ),
  pen: (
    <svg {...line}>
      <path d="M4 20.5 8 19l11-11a2.1 2.1 0 0 0-3-3L5 16l-1.5 4Z" />
      <path d="m14.5 6.5 3 3" />
    </svg>
  ),
  users: (
    <svg {...line}>
      <circle cx="9.5" cy="8" r="3.2" />
      <path d="M3.5 19.5a6 6 0 0 1 12 0M17 5.4a3.2 3.2 0 0 1 0 6.2M18 19.5a5.6 5.6 0 0 0-2.3-4.5" />
    </svg>
  ),
  cursor: (
    <svg {...line}>
      <path d="M5 3.5 18.5 11l-5.7 1.6L10 19Z" />
      <path d="m14 14 5 5" />
    </svg>
  ),
  spark: (
    <svg {...line}>
      <path d="M12 3.5 13.7 9 19 10.7 13.7 12.4 12 18l-1.7-5.6L5 10.7 10.3 9Z" />
      <path d="M18.5 16.5 19 18l1.5.5L19 19l-.5 1.5-.5-1.5L16.5 18l1.5-.5Z" />
    </svg>
  ),
  sun: (
    <svg {...line}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
    </svg>
  ),
  smile: (
    <svg {...line}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5a4.5 4.5 0 0 0 7 0M9 9.5h.01M15 9.5h.01" />
    </svg>
  ),
  monitor: (
    <svg {...line}>
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M9 21h6M12 17v4" />
    </svg>
  ),
  book: (
    <svg {...line}>
      <path d="M12 6.5C10.5 5 8.4 4.5 4.5 4.5v13c3.9 0 6 .5 7.5 2 1.5-1.5 3.6-2 7.5-2v-13c-3.9 0-6 .5-7.5 2Z" />
      <path d="M12 6.5v13" />
    </svg>
  ),
  shield: (
    <svg {...line}>
      <path d="M12 3 4.5 6v6c0 4.4 3.1 7.6 7.5 9 4.4-1.4 7.5-4.6 7.5-9V6Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  ),
  code: (
    <svg {...line}>
      <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
      <path d="m9 10-2.5 2L9 14M14 14l2.5-2L14 10" />
    </svg>
  ),
  layers: (
    <svg {...line}>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5" />
    </svg>
  ),
  compass: (
    <svg {...line}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5Z" />
    </svg>
  ),
} as const

export type IconName = keyof typeof pillIcons

/* Kept as a component so this module only exports components — the map itself
   stays private. */
export function PillIcon({ name }: { name: IconName }) {
  return <span className="skill-pill-icon">{pillIcons[name]}</span>
}

/* ---------- tool logos ---------- */

export function FigmaLogo({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 38 57" fill="none" aria-hidden="true">
      <path fill="#0ACF83" d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5a9.5 9.5 0 0 0 0 19Z" />
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5Z" />
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5Z" />
      <path fill="#FF7262" d="M19 0h9.5a9.5 9.5 0 0 1 0 19H19V0Z" />
      <path fill="#1ABCFE" d="M38 28.5a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0Z" />
    </svg>
  )
}

export function FramerLogo({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#0055FF" aria-hidden="true">
      <path d="M2 1h20v7.3H10.6L2 1Zm0 7.3h20L12 15.7H2V8.3ZM2 15.7h10V23L2 15.7Z" />
    </svg>
  )
}

export function OpenAILogo({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 2.4 20.3 7.2v9.6L12 21.6 3.7 16.8V7.2 12 2.4Z" />
      <path d="M12 7v10M12 12l4.4-2.5M12 12l-4.4-2.5" />
    </svg>
  )
}

export function ClaudeLogo({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      stroke="#D97757"
      strokeWidth="2.1"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
    </svg>
  )
}

export function NotionLogo({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#fff" stroke="#16150f" strokeWidth="1.6" />
      <path d="M8 17V7l8 10V7" stroke="#16150f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function LovableLogo({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="lovable-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6B9B" />
          <stop offset="55%" stopColor="#FF7A45" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <path
        fill="url(#lovable-grad)"
        d="M12 20.5S3.5 15.4 3.5 9.6A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8.5 2.6c0 5.8-8.5 10.9-8.5 10.9Z"
      />
    </svg>
  )
}

export function AdobeLogo({ className, letters, bg, fg }: IconProps & { letters: string; bg: string; fg: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" fill={bg} />
      <text
        x="12"
        y="16.4"
        textAnchor="middle"
        fill={fg}
        fontSize="11"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        {letters}
      </text>
    </svg>
  )
}
