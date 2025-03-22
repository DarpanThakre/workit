// src/components/Services.js

import React from 'react';
import { FaCode, FaPaintBrush, FaSearch } from 'react-icons/fa';

const RServices = () => {
    return (
        <section id="services" className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Our Services</h2>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105">
                        <FaCode size={48} className="text-blue-500 mx-auto" />
                        <h3 className="text-xl font-semibold mt-4">Web Development</h3>
                        <p className="mt-2 text-gray-600">Building responsive and high-quality websites.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105">
                        <FaPaintBrush size={48} className="text-blue-500 mx-auto" />
                        <h3 className="text-xl font-semibold mt-4">Graphic Design</h3>
                        <p className="mt-2 text-gray-600">Creating stunning visuals to enhance your brand.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105">
                        <FaSearch size={48} className="text-blue-500 mx-auto" />
                        <h3 className="text-xl font-semibold mt-4">SEO Services</h3>
                        <p className="mt-2 text-gray-600">Improving your website's visibility on search engines.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RServices;
