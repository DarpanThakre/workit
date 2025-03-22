import React from 'react';
import { Fade } from 'react-awesome-reveal';

const RTHero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
        <Fade duration={1000}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Empowering Your Digital Journey</h1>
        </Fade>
        <Fade duration={1200}>
          <p className="text-lg md:text-xl mb-8">
            We provide innovative marketing solutions to help your business grow and succeed online.
          </p>
        </Fade>
        <div className="flex space-x-4">
          <Fade duration={1400}>
            <a href="/RTservices" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">
              Our Services
            </a>
          </Fade>
          <Fade duration={1600}>
            <a href="/RTlogin" className="bg-transparent border border-white text-white py-2 px-4 rounded transition duration-300 hover:bg-white hover:text-blue-600">
              Login
            </a>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default RTHero;
