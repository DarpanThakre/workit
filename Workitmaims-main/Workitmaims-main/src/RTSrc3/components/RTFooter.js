import React from 'react';
import { Link } from 'react-router-dom';

const RTFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">About Us</h2>
            <p className="text-gray-300">
              We are dedicated to providing innovative marketing solutions that drive growth and engagement for your business.
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-blue-400 transition duration-300">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-blue-400 transition duration-300">About</Link>
              <Link to="/services" className="text-gray-300 hover:text-blue-400 transition duration-300">Services</Link>
              <Link to="/login" className="text-gray-300 hover:text-blue-400 transition duration-300">Login</Link>
            </nav>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.895 0 0 .895 0 2.025v19.95C0 23.105.895 24 2.025 24h21.35C23.105 24 24 23.105 24 21.975V2.025C24 .895 23.105 0 22.675 0zM12 24h-3V12H6v-3h3V7c0-3.314 2.686-6 6-6 1.627 0 3.12.09 3.54.131v3.626l-2.424.001c-1.898 0-2.67.988-2.67 2.549v3.389h4.87l-.634 3h-4.236V24z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.83.654-2.825.775 1.013-.607 1.794-1.569 2.165-2.724-.951.555-2.005.959-3.127 1.178C19.514 2.973 18.36 2 17.005 2c-2.525 0-4.58 2.055-4.58 4.58 0 .358.04.706.117 1.042-3.81-.191-7.187-2.018-9.45-4.788-.395.679-.623 1.465-.623 2.304 0 1.586.807 2.977 2.034 3.795-.748-.024-1.45-.229-2.061-.573v.058c0 2.223 1.577 4.079 3.676 4.503-.384.103-.787.158-1.204.158-.295 0-.581-.028-.862-.079.581 1.814 2.267 3.132 4.269 3.169-1.561 1.225-3.54 1.953-5.673 1.953-.369 0-.732-.021-1.095-.061 2.023 1.293 4.427 2.048 6.993 2.048 8.388 0 12.949-6.952 12.949-12.974 0-.198 0-.395-.014-.592.891-.643 1.663-1.446 2.27-2.367z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.672 0h-19.344C1.207 0 0 .896 0 2.005v19.99C0 23.104 1.207 24 2.328 24h19.344C22.793 24 24 23.104 24 21.995V2.005C24 .896 22.793 0 21.672 0zM7.2 20.452H4.36V9h2.84v11.452zm-1.42-13.54c-.9 0-1.626-.726-1.626-1.626 0-.899.726-1.626 1.626-1.626.901 0 1.626.727 1.626 1.626 0 .9-.725 1.626-1.626 1.626zm15.552 13.54h-2.84V15.25c0-1.287-.027-2.933-1.787-2.933-1.787 0-2.059 1.39-2.059 2.831v5.304h-2.84V9h2.84v1.54h.04c.394-.746 1.358-1.54 2.793-1.54 2.993 0 3.546 1.963 3.546 4.517v6.868h-.002z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default RTFooter;
