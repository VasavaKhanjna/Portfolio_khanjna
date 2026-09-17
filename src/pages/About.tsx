import { Link } from 'react-router-dom'
import Dock from '../components/Dock'
import Carousel from '../components/Carousel'
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

const achievementImages = [sih01, sih02, ssip01]
const educationImages = [collage01, { src: collage02, position: 'center 22%' }]
const beforeThisImages = [quest01, quest02, quest03]
const outsideWorkImages = [
  { src: hobby01, position: 'center 30%' },
  { src: hobby02, position: 'center 40%' },
  { src: hobby04, position: 'center 35%' },
]

const blocks = [
  {
    title: 'What I do',
    media: <img className="about-photo" src={profilePhoto} alt="Khanjna Vasava" />,
    body: (
      <p>
        I'm a Product Designer at Astar Infotech, working on Questera AI's
        products — Greta and PLGOS. I own design end-to-end across web,
        mobile, and growth: research, interaction design, the design
        system, and shipping to production. Greta has grown to ~5,000
        paid customers and ~$250K in revenue since launch.
      </p>
    ),
  },
  {
    title: 'Before this',
    media: <Carousel images={beforeThisImages} alt="Before this" />,
    body: (
      <p>
        I started as a UI/UX Designer Intern, designing marketing
        collateral, e-books, and early product UI. From there I moved
        into a full-time UI/UX Designer role shipping PLGOS and Flows,
        before becoming the Product Designer leading Greta today.
        <Link className="mark" to="/experience"> See the full timeline →</Link>
      </p>
    ),
  },
  {
    title: 'Outside of work',
    media: <Carousel images={outsideWorkImages} alt="Outside of work" />,
    body: (
      <p>
        Outside of work, I enjoy watching movies, reading books, and
        painting, as they inspire creativity and give me fresh
        perspectives. I love experimenting with new recipes, dancing, and
        exploring new experiences that help me stay curious and
        energized. I also enjoy social gatherings, meeting new people,
        and building meaningful connections through shared conversations
        and experiences.
      </p>
    ),
  },
  {
    title: 'Achievements',
    media: <Carousel images={achievementImages} alt="Achievement" />,
    body: (
      <p>
        I placed 1st at the Azadi Ka Amrut Mahotsav Hackathon (SSIP 2022)
        and was runner-up at the Smart India Hackathon (SIH 2022). I've
        also worked as a graphic designer for ExpressIT Magazine, and
        designed 4+ e-books and brand visuals for 4+ Product Hunt
        launches.
      </p>
    ),
  },
  {
    title: 'Education',
    media: <Carousel images={educationImages} alt="Education" />,
    body: (
      <p>
        I completed my B.Tech in Information Technology at L.D. College
        of Engineering, Ahmedabad (2021–2024), after a Diploma in
        Information Technology from Govt. Polytechnic, Gandhinagar
        (2018–2021).
      </p>
    ),
  },
]

function About() {
  return (
    <>
      <Dock />
      <div id="layout">
        <main id="about-page">
          {blocks.map((block, index) => (
            <section className={`about-row ${index % 2 === 1 ? 'reverse' : ''}`} key={block.title}>
              <div className="about-media">{block.media}</div>
              <div className="about-text">
                <h2>{block.title}</h2>
                {block.body}
              </div>
            </section>
          ))}

          <footer id="footer">
            <span>© 2026 Khanjna Vasava</span>
            <a href="mailto:vasavakhanjna22@gmail.com">vasavakhanjna22@gmail.com</a>
          </footer>
        </main>
      </div>
    </>
  )
}

export default About
