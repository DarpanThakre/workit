import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TjHomePage from './TjHomePage';
import TjShopPage from './TJShopPage';
import TjCategories from './TjCategories';


function TjHeader() {
  return (
    <Router>
      <header className="bg-gray-800 text-white fixed top-0 w-full shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/" className="text-white hover:text-blue-400">ShopLogo</Link>
          </div>

          {/* Navigation Links */}
          <nav className="space-x-6">
            <Link to="/Tjhome" className="hover:text-blue-400">Home</Link>
            <Link to="/Tjshop" className="hover:text-blue-400">Shop</Link>
            <Link to="/Tjcontact" className="hover:text-blue-400">Contact</Link>
          </nav>

          {/* Cart Icon */}
          <div>
            <button className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 5.6A1 1 0 007 20h10a1 1 0 001-.8l1.2-5.6M10 21a1 1 0 102 0m-6 0a1 1 0 102 0" />
              </svg>
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1.5">3</span>
            </button>
          </div>
        </div>
      </header>

      {/* Route Components */}
      <div className="pt-16">
        <Routes>
          <Route path="/Tjhome" element={<TjHomePage/>} />
          <Route path="/Tjshop" element={<TjShopPage/>} />
          <Route path="/Tjcontact" element={<TjCategories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default TjHeader;
