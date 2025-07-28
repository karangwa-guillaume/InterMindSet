import React from 'react'

const Topbar = ({ onToggleTheme, darkMode, profileImage }) => {
  return (
    <header className="flex justify-between items-center p-4 border-b shadow bg-white dark:bg-gray-800">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={onToggleTheme}
          className="text-sm px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
        <img
          src={profileImage}
          alt="Admin"
          className="w-10 h-10 rounded-full object-cover border"
        />
      </div>
    </header>
  )
}

export default Topbar
