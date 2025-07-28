import React from 'react'
import Footer from '../../components/Footer'

const CulturalExchange = () => {
  const benefits = [
    'Connect with people from different cultures',
    'Improve your language and communication skills',
    'Participate in international conferences and workshops',
    'Experience new traditions, food, and education systems',
    'Develop global leadership and teamwork abilities',
  ]

  const events = [
    {
      image: '/images/youth1.jpg',
      title: 'International Youth Summit - kigali-Rwanda',
    },
    {
      image: '/images/camp1.jpg',
      title: 'Student Cultural Camp - Rwanda',
    },
    {
      image: '/images/exchange3.jpeg',
      title: 'Africa-Europe Exchange Program',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-end"
        style={{ backgroundImage: `url('/images/bg_2.webp')` }}
      >
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Cultural Exchange</h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Explore the World, Share Your Culture</h2>
        <p className="mb-6">
          At <strong>International Mindset Pathway</strong>, our Cultural Exchange programs are designed to give students and young professionals a life-changing experience. These programs allow you to immerse yourself in a new culture, exchange ideas, and build lasting international friendships.
        </p>

        {/* Benefits */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-3 text-orange-500">Benefits of Our Cultural Exchange Programs</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        {/* Highlighted Events */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-3 text-orange-500">Popular Events & Programs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
                <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold">{event.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-orange-100 border-l-4 border-orange-500 p-6 rounded">
          <h4 className="text-lg font-semibold mb-2">Ready to travel and learn?</h4>
          <p>
            Join one of our cultural exchange programs today and take the first step toward global awareness and personal growth.
            Contact us for the next available opportunity or to apply.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default CulturalExchange
