import { useState } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'

const experience = [
  {
    role: 'Product Designer',
    company: 'Astar Infotech · Client: Questera AI (Greta, PLGOS)',
    period: 'Dec 2025 – Present',
    tags: ['Design Systems', '0→1', 'AI Product'],
    bullets: [
      'Designed Greta end-to-end across web, mobile, and growth, taking the AI product from zero to launch — now ~5,000 paid customers and ~$250K revenue.',
      'Led the full redesign of app.greta.sh — restructured core product flows, redesigned key features, and rebuilt the interface across web and mobile.',
      "Built and owned Greta's design system — component library, typography scale, spacing, and theming.",
      'Adopted Claude Code within a week and co-built the Greta marketing website, shipping design to production in two weeks.',
    ],
  },
  {
    role: 'UI/UX Designer',
    company: 'Astar Infotech · Client: Questera AI',
    period: 'Jun 2024 – Dec 2025',
    tags: ['PLG', 'Onboarding', 'Design QA'],
    bullets: [
      'Designed PLGOS, a product-led growth platform, end-to-end: onboarding, in-app guidance, gamification, feedback loops, and pricing, in light and dark themes.',
      'Owned full UI/UX of the questera.ai website — information architecture, mega-menu navigation, responsive layout, and visual design.',
      'Shipped Flows, a no-code workflow automation builder, including the project theme system and auth UX.',
      'Led usability testing across PLGOS and Greta, synthesizing findings into prioritized issue documents.',
      'Owned design-to-dev handoff and design QA; mentored a junior designer to independence in Figma.',
    ],
  },
  {
    role: 'UI/UX Designer Intern',
    company: 'Astar Infotech',
    period: 'Sep 2023 – Jun 2024',
    tags: ['Marketing', 'Dashboards'],
    bullets: [
      'Designed marketing collateral across e-books, social campaigns, and Product Hunt launches; delivered early product UI including light/dark dashboards and onboarding components.',
    ],
  },
  {
    role: 'UI/UX Designer Intern',
    company: 'Green Aadhaar · IIT Madras',
    period: 'May 2023 – Jul 2023',
    tags: ['Cross-platform', 'Environmental SaaS'],
    bullets: [
      'Designed cross-platform UI and a consistent visual language across web and mobile for an environmental SaaS product.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Techinfinity',
    period: 'Jul 2020 – Apr 2021',
    tags: ['Android', 'XML', 'Java'],
    bullets: [
      'Built Android app UI using XML and Java; contributed to system architecture documentation.',
    ],
  },
]

const skillGroups = [
  { title: 'Core Design', items: ['0→1 Product Design', 'UI/UX', 'Design Systems', 'Interaction Design', 'Prototyping'] },
  { title: 'Research', items: ['Usability Testing', 'Continuous Discovery', 'Feedback Synthesis', 'Competitive Analysis'] },
  { title: 'Tools', items: ['Figma', 'FigJam', 'Claude Code', 'Illustrator', 'Photoshop'] },
]

function Experience() {
  const [openRole, setOpenRole] = useState(experience[0].role + experience[0].period)

  return (
    <>
      <Nav />
      <div id="layout">
        <Sidebar />
        <main id="experience-page">
          <div className="experience-page-head">
            <h1>Experience</h1>
            <span className="experience-count">/{experience.length}</span>
          </div>

          <ul className="accordion-list">
            {experience.map((role) => {
              const key = role.role + role.period
              const isOpen = openRole === key
              return (
                <li className={`accordion-row ${isOpen ? 'open' : ''}`} key={key}>
                  <button
                    type="button"
                    className="accordion-header"
                    onClick={() => setOpenRole(isOpen ? '' : key)}
                    aria-expanded={isOpen}
                  >
                    <span className="accordion-title">{role.role}</span>
                    <div className="accordion-tags">
                      {role.tags.map((tag) => (
                        <span className="tag-pill outline" key={tag}>{tag}</span>
                      ))}
                    </div>
                    <span className="accordion-toggle" aria-hidden="true">
                      {isOpen ? '×' : '+'}
                    </span>
                  </button>

                  <div className="accordion-body">
                    <div className="accordion-clip">
                      <div className="accordion-inner">
                        <p className="accordion-meta">{role.company} · {role.period}</p>
                        <ul className="full-experience-bullets">
                          {role.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <section id="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="tag-row">
                    {group.items.map((item) => (
                      <span className="tag-pill outline" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer id="footer">
            <span>© 2026 Khanjna Vasava</span>
            <a href="mailto:vasavakhanjna22@gmail.com">vasavakhanjna22@gmail.com</a>
          </footer>
        </main>
      </div>
    </>
  )
}

export default Experience
