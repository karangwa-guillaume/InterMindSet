import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaSearch, FaChevronDown } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    { name: 'Study Abroad', path: '/services/studyAbroad' },
    { name: 'Cultural Exchange', path: '/services/culturalExchange' },
    { name: 'Visa Assistance', path: '/services/visaAssistance' },
    { name: 'Travel Booking', path: '/services/travelBooking' },
    { name: 'Air Ticketing', path: '/services/airTicketing' },
  ]

  return (
    <nav className="bg-white text-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          InterMindset<span className="text-orange-500">Pathway</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>

        {/* Links */}
        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="mt-4 md:mt-0 md:flex md:space-x-6 text-center md:text-left">
            <li>
              <Link
                to="/"
                className="block py-2 text-lg transition-all duration-200 hover:text-orange-500 hover:scale-110 hover:font-semibold"
                onClick={() => setIsServicesOpen(false)}

              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 text-lg transition-all duration-200 hover:text-orange-500 hover:scale-110 hover:font-semibold"
                onClick={() => setIsServicesOpen(false)}

              >
                About
              </Link>
            </li>

            {/* Services with dropdown */}
            <li className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 py-2 text-lg transition-all duration-200 hover:text-orange-500 hover:scale-110 hover:font-semibold focus:outline-none"
              >
                Services
                <FaChevronDown
                className={`transform transition-transform duration-300 ${ isServicesOpen ?'rotate-180' : ''}`}
                />
              </button>
              {isServicesOpen && (
                <ul className="absolute left-0 bg-white border mt-2 rounded shadow-md z-10 w-48 text-left">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.path}
                        onClick={() => setIsServicesOpen(false)}
                        className="block px-4 py-2 text-sm hover:bg-orange-100 hover:text-orange-600"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            
            <li>
              <Link
                to="/gallery"
                className="block py-2 text-lg transition-all duration-200 hover:text-orange-500 hover:scale-110 hover:font-semibold"
                onClick={() => setIsServicesOpen(false)}

              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 text-lg transition-all duration-200 hover:text-orange-500 hover:scale-110 hover:font-semibold"
                onClick={() => setIsServicesOpen(false)}

              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Search */}
        <form className="hidden md:block">
          <div className="flex border rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 text-black"
            />
            <button className="bg-orange-500 px-3 text-white">
              <FaSearch />
            </button>
          </div>
        </form>

        {/* login button */}
        <Link
              to="/admin"
             className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            > Admin Login
       </Link>

      </div>
    </nav>
  )
}

export default Navbar
