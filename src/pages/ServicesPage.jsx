import React from 'react'
import Services from '../components/Services'
import WhyChoose from '../components/WhyChoose'
import Footer from '../components/Footer'

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-end"
        style={{ backgroundImage: `url('/images/bg_3.jpeg')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <p className="text-white text-sm md:text-base mb-2">
            <span className="mr-2">
              <a href="/" className="text-orange-400 hover:underline">Home</a>
            </span>
            <span className="text-white"> / Services</span>
          </p>
          <h1 className="text-3xl md:text-5xl text-white font-bold">Services</h1>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <WhyChoose />

      {/* Footer Section */}
      <Footer />
    </>
  )
}

export default ServicesPage
