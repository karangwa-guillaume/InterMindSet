import React from 'react'
import { FaPhone, FaClock } from 'react-icons/fa'

const Intro = () => {
  return (
    <section className="bg-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Call Info */}
          <div className="flex items-start gap-4 bg-white p-6 shadow rounded-lg">
            <div className="text-orange-500 text-3xl">
              <FaPhone />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-1">Call us: +250 786 876 623</h4>
              <p className="text-gray-600 text-sm">
                1 KN 54 St, Kigali, Rwanda
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex items-start gap-4 bg-white p-6 shadow rounded-lg">
            <div className="text-orange-500 text-3xl">
              <FaClock />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-1">Opening Hours</h4>
              <p className="text-gray-600 text-sm">
                Mon - Sat 7:00 AM - 8:00 PM / Sundays closed
              </p>
            </div>
          </div>

          {/* Appointment Button */}
          <div className="flex items-center justify-center h-full">
             <a href="/contact" // or a real URL if needed
                   className="inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded hover:bg-orange-600 transition">
                     Make an Appointment
               </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
