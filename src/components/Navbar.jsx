import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="h-14 w-14 flex items-center space-x-2">
          <img src="./public/logoRubleRadar.png" className="h-full" />
          <span className="text-white text-xl font-medium">RubbleRadar</span>
        </div>

        {/* Navigation links in the center */}
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-amber-600 hover:text-gray-300 hover:underline underline-offset-8">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-amber-600 hover:text-gray-300 hover:underline underline-offset-8">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="text-amber-600 hover:text-gray-300 hover:underline underline-offset-8">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="text-amber-600 hover:text-gray-300 hover:underline underline-offset-8">
              Contact
            </a>
          </li>
        </ul>

        {/* Login and Signup buttons on the right */}
        <div className="flex space-x-4">
          <a
            href="/login"
            className="bg-amber-600 text-black px-4 py-2 rounded hover:bg-amber-700"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-transparent border border-amber-600 text-amber-600 px-4 py-2 rounded hover:bg-amber-700 hover:text-black hover:border-amber-700"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
