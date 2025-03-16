import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="h-14 w-14 flex items-center space-x-2">
          <img src="/logoRubleRadar.png" className="h-full" />
          <span className="text-white text-xl font-bold font-poppins"> RubbleRadar</span>
        </div>

        {/* Navigation links in the center */}
        <ul className="flex space-x-6">
          <li>
            <a
              href="/"
              className="text-amber-600 hover:text-gray-300 relative group transition-all duration-300 delay-75"
            >
              Home
              <span className="absolute left-0 bottom-0 h-0.5 bg-amber-600 w-0 group-hover:w-full transition-all duration-300 delay-75"></span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-amber-600 hover:text-gray-300 relative group transition-all duration-300 delay-75"
            >
              Problem
              <span className="absolute left-0 bottom-0 h-0.5 bg-amber-600 w-0 group-hover:w-full transition-all duration-300 delay-75"></span>
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-amber-600 hover:text-gray-300 relative group transition-all duration-300 delay-75"
            >
              About
              <span className="absolute left-0 bottom-0 h-0.5 bg-amber-600 w-0 group-hover:w-full transition-all duration-300 delay-75"></span>
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="text-amber-600 hover:text-gray-300 relative group transition-all duration-300 delay-75"
            >
              Features
              <span className="absolute left-0 bottom-0 h-0.5 bg-amber-600 w-0 group-hover:w-full transition-all duration-300 delay-75"></span>
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-amber-600 hover:text-gray-300 relative group transition-all duration-300 delay-75"
            >
              Contact
              <span className="absolute left-0 bottom-0 h-0.5 bg-amber-600 w-0 group-hover:w-full transition-all duration-300 delay-75"></span>
            </a>
          </li>
        </ul>

        {/* Login and Signup buttons on the right */}
        <div className="flex space-x-4">
          <a
            href="/login"
            className="bg-amber-600 text-black px-4 py-2 rounded hover:bg-amber-700 transition-all duration-300 delay-75"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-transparent border border-amber-600 text-amber-600 px-4 py-2 rounded hover:bg-amber-700 hover:text-black hover:border-amber-700 transition-all duration-300 delay-75"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
