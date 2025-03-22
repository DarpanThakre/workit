// src/Home.js

import React from 'react';
import RNavbar from './components/RNavbar';
import RHeroSection from './components/RHeroSection';
import RServices from './components/RServices';
import RTestimonials from './components/RTestimonials';
import RContact from './components/RContact';
import RFooter from './components/RFooter';



const RHome = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
              <RNavbar/>
              <RHeroSection/>
               <RServices/>
                 <RTestimonials/> {/* Add Testimonials section here */}
                <RContact/>
                <RFooter/>
        </div>
    );
};

export default RHome;
