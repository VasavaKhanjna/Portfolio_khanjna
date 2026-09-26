import gretaPoster from '../assets/projects/greta-poster.svg'
import mediqPoster from '../assets/projects/mediq-poster.svg'
import plgosPoster from '../assets/projects/plgos-poster.svg'

export type Tone = 'sand' | 'ink' | 'clay'

export type Project = {
  slug: string
  label: string
  tone: Tone
  /** Artwork for the book cover; without it the cover is drawn from `tone`. */
  cover?: string
  type: string
  surface: string
  year: string
  role: string
  description: string
  /** Set when the project has its own case-study page at /work/<slug>. */
  caseStudy?: boolean
}

export const projects: Project[] = [
  {
    slug: 'greta',
    label: 'Greta',
    tone: 'sand',
    cover: gretaPoster,
    type: 'AI product',
    surface: 'Web · Mobile',
    year: '2025—',
    role: 'Product Designer',
    description:
      'Designed an AI product end-to-end across web, mobile, and growth, from zero to launch — now ~5,000 paid customers and ~$250K revenue. Led the full redesign of app.greta.sh and built the design system from scratch.',
    caseStudy: true,
  },
  {
    slug: 'plgos',
    label: 'PLGOS',
    tone: 'ink',
    cover: plgosPoster,
    type: 'PLG platform',
    surface: 'Web',
    year: '2024–25',
    role: 'Lead Designer',
    description:
      'Designed a product-led growth platform end-to-end: onboarding, in-app guidance, gamification (quizzes, streaks, leaderboards), feedback loops, and pricing — in light and dark themes.',
    caseStudy: true,
  },
  {
    slug: 'mediq',
    label: 'MediQ',
    tone: 'clay',
    cover: mediqPoster,
    type: 'Case study',
    surface: 'Mobile',
    year: '2026',
    role: 'UI/UX Designer',
    description:
      'A mobile app that turns a lab report PDF into plain-language explanations, color-coded ranges, and a safe next step — so people know how concerned to be before they see a doctor.',
    caseStudy: true,
  },
]
