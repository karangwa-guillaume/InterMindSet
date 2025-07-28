import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Topbar from '../../components/Admin/Topbar'

import Profile from './Profile'
import Submissions from './Submissions'
import Applications from './Applications'
import VisaRequests from './VisaRequests'
import AirlineBookings from './AirlineBookings'
import CalturalExchangeRequests from './CalturalExchangeRequests'
import UserManagement from './UserManagement'
import ContentManagement from './ContentManagement'
import BlogEditor from './BlogEditor'

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [activePage, setActivePage] = useState('profile')

  // ✅ Admin Profile State
  const [adminProfile, setAdminProfile] = useState({
    name: '',
    email: '',
    profileImage: '/images/admin_avatar.png',
  })

  // Load saved profile
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('adminProfile'))
    if (saved) setAdminProfile(saved)
  }, [])

  const toggleTheme = () => setDarkMode(!darkMode)

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}>
      <Topbar
        onToggleTheme={toggleTheme}
        darkMode={darkMode}
        profileImage={adminProfile.profileImage}
      />
      <div className="flex">
        <Sidebar setActivePage={setActivePage} />
        <main className="p-6 flex-1">
          {activePage === 'profile' && (
            <Profile adminProfile={adminProfile} setAdminProfile={setAdminProfile} />
          )}
          {activePage === 'submissions' && <Submissions />}
          {activePage === 'applications' && <Applications />}
          {activePage === 'visaRequests' && <VisaRequests />}
          {activePage === 'airlineBookings' && <AirlineBookings />}
          {activePage === 'calturalExchangeRequests' && <CalturalExchangeRequests />}
          {activePage === 'userManagement' && <UserManagement />}
          {activePage === 'contentManagement' && <ContentManagement />}
          {activePage === 'blogEditor' && <BlogEditor/>}
        </main>
      </div>
    </div>
  )
}

export default Dashboard
