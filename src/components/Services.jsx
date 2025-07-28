import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  FaGlobeAmericas,
  FaUsers,
  FaPassport,
  FaPlaneDeparture,
  FaTicketAlt,
} from 'react-icons/fa'

const services = [
  {
    icon: <FaGlobeAmericas />,
    title: 'Study Abroad',
    short: 'Guidance for studying in top countries worldwide.',
    path: '/services/studyAbroad',
  },
  {
    icon: <FaUsers />,
    title: 'Cultural Exchange Events',
    short: 'Programs that connect cultures and build global friendships.',
    path: '/services/culturalExchange',
  },
  {
    icon: <FaPassport />,
    title: 'Visa Assistance',
    short: 'Expert help in applying and following up on your visa.',
    path: '/services/visaAssistance',
  },
  {
    icon: <FaPlaneDeparture />,
    title: 'Travel Booking',
    short: 'Book your international and domestic travel with ease.',
    path: '/services/travelBooking',
  },
  {
    icon: <FaTicketAlt />,
    title: 'Air Ticketing',
    short: 'Fast and affordable airline ticket booking.',
    path: '/services/airTicketing',
  },
]


const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">We can help you in different situations</h2>
          <p className="text-orange-500 text-sm uppercase tracking-wide">We offer Services</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
            >
              <div className="text-4xl text-orange-500 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{service.short}</p>
              <Link
                 to={service.path}
                 className="text-sm text-orange-500 font-medium hover:underline"
                 >Read More
                </Link>

            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 max-w-lg w-full rounded shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setSelectedService(null)}
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-2">{selectedService.title}</h3>
            <p className="text-gray-700 text-sm">{selectedService.long}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Services
