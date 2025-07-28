import React, { useState } from 'react'
import Footer from '../../components/Footer'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const data = {
  USA: {
    'Lewis University': ['Computer Science', 'Business', 'Nursing'],
    'Kent State University': ['Engineering', 'Education', 'Health Sciences'],
  },
  Canada: {
    'University of Regina': ['Science', 'Arts', 'Engineering'],
    'Centennial College': ['Media', 'Business', 'IT'],
    'Yorkville University': ['Psychology', 'Business', 'Interior Design'],
    'Fleming College': ['Environmental Studies', 'Law', 'Trades'],
    'Northwestern Polytechnic (Alberta)': ['Technology', 'Health Care'],
    'University of Niagara Falls Canada': ['Computer Science', 'AI'],
    'Algoma University': ['Biology', 'Finance', 'History'],
    'University Canada West (UCW)': ['Commerce', 'Marketing'],
    'BLI Canada - Montreal (French programs)': ['French Language Programs'],
    'SELC Career College Vancouver': ['Hospitality', 'Marketing'],
    'George Brown College - Waterfront': ['Nursing', 'Culinary Arts'],
    'York University - School of Continuing Studies': ['Business', 'Technology'],
    'Niagara College': ['Tourism', 'Food Science'],
    'University of Victoria (via Kaplan International)': ['Engineering', 'Arts'],
    'International Language Academy of Canada (ILAC) - Toronto (ESL)': ['English Language Programs'],
  },
  UK: {
    'University of Oxford': ['Law', 'Philosophy', 'Medicine'],
    'University of Manchester': ['Computer Science', 'Engineering'],
  },
  Germany: {
    'Technical University of Munich': ['Robotics', 'Mechanical Engineering'],
  },
  Ireland: {
    'Trinity College Dublin': ['History', 'Computer Science'],
  },
  Australia: {
    'University of Sydney': ['Medicine', 'Law'],
  },
  Poland: {
    'Warsaw University': ['Economics', 'Computer Science'],
  },
}

const images = [
  '/images/bg_1.12..jpg',
  '/images/bg_1.1.webp',
  '/images/Arkansas-State-University.jpg',
  '/images/bg_1.11.jpg',
  '/images/bg_1.14.jpeg',
  '/images/bg_1.15...webp',
  '/images/bg_1.16.jpg',
  '/images/bg_1.11.jpeg',
]

const StudyAbroad = () => {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [openFaculty, setOpenFaculty] = useState(null)

  const handleCountryClick = (country) => {
    setSelectedCountry(country)
    setOpenFaculty(null)
  }

  const toggleFaculty = (university) => {
    setOpenFaculty(openFaculty === university ? null : university)
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-end"
        style={{ backgroundImage: `url('/images/bg_1.13.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Study Abroad</h1>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Open the Door to Global Education</h2>
        <p className="mb-8">
          We help you choose the right program and university in your preferred country. From application
          to visa — our expert guidance makes it smooth, simple, and successful.
        </p>

        {/* Country Selector */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-3 text-orange-500">Choose a Country</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {Object.keys(data).map((country) => (
              <button
                key={country}
                onClick={() => handleCountryClick(country)}
                className={`py-2 px-4 border rounded hover:bg-orange-100 transition ${
                  selectedCountry === country ? 'bg-orange-200 font-semibold' : ''
                }`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>

        {/* Universities and Faculties */}
        {selectedCountry && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-orange-500">
              Universities in {selectedCountry}
            </h3>
            <div className="space-y-4">
              {Object.entries(data[selectedCountry]).map(([university, faculties]) => (
                <div
                  key={university}
                  className="border border-gray-300 rounded overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition"
                    onClick={() => toggleFaculty(university)}
                  >
                    <span className="font-medium">{university}</span>
                    {openFaculty === university ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {openFaculty === university && (
                    <div className="bg-gray-50 px-6 pb-4 pt-2 text-sm text-gray-700">
                      <ul className="list-disc list-inside mb-4">
                        {faculties.map((faculty, idx) => (
                          <li key={idx}>{faculty}</li>
                        ))}
                      </ul>
                      <a
                        href="/apply"
                        className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                      >
                        Apply Now
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Encouraging Words */}
        <div className="bg-orange-100 border-l-4 border-orange-500 p-6 rounded mb-10">
          <h4 className="text-lg font-semibold mb-2">Why Choose Us?</h4>
          <p>
            From one-on-one consultations to complete document support, scholarship help, and visa
            preparation — we make your global education journey easy and exciting.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              className="rounded shadow-md object-cover h-64 w-full"
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default StudyAbroad
