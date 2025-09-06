import React from 'react'
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-gray-50 shadow-sm">
      <div className="max-w-8xl mx-auto px-15 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyLogo</div>

        {/* Menu */}
        <nav className="flex items-center gap-10">
          <a
            href="#home"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About
          </a>

          {/* Login Button */}
          <button className="ml-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <LogIn size={18} />
            Login
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
