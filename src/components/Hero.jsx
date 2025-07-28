
// Slide content array
import React, { useRef } from 'react'
import Slider from 'react-slick'

const slides = [
  {
    image: '/images/bg_1.1.webp',
    subheading: 'Your Global Future Starts Here',
    heading: 'Study Abroad with Confidence and Support',
  },
  {
    image: '/images/bg_2.webp',
    subheading: 'Connecting Cultures & Building Dreams',
    heading: 'Join Our Life-Changing Exchange Programs',
  },
  {
    image: '/images/bg_3.2.webp',
    subheading: 'Travel Smarter, Dream Bigger',
    heading: 'Visa & Ticketing Support Made Simple',
  },
]

const Hero = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: () => {
      const active = document.activeElement
      if (
        active &&
        (active.tagName === 'A' || active.tagName === 'BUTTON' || active.tabIndex >= 0)
      ) {
        active.blur()
      }
    },
  }

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="h-[130vh] w-full bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundColor: '#111', // fallback background
              }}
            >
              {/* Overlay (less opacity for cleaner look) */}
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>

              {/* Text Content */}
              <div className="relative z-10 flex items-center justify-end h-full">
                <div className="text-center text-gray-200 px-4 max-w-2xl">
                  <h2 className="text-base md:text-2xl mb-2 uppercase tracking-widest">
                    {slide.subheading}
                  </h2>
                  <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    {slide.heading}
                  </h1>
                  <a
                    href="/contact"
                    className="inline-block bg-orange-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-400 hover:text-white transition duration-300"
                  >
                    Connect with us
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Hero
