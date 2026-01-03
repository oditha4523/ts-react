import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left Corner */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-green-600">
              Logo
            </a>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Auth Buttons - Right Corner */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-green-600 px-4 py-2 text-sm font-medium transition-colors">
              Login
            </button>
            <button className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
