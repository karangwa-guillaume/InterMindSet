import React from 'react'
import { FaGlobe, FaUserFriends, FaHandsHelping, FaRoute, FaPlay } from 'react-icons/fa'

const benefits = [
  {
    icon: <FaGlobe />,
    title: 'Trusted Global Guidance',
    text: 'We help you confidently navigate studying, traveling, and moving across borders with expert insights and international partnerships.',
  },
  {
    icon: <FaUserFriends />,
    title: 'Cultural Connection',
    text: 'Our exchange programs foster true cultural understanding through real connections, events, and immersive experiences.',
  },
  {
    icon: <FaHandsHelping />,
    title: 'Personalized Support',
    text: 'We tailor each step — from counseling to applications and logistics — based on your unique path and goals.',
  },
  {
    icon: <FaRoute />,
    title: 'Seamless Journey',
    text: 'From visa paperwork to air ticketing and arrival, we ensure your journey is smooth, supported, and stress-free.',
  },
]

const WhyChoose = () => {
  return (
    <section className="bg-gray-300 py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Why Choose International Mindset Pathway?</h2>
          <p className="text-orange-500 text-sm uppercase tracking-wide">What makes us different</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Video/Image Block */}
          <div className="relative h-80 lg:h-[420px] bg-cover bg-center rounded-xl shadow"
            style={{ backgroundImage: `url('/images/bg_1.1.webp')` }}>
            <a
              href="https://www.youtube.com/watch?v=Re0K9T9MsRU"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl hover:bg-opacity-60 transition"
            >
              <FaPlay className="text-white text-4xl" />
            </a>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-orange-500 text-3xl">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
