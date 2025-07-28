import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
    >
      {theme === 'light' ? <FaMoon className="text-gray-800" /> : <FaSun className="text-yellow-300" />}
    </button>
  )
}

export default ThemeToggle
