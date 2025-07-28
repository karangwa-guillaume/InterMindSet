import React from 'react';
import {
  FaUserCircle,
  FaUsers,
  FaWpforms,
  FaClipboardCheck,
  FaPassport,
  FaPlaneDeparture,
  FaGlobeAmericas,
  FaEdit,
  FaBlog,
  FaSignOutAlt,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ setActivePage }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ✅ Clear any stored session/auth data if needed
    localStorage.removeItem('adminProfile');
    alert('You have been logged out.');
    navigate('/admin/adminAuth'); // redirect to login page
  };

  const navItems = [
    { label: 'Profile', icon: <FaUserCircle />, key: 'profile' },
    { label: 'User Management', icon: <FaUsers />, key: 'userManagement' },
    { label: 'Form Submissions', icon: <FaWpforms />, key: 'submissions' },
    { label: 'Submitted Applications', icon: <FaClipboardCheck />, key: 'applications' },
    { label: 'Visa Requests', icon: <FaPassport />, key: 'visaRequests' },
    { label: 'Airline Bookings', icon: <FaPlaneDeparture />, key: 'airlineBookings' },
    { label: 'Cultural Exchange', icon: <FaGlobeAmericas />, key: 'calturalExchangeRequests' },
    { label: 'Content Management', icon: <FaEdit />, key: 'contentManagement' },
    { label: 'Blog Editor', icon: <FaBlog />, key: 'blogEditor' },
  ];

  return (
    <aside className="w-64 min-h-screen bg-orange-100 dark:bg-gray-700 p-4 flex flex-col justify-between">
      <nav className="space-y-3">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActivePage(item.key)}
            className="w-full text-left flex items-center space-x-3 p-2 rounded hover:bg-orange-200 dark:hover:bg-gray-600"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Logout button at the bottom */}
      <button
        onClick={handleLogout}
        className="flex items-center space-x-3 text-left w-full mt-6 p-2 rounded text-red-600 hover:bg-red-100 dark:hover:bg-gray-600"
      >
        <FaSignOutAlt className="text-lg" />
        <span className="font-medium">Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;
