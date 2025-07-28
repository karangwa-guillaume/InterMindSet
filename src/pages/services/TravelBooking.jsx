import React from 'react'
import Footer from '../../components/Footer'

const travelOptions = [
  {
    title: 'Flight Reservations',
    description: 'We help you book international and local flights at the best rates with flexible options.',
    image: '/images/flight2.jpeg',
  },
  {
    title: 'Hotel & Accommodation',
    description: 'We arrange comfortable and budget-friendly accommodation close to schools or event venues.',
    image: '/images/hotel1.jpeg',
  },
  {
    title: 'Group Travel Plans',
    description: 'Traveling with a group? We organize trips for delegations, student tours, and conferences.',
    image: '/images/group1.jpeg',
  },
]

const TravelBooking = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-end"
        style={{ backgroundImage: `url('/images/flight1.1.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Travel Booking</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 bg-white text-gray-800 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Travel Without Stress</h2>
          <p className="max-w-2xl mx-auto">
            Whether you're flying out for studies, conferences, or cultural exchange, <strong>International Mindset Pathway</strong> makes your travel process simple and seamless.
            We manage every detail so you can focus on the journey ahead.
          </p>
        </div>

        {/* Travel Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {travelOptions.map((option, index) => (
            <div key={index} className="bg-gray-50 rounded shadow hover:shadow-md transition">
              <img src={option.image} alt={option.title} className="h-48 w-full object-cover rounded-t" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Block */}
        <div className="bg-orange-100 border-l-4 border-orange-500 p-8 rounded text-center">
          <h3 className="text-2xl font-bold text-orange-600 mb-2">Let’s Plan Your Journey</h3>
          <p className="mb-4">Contact us to get your personalized travel package — flights, accommodation, group plans, and more.</p>
          <a
            href="/contact"
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Book Now
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default TravelBooking
