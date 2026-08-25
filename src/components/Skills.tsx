import {
  AdobeLogo,
  ClaudeLogo,
  FigmaLogo,
  FramerLogo,
  LovableLogo,
  NotionLogo,
  OpenAILogo,
  PillIcon,
  type IconName,
} from './icons'
import profilePhoto from '../assets/profile-photo.png'

type Skill = { label: string; icon: IconName }

/* Two rows that drift in opposite directions, so the strip never reads
   as a single scrolling block. */
const rowOne: Skill[] = [
  { label: 'Product thinking', icon: 'grid' },
  { label: 'Problem solving', icon: 'bulb' },
  { label: 'Design strategy', icon: 'pen' },
  { label: 'User research', icon: 'users' },
  { label: 'Interaction design', icon: 'cursor' },
  { label: 'AI product design', icon: 'spark' },
  { label: 'Design systems', icon: 'layers' },
]

const rowTwo: Skill[] = [
  { label: '0→1 product design', icon: 'sun' },
  { label: 'Accessibility & inclusivity', icon: 'smile' },
  { label: 'Design system', icon: 'monitor' },
  { label: 'Storytelling', icon: 'book' },
  { label: 'Usability testing', icon: 'shield' },
  { label: 'Design to code', icon: 'code' },
  { label: 'Visual & UI design', icon: 'compass' },
]

const tools = [
  { name: 'Figma', logo: <FigmaLogo className="tool-logo tool-logo-tall" /> },
  { name: 'Framer', logo: <FramerLogo className="tool-logo" /> },
  { name: 'ChatGPT', logo: <OpenAILogo className="tool-logo" /> },
  { name: 'Claude', logo: <ClaudeLogo className="tool-logo" /> },
  { name: 'Notion', logo: <NotionLogo className="tool-logo" /> },
  { name: 'Lovable', logo: <LovableLogo className="tool-logo" /> },
  { name: 'Illustrator', logo: <AdobeLogo className="tool-logo" letters="Ai" bg="#330000" fg="#FF9A00" /> },
  { name: 'Photoshop', logo: <AdobeLogo className="tool-logo" letters="Ps" bg="#001E36" fg="#31A8FF" /> },
]

/* The track holds the list twice; the keyframe travels exactly half its
   width, so the seam never shows. */
function Marquee({ items, reverse }: { items: Skill[]; reverse?: boolean }) {
  return (
    <div className="marquee">
      <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
        {[0, 1].map((copy) => (
          <ul className="marquee-set" key={copy} aria-hidden={copy === 1}>
            {items.map((skill) => (
              <li className="skill-pill" key={skill.label}>
                <PillIcon name={skill.icon} />
                {skill.label}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My skills</h2>

      <div className="skills-card">
        <figure className="polaroid skills-polaroid">
          <img src={profilePhoto} alt="Khanjna Vasava" />
        </figure>

        <div className="skills-blurb">
          <p>
            I <u>design</u>, <u>build</u> and <u>learn</u>.
          </p>
          <p>
            <u>Figma</u> is home base. I <u>prototype</u> in Framer/Figma Make, build
            with Claude Code, ChatGPT to generate images, also use AI to{' '}
            <u>explore</u> and push ideas further.
          </p>
          <p>
            I know <b>HTML, CSS, &amp; JavaScript</b>. Making my way through React so
            I can handle frontend myself one day.
          </p>
          <p>
            I obsess over <u>details</u>, even if nobody is going to notice them. My
            best work has always been the result of obsessive attention to small
            details. Currently building skills in <b>Motion Design</b> ·˙✧.
          </p>
        </div>
      </div>

      <div className="skills-marquees">
        <Marquee items={rowOne} />
        <Marquee items={rowTwo} reverse />
      </div>

      <div className="tool-strip">
        <ul className="tool-row">
          {tools.map((tool) => (
            <li className="tool-chip" key={tool.name}>
              {tool.logo}
              <span>{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
