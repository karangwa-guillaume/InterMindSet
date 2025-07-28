import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Services from '../components/Services'
import WhyChoose from '../components/WhyChoose'
import Counters from '../components/Counters'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import MissionVision from '../components/MissionVision'

const Home = () => {
  return (
    <div >
     
    
      <Hero />
      <Intro/>
      <Services/>
      <WhyChoose/>
      <MissionVision/>
      <Counters/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
