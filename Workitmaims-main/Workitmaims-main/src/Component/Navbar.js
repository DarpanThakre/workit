import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    // State to manage mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full bg-white shadow-lg p-4 z-50 transition-shadow duration-300 hover:shadow-2xl rounded-xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center w-44">
                        <img src="logo.png" alt="Logo" className="h-12" />
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-10">
                            <li className="hover:text-indigo-600 transition-colors duration-200">
                                <Link to="/" className="text-lg text-gray-800 hover:font-semibold hover:underline hover:text-blue-400">Home</Link>
                            </li>
                            <li className="hover:text-indigo-600 transition-colors duration-200">
                                <Link to="/about" className="text-lg text-gray-800 hover:font-semibold hover:underline hover:text-blue-400">About</Link>
                            </li>
                            <li className="hover:text-indigo-600 transition-colors duration-200">
                                <Link to="/services" className="text-lg text-gray-800 hover:font-semibold hover:underline hover:text-blue-400">Services</Link>
                            </li>
                            <li className="hover:text-indigo-600 transition-colors duration-200">
                                <Link to="/contact" className="text-lg text-gray-800 hover:font-semibold hover:underline hover:text-blue-400">Contact</Link>
                            </li>
                            <li className="hover:text-indigo-600 transition-colors duration-200">
                                <Link to="/feature" className="text-lg text-gray-800 hover:font-semibold hover:underline hover:text-blue-400">Feature</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex space-x-7">
                        <Link to="/login">
                            <button className="rounded-lg bg-indigo-600 text-white py-2 px-4 hover:bg-black transition-colors duration-200 shadow-lg hover:shadow-xl">
                                Login
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="rounded-lg bg-black text-white py-2 px-4 hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                                Signup
                            </button>
                        </Link>
                    </div>
                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden flex flex-col space-y-2 p-3 bg-white rounded-lg shadow-lg">
                        <Link to="/" className="text-xl text-gray-800 hover:font-semibold hover:underline hover:text-blue-400">Home</Link>
                        <Link to="/about" className="text-xl text-gray-800 hover:font-semibold hover:underline hover:text-blue-400">About</Link>
                        <Link to="/services" className="text-xl text-gray-800 hover:font-semibold hover:underline hover:text-blue-400">Services</Link>
                        <Link to="/contact" className="text-xl text-gray-800 hover:font-semibold hover:underline hover:text-blue-400">Contact</Link>
                        <Link to="/feature" className="text-xl text-gray-800 hover:font-semibold hover:underline hover:text-blue-400">Feature</Link>
                    </div>
                )}
            </div>

           
        </>
    );
}

export default Navbar;
