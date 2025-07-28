import React from 'react'
import CountUp from 'react-countup'

const stats = [
  {
    number: 12,
    label: 'Years of Experience',
  },
  {
    number: 80,
    label: 'Students Placed Abroad',
  },
  {
    number: 45,
    label: 'Partner Universities',
  },
  {
    number: 20,
    label: 'Cultural Exchange Events',
  },
]

const Counters = () => {
  return (
    <section className="bg-white py-16" id="section-counter">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-orange-500 mb-2">
                <CountUp end={stat.number} duration={2} />
              </div>
              <p className="text-gray-700 text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counters
