import React from 'react'
import Slider from 'react-slick'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    quote: "The International Mindset Pathway team guided me step-by-step for my study abroad process. I’m now studying in Canada and couldn’t be happier!",
    name: "Rukundo Johnson",
    position: "Student – Canada",
    image: "/images/person_1.jpeg",
  },
  {
    quote: "They made my visa process so smooth and stress-free. Their support is unmatched!",
    name: "Michael Kim",
    position: "Software Engineer – Germany",
    image: "/images/person_2.jpeg",
  },
  {
    quote: "I participated in a cultural exchange in Europe through IMP — it was eye-opening and unforgettable!",
    name: "Alexandra Barton",
    position: "Cultural Exchange Participant",
    image: "/images/person_3.jpeg",
  },
   {
    quote: "I participated in a cultural exchange in Europe through IMP — it was eye-opening and unforgettable!",
    name: "Amina Mahyia",
    position: "Cultural Exchange Participant",
    image: "/images/person_4.jpeg",
  },
  {
    quote: "The International Mindset Pathway team guided me step-by-step for my study abroad process. I’m now studying in United State-Ohio and couldn’t be happier!",
    name: "Divine Keza",
    position: "Student – USA",
    image: "/images/person_5.jpeg",
  },
  {
    quote: "I had no idea how to prepare for international admission until I met International Mindset Pathway. Now I’m doing my Master’s in the UK.",
    name: "Simon Kayonde",
    position: "Graduate Student – UK",
    image: "/images/person_6.jpeg",
  },

]

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}

const Testimonials = () => {
  return (
    <section className="bg-gray-800 py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Happy Clients & Feedbacks</h2>
          <p className="text-orange-400 uppercase text-sm tracking-wide">Testimonies</p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-900 rounded-lg p-8 text-center max-w-2xl mx-auto relative shadow">
                <div className="text-orange-400 text-3xl mb-4">
                  <FaQuoteLeft />
                </div>
                <p className="text-lg italic mb-6">"{t.quote}"</p>
                <div className="flex items-center justify-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${t.image})` }}
                  ></div>
                  <div className="text-left">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials
