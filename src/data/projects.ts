import gretaPoster from '../assets/projects/greta-poster.svg'
import mediqPoster from '../assets/projects/mediq-poster.svg'

export type Tone = 'sand' | 'ink' | 'clay'

export type Project = {
  slug: string
  label: string
  tone: Tone
  /** Badge on the book cover. */
  metric: string
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
    metric: '~5K users',
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
    metric: 'PLG platform',
    type: 'PLG platform',
    surface: 'Web',
    year: '2024–25',
    role: 'UI/UX Designer',
    description:
      'Designed a product-led growth platform end-to-end: onboarding, in-app guidance, gamification (quizzes, streaks, leaderboards), feedback loops, and pricing — in light and dark themes.',
  },
  {
    slug: 'flows',
    label: 'Flows',
    tone: 'clay',
    cover: mediqPoster,
    metric: 'No-code builder',
    type: 'Workflow builder',
    surface: 'Web',
    year: '2024–25',
    role: 'UI/UX Designer',
    description:
      'Shipped a no-code workflow automation builder for non-technical users, including the project theme system and full auth UX with OTP and Google OAuth.',
  },
]
