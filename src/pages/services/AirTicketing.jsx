import React, { useState } from 'react'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

const ticketingFeatures = [
  {
    title: 'Best Price Guarantee',
    desc: 'We secure the most competitive flight rates for students, professionals, and tourists.',
    image: '/images/price1.jpeg',
  },
  {
    title: 'Flexible Travel Options',
    desc: 'One-way, round-trip, and multi-city tickets customized to your travel goals.',
    image: '/images/flexible1.jpeg',
  },
  {
    title: '24/7 Customer Support',
    desc: 'Our team is available around the clock to handle changes, cancellations, or urgent travel needs.',
    image: '/images/support1.jpeg',
  },
]

const airlineSchedule = [
  {
    airline: 'Qatar Airways',
    destination: 'Doha',
    days: ['Monday', 'Wednesday', 'Saturday'],
    itinerary: [
      'Kigali → Doha - 10:30 AM',
      'Doha → New York - 2:00 PM',
    ],
  },
  {
    airline: 'RwandAir',
    destination: 'Dubai',
    days: ['Tuesday', 'Friday', 'Sunday'],
    itinerary: [
      'Kigali → Nairobi - 9:00 AM',
      'Nairobi → Dubai - 4:00 PM',
    ],
  },
  {
    airline: 'KLM Royal Dutch Airlines',
    destination: 'Amsterdam',
    days: ['Wednesday', 'Saturday'],
    itinerary: [
      'Kigali → Amsterdam - 11:00 PM (Direct)',
    ],
  },
  {
    airline: 'Turkish Airlines',
    destination: 'Istanbul',
    days: ['Monday', 'Thursday'],
    itinerary: [
      'Kigali → Istanbul - 8:45 PM (Direct)',
    ],
  },
]

const AirTicketing = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-end"
        style={{ backgroundImage: `url('/images/ticket2.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Air Ticketing</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 bg-white max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Fly Smarter, Travel Further</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            With International Mindset Pathway, booking your flight is no longer stressful. Our experienced agents ensure fast, reliable, and flexible air ticketing for all travelers—whether you’re heading to study, attend a conference, or explore the world.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {ticketingFeatures.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow hover:shadow-md transition rounded overflow-hidden"
            >
              <img src={item.image} alt={item.title} className="h-60 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-orange-600">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expandable Airline Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-orange-600">Airlines Weekly Schedule & Itinerary</h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            {airlineSchedule.map((airline, index) => (
              <div key={index} className="border border-gray-300 rounded shadow">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full text-left p-4 font-semibold bg-orange-100 hover:bg-orange-200 flex justify-between items-center"
                >
                  <span>{airline.airline} — <span className="text-gray-600">{airline.destination}</span></span>
                  <span>{openIndex === index ? '▲' : '▼'}</span>
                </button>
                {openIndex === index && (
                  <div className="bg-white p-4 space-y-2">
                    <div>
                      <p className="font-medium text-gray-700">Weekly Departure Days:</p>
                      <ul className="list-disc list-inside text-gray-600">
                        {airline.days.map((day, i) => (
                          <li key={i}>{day}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Itinerary:</p>
                      <ul className="list-disc list-inside text-gray-600">
                        {airline.itinerary.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-orange-50 border-l-4 border-orange-500 p-10 rounded text-center mt-20"
        >
          <h3 className="text-2xl font-bold text-orange-600 mb-2">Ready to Take Off?</h3>
          <p className="mb-4 text-gray-700">
            Let us handle your flight arrangements while you focus on the exciting journey ahead.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Book Your Flight Now
          </a>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}

export default AirTicketing
