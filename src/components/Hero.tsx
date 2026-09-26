import heroArt from '../assets/hero.svg'

/* The hero is one illustrated piece; the heading and line underneath are
   there for screen readers and search, since the art carries the same words. */
function Hero() {
  return (
    <section className="hero">
      <h1 className="visually-hidden">Hey, I&rsquo;m Khanjna — a product designer</h1>
      <p className="visually-hidden">
        I&rsquo;ve always been curious about how things work. Now I design how they feel.
      </p>
      <img
        className="hero-art"
        src={heroArt}
        alt=""
        width={1440}
        height={1084}
        fetchPriority="high"
      />
    </section>
  )
}

export default Hero
