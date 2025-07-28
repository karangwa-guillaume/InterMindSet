// components/MissionVision.jsx
import React from 'react'

const MissionVision = () => {
  return (
    <section className="bg-gray-200 py-16 px-4 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-500">Our Mission</h3>
            <p className="text-gray-700">
              At International Mindset Path Way, our mission is to empower individuals to thrive globally through mindset transformation, education, and cross-cultural exchange. We equip people with tools, insights, and personalized coaching to unlock their full potential and succeed across borders.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-500">Our Vision</h3>
            <p className="text-gray-700">
              We envision a world where every person, regardless of background, has access to transformative coaching and opportunities that foster success, resilience, and leadership in the global arena.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
