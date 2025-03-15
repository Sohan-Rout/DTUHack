import React from "react";
import { Twitter, Facebook, Linkedin, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo, Description, and Social Links */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logoRubleRadar.png" alt="Logo" className="h-10" />
              <span className="text-xl font-medium">Rubble Radar</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Revolutionizing Search & Rescue with Smart Technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-amber-600 transition duration-300"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-amber-600 transition duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-amber-600 transition duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-amber-600 transition duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-neutral-400 hover:text-amber-600 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-neutral-400 hover:text-amber-600 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  className="text-neutral-400 hover:text-amber-600 transition duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-neutral-400 hover:text-amber-600 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Additional Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/blog"
                  className="text-neutral-400 hover:text-amber-600 transition duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-neutral-400 hover:text-amber-600 transition duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-neutral-400 hover:text-amber-600 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="text-neutral-400 hover:text-amber-600 transition duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Back to Top Button */}
          <div className="flex justify-end h-10">
            <button
              onClick={scrollToTop}
              className="bg-amber-600 text-black px-6 py-3 rounded-lg hover:bg-amber-700 transition duration-300 flex items-center space-x-2"
            >
              <ArrowUp className="h-5 w-5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Rubble Radar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;