import { useEffect, useState } from 'react'

type CarouselImage = string | { src: string; position?: string }

type CarouselProps = {
  images: CarouselImage[]
  alt: string
}

function Carousel({ images, alt }: CarouselProps) {
  const [index, setIndex] = useState(0)

  const goTo = (next: number) => {
    setIndex((next + images.length) % images.length)
  }

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length, index])

  return (
    <div className="carousel">
      {images.map((image, i) => {
        const src = typeof image === 'string' ? image : image.src
        const position = typeof image === 'string' ? 'center' : image.position ?? 'center'
        return (
          <img
            className={`carousel-image ${i === index ? 'active' : ''}`}
            src={src}
            alt={`${alt} ${i + 1}`}
            style={{ objectPosition: position }}
            key={src}
          />
        )
      })}

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="carousel-arrow carousel-prev"
            onClick={() => goTo(index - 1)}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-arrow carousel-next"
            onClick={() => goTo(index + 1)}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="carousel-dots">
            {images.map((image, i) => (
              <button
                type="button"
                key={typeof image === 'string' ? image : image.src}
                className={`carousel-dot ${i === index ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Carousel
