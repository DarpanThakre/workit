import React, { useState } from 'react';

import RjSignupModal from './RjSignupModal';
import RjLoginModal from './RjLoginModal';

const RjHero = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <section className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-8">Welcome to Our Business</h1>
      <p className="text-xl mb-8 text-center">
        We offer the best services to help your business grow.
      </p>
      {/* Add Login and Signup buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => setIsLoginOpen(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
        <button
          onClick={() => setIsSignupOpen(true)}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        >
          Sign Up
        </button>
      </div>

      {/* Modals for Login and Signup */}
      {isLoginOpen && <RjLoginModal closeModal={() => setIsLoginOpen(false)} /> }
      {isSignupOpen && <RjSignupModal closeModal={() => setIsSignupOpen(false)} />}
    </section>
  );
};

export default RjHero;
