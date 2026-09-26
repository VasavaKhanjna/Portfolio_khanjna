import type { CSSProperties } from 'react'
import profilePhoto from '../assets/profile-photo.png'
import sih01 from '../assets/achievements/sih_01.jpeg'
import sih02 from '../assets/achievements/sih_02.jpeg'
import ssip01 from '../assets/achievements/ssip_01.jpeg'
import collage01 from '../assets/education/collage_01.webp'
import collage02 from '../assets/education/collage_02.jpeg'
import quest01 from '../assets/before-this/quest_01.jpeg'
import quest02 from '../assets/before-this/quest_02.jpeg'
import quest03 from '../assets/before-this/quest_03.jpeg'
import hobby01 from '../assets/outside-work/hobby_01.jpeg'
import hobby02 from '../assets/outside-work/hobby_02.jpeg'
import hobby04 from '../assets/outside-work/hobby_04.jpeg'

type Photo = {
  src: string
  caption: string
  alt: string
  /** Width over height; photos in a row share a height, so this sets their widths. */
  ratio: number
}

/* Two rows of six, mixed so both rows add up to about the same width. */
const rows: Photo[][] = [
  [
    { src: profilePhoto, caption: 'Me', alt: 'Khanjna Vasava', ratio: 1 },
    { src: sih01, caption: 'SIH 2022', alt: 'Smart India Hackathon 2022', ratio: 1.5 },
    { src: hobby01, caption: 'Off hours', alt: 'Outside of work', ratio: 0.531 },
    { src: quest01, caption: 'Questera', alt: 'At Questera', ratio: 4 / 3 },
    { src: hobby02, caption: 'Off hours', alt: 'Outside of work', ratio: 0.5625 },
    { src: collage01, caption: 'LDCE', alt: 'L.D. College of Engineering', ratio: 4 / 3 },
  ],
  [
    { src: collage02, caption: 'Graduation', alt: 'Graduation day', ratio: 0.75 },
    { src: quest02, caption: 'Questera', alt: 'With the Questera team', ratio: 4 / 3 },
    { src: hobby04, caption: 'Off hours', alt: 'Outside of work', ratio: 0.5625 },
    { src: sih02, caption: 'SIH 2022', alt: 'Smart India Hackathon team', ratio: 1.334 },
    { src: ssip01, caption: 'SSIP 2022 · 1st', alt: 'Winning the SSIP 2022 hackathon', ratio: 1 },
    { src: quest03, caption: 'Questera', alt: 'At a Questera event', ratio: 4 / 3 },
  ],
]

function AboutSection() {
  return (
    <section id="about">
      {/* The words on top, the wall of photos underneath. */}
      <div className="about-frame">
        <div className="about-text">
          <div className="page-head">
            <h2>About</h2>
          </div>

          <p className="about-story">
            Outside of work, you'll usually find me with a movie, a book or a
            paintbrush. They're how I recharge, and they keep giving me fresh
            ways of seeing things. I love experimenting with new recipes, dancing,
            and saying yes to new experiences that keep me curious. And I'm
            happiest around people: social gatherings, meeting someone new, and
            the kind of long conversations that turn into real connections.
          </p>
        </div>

        <div className="about-wall">
          {rows.map((row, i) => (
            <div className="about-wall-row" key={i}>
              {row.map((photo) => (
                <figure key={photo.src} style={{ '--ratio': photo.ratio } as CSSProperties}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
