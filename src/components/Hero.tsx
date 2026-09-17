import type { CSSProperties, ReactNode } from 'react'
import heroPortrait from '../assets/hero-khanjna.svg'
import {
  AdobeLogo,
  ClaudeLogo,
  FigmaLogo,
  FramerLogo,
  LovableLogo,
  NotionLogo,
} from './icons'

/* Each chip is parked on the photo's edge by angle, then given its own drift
   delay so the ring never bobs in unison. */
type Orbit = CSSProperties & { '--r': string; '--delay': string }
const orbit = (top: string, left: string, rotate: string, delay: string): Orbit => ({
  top,
  left,
  '--r': rotate,
  '--delay': delay,
})

const tools: { name: string; logo: ReactNode; style: Orbit }[] = [
  { name: 'Figma', logo: <FigmaLogo className="tool-logo tool-logo-tall" />, style: orbit('4%', '-7%', '-9deg', '0s') },
  { name: 'Framer', logo: <FramerLogo className="tool-logo" />, style: orbit('26%', '-14%', '7deg', '-1.6s') },
  { name: 'Claude', logo: <ClaudeLogo className="tool-logo" />, style: orbit('58%', '-12%', '-6deg', '-3.2s') },
  { name: 'Illustrator', logo: <AdobeLogo className="tool-logo" letters="Ai" bg="#330000" fg="#FF9A00" />, style: orbit('86%', '2%', '8deg', '-4.4s') },
  { name: 'Photoshop', logo: <AdobeLogo className="tool-logo" letters="Ps" bg="#001E36" fg="#31A8FF" />, style: orbit('84%', '62%', '-7deg', '-2.4s') },
  { name: 'Notion', logo: <NotionLogo className="tool-logo" />, style: orbit('52%', '78%', '6deg', '-0.8s') },
  { name: 'Lovable', logo: <LovableLogo className="tool-logo" />, style: orbit('16%', '72%', '-8deg', '-4s') },
]

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="hero-hello" lang="gu">નમસ્તે</span>

        <h1>
          I&rsquo;m
          <br />
          Khanjna Vasava
        </h1>

        <p className="hero-do">
          <span className="hero-do-label">I do</span>
          <span className="hero-do-rule" aria-hidden="true" />
          <strong>Product Design and Systems</strong>
        </p>

        <p className="hero-note">
          I&rsquo;ve always been curious about how things work.
          <span className="hero-note-in">Now I design how they feel.</span>
        </p>
      </div>

      <div className="hero-portrait">
        <figure className="hero-photo">
          <img src={heroPortrait} alt="Khanjna Vasava" />
        </figure>

        <ul className="hero-tools">
          {tools.map((tool) => (
            <li key={tool.name} className="hero-tool" style={tool.style}>
              {tool.logo}
              <span>{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero
