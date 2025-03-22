import React from 'react';

const RjHeader = () => {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">MyBusiness</div>
        <ul className="flex space-x-4">
          <li><a href="#Rjhome" className="hover:text-gray-400">Home</a></li>
          <li><a href="#Rjservices" className="hover:text-gray-400">Services</a></li>
          <li><a href="#Rjcontact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default RjHeader;
