import React from 'react';
import { LogIn, UserPlus } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full bg-gray-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Creativex
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            About
          </Link>

          {/* Login Button */}
          <Link to="/login" aria-label="Login">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              <LogIn size={18} />
              Login
            </button>
          </Link>

          {/* Signup Button */}
          <Link to="/signup" aria-label="Sign Up">
            <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              <UserPlus size={18} />
              Getting Started
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;