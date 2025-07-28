import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-end"
        style={{ backgroundImage: `url('/images/contact1.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <p className="text-white text-sm md:text-base mb-2">
            <a href="/" className="text-orange-400 hover:underline">Home</a>
            <span className="text-white"> / Contact</span>
          </p>
          <h1 className="text-3xl md:text-5xl text-white font-bold">Reach out to us</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:space-x-10">
            
            {/* Contact Info */}
            <div className="w-full md:w-1/3 mt-10 md:mt-0 bg-gray-600 text-white p-8 rounded shadow space-y-6">
              <h3 className="text-2xl font-bold mb-4">Let's get in touch</h3>
              <p>We're open for any suggestion or just to have a chat.</p>

              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-orange-400" />
                <p>1 KN 54 St, Kigali, Rwanda</p>
              </div>

              <div className="flex items-start space-x-3">
                <FaPhoneAlt className="mt-1 text-orange-400" />
                <p><a href="tel://1234567920" className="underline">+250 786 876 623</a></p>
              </div>

              <div className="flex items-start space-x-3">
                <FaEnvelope className="mt-1 text-orange-400" />
                <p><a href="mailto:inter.mindsetpath@gmail.com" className="underline">inter.mindsetpath@gmail.com</a></p>
              </div>

              <div className="flex items-start space-x-3">
                <FaGlobe className="mt-1 text-orange-400" />
                <p><a href="#" className="underline">yoursite.com</a></p>
              </div>
            </div>

            {/* Form */}
            <div className="w-full md:w-2/3 bg-white p-8 shadow rounded">
              <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 font-medium">Full Name</label>
                    <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Email Address</label>
                    <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Subject</label>
                  <input type="text" placeholder="Subject" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Message</label>
                  <textarea placeholder="Message" className="w-full p-2 border rounded" rows="4" />
                </div>
                <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Map */}
      <div className="w-full h-[400px]">
  <iframe
    title="Company Location"
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4879373241124!2d30.06685747358998!3d-1.9583750367271295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca67fcf8e5d21%3A0xe50e23d67b92fa5b!2s1%20KN%2054%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1752072281777!5m2!1sen!2srw  "
     height="100%"
     width="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  

      <Footer />
      </div>
    </>
  )
}

export default Contact
