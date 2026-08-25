import type { CSSProperties } from 'react'
import quest01 from '../assets/before-this/quest_01.jpeg'
import hobby01 from '../assets/outside-work/hobby_01.jpeg'
import hobby02 from '../assets/outside-work/hobby_02.jpeg'
import sih01 from '../assets/achievements/sih_01.jpeg'

/* Each pinned item carries its own tilt and offset so the two clusters
   read as a scatter rather than a grid. */
type Pin = CSSProperties & { '--r': string }
const pin = (rotate: string, top: string, left: string, width?: string): Pin => ({
  '--r': rotate,
  top,
  left,
  width,
})

function Hero() {
  return (
    <section className="hero">
      <div className="hero-pins hero-pins-left" aria-hidden="true">
        <figure className="polaroid" style={pin('-7deg', '0%', '4%', '46%')}>
          <img src={quest01} alt="" loading="lazy" />
        </figure>
        <div className="sticky-note" style={pin('3deg', '30%', '38%')}>
          I believe the best work comes from <b>obsessing over the details</b> nobody
          is supposed to notice.
        </div>
        <figure className="polaroid" style={pin('5deg', '52%', '8%', '42%')}>
          <img src={hobby01} alt="" loading="lazy" />
        </figure>
        <span className="sticker" style={pin('14deg', '6%', '58%')}>🎨</span>
        <span className="sticker" style={pin('-10deg', '82%', '52%')}>🎬</span>
      </div>

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
          Currently at <b>Astar Infotech</b>, Gandhinagar
          <span className="hero-note-in">designing Greta and PLGOS for Questera AI.</span>
          Previously I have worked with <b>Green Aadhaar</b> and <b>Techinfinity</b>
          <span className="hero-note-in">to build products people actually finish using.</span>
        </p>
      </div>

      <div className="hero-pins hero-pins-right" aria-hidden="true">
        <figure className="polaroid" style={pin('6deg', '2%', '18%', '48%')}>
          <img src={sih01} alt="" loading="lazy" />
        </figure>
        <figure className="polaroid" style={pin('-8deg', '38%', '46%', '44%')}>
          <img src={hobby02} alt="" loading="lazy" />
        </figure>
        <span className="sticker" style={pin('-12deg', '46%', '10%')}>📚</span>
        <span className="sticker" style={pin('16deg', '78%', '30%')}>💃</span>
      </div>
    </section>
  )
}

export default Hero
