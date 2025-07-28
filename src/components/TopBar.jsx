import React from 'react'
import { FaPhone, FaFacebook, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa'

const TopBar = () => {
  return (
    <div className="bg-black text-sm py-2">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-white flex items-center gap-2">
          <FaPhone className="text-orange-500" />
          <a href="#" className="hover:text-orange-500">+250 786 876 623</a>
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="text-white hover:text-blue-600"><FaFacebook /></a>
          <a href="#" className="text-white hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="text-white hover:text-pink-500"><FaInstagram /></a>
          <a href="#" className="text-white hover:text-pink-400"><FaDribbble /></a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
