import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RTHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">My Website</Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/RThome" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</Link>
          <Link to="/RTabout" className="text-gray-700 hover:text-blue-600 transition duration-300">About</Link>
          <Link to="/RTservices" className="text-gray-700 hover:text-blue-600 transition duration-300">Services</Link>
          <Link to="/RTlogin" className="text-gray-700 hover:text-blue-600 transition duration-300">Login</Link>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center p-4 space-y-2">
            <Link to="/RThome" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</Link>
            <Link to="/RTabout" className="text-gray-700 hover:text-blue-600 transition duration-300">About</Link>
            <Link to="/RTservices" className="text-gray-700 hover:text-blue-600 transition duration-300">Services</Link>
            <Link to="/RTlogin" className="text-gray-700 hover:text-blue-600 transition duration-300">Login</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default RTHeader;
