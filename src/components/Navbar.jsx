import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="text-white text-2xl font-bold">
          <a href="/">Logo</a>
        </div>

        {/* Navigation links in the center */}
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="text-white hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Login and Signup buttons on the right */}
        <div className="flex space-x-4">
          <a
            href="/login"
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;