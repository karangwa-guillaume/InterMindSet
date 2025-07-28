import React from 'react'
import Footer from '../components/Footer'
import WhyChoose from '../components/WhyChoose'
import Counters from '../components/Counters'
import Testimonials from '../components/Testimonials'
import Intro from '../components/Intro'
import MissionVision from '../components/MissionVision'
import Team from '../components/Team'

const About = () => {
  return (
    <>
        {/* Hero Section */}
        <section
          className="relative h-[60vh] bg-cover bg-center flex items-end"
          style={{ backgroundImage: "url('/images/about us.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10 p-8 text-white">
            <p className="text-sm mb-1">
              <a href="/" className="text-orange-500">Home</a> / About Us
            </p>
            <h1 className="text-4xl font-bold">About Us</h1>
          </div>
        </section>

        <Intro/>
        <WhyChoose />
        <MissionVision/>
        <Counters />
        <Team/>
        <Testimonials />
        <Footer />
    </>
  )
}

export default About
