// src/components/Navbar.js

import React, { useState } from 'react';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const RNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <div className="text-xl font-bold">
                    <a href="#Rhoome">MyLogo</a>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#Rhome" className="hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
                    <a href="#Rservices" className="hover:bg-gray-700 px-3 py-2 rounded-md">Services</a>
                    <div className="relative group">
                        <button className="hover:bg-gray-700 px-3 py-2 rounded-md">More</button>
                        <div className="Rabsolute left-0 hidden bg-white text-black mt-2 rounded-md shadow-lg group-hover:block">
                            <a href="#Rabout" className="block px-4 py-2 hover:bg-gray-100">About</a>
                            <a href="#Rcontact" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
                            <a href="#Rblog" className="block px-4 py-2 hover:bg-gray-100">Blog</a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-2 py-1 rounded-md border border-gray-300"
                        />
                        <FaUserCircle className="text-2xl" />
                    </div>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-gray-700`}>
                <a href="#Rhome" className="block px-4 py-2">Home</a>
                <a href="#Rservices" className="block px-4 py-2">Services</a>
                <a href="#Rabout" className="block px-4 py-2">About</a>
                <a href="#Rcontact" className="block px-4 py-2">Contact</a>
                <a href="#Rblog" className="block px-4 py-2">Blog</a>
            </div>
        </nav>
    );
};

export default RNavbar;
