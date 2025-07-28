import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:justify-between">
          {/* Left Side */}
          <div className="w-full lg:w-3/4">
            <div className="flex flex-wrap">
              {/* About Us */}
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <h2 className="text-xl font-semibold mb-4">About Us</h2>
                <p className="text-gray-400 mb-4">
                  International Mindset Pathway empowers students and professionals to pursue global opportunities through study abroad, cultural exchange, and visa support services.
                </p>
                <div className="flex gap-4 text-orange-500">
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaFacebook /></a>
                  <a href="#"><FaInstagram /></a>
                </div>
              </div>

              {/* Courses */}
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <h2 className="text-xl font-semibold mb-4">Courses</h2>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#">IELTS Training</a></li>
                  <li><a href="#">Visa Preparation</a></li>
                  <li><a href="#">Cultural Orientation</a></li>
                  <li><a href="#">Career Counseling</a></li>
                </ul>
              </div>

              {/* Topics */}
              <div className="w-full md:w-1/3">
                <h2 className="text-xl font-semibold mb-4">Resources</h2>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Accreditation</a></li>
                  <li><a href="#">Job Opportunities</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 text-gray-500 text-sm">
             Copyright &copy; {new Date().getFullYear()} International Mindset Pathway. All rights reserved 
            </div>
          </div>

          {/* Right Side - Free Consultation */}
          <div className="w-full lg:w-1/4 mt-10 lg:mt-0">
            <h2 className="text-xl font-semibold mb-4">Free Consultation</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400" />
              <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400" />
              <input type="text" placeholder="Subject" className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400" />
              <textarea rows="3" placeholder="Message" className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"></textarea>
              <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition">Send A Message</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
