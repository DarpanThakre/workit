import React from 'react';
import RTHero from '../components/RTHero';
import RTServices from '../components/RTServices';
import RTHeader from '../components/RTHeader';


const RTHome = () => {
  return (
    <div>
      <RTHeader/>
     <RTHero/>
      <RTServices/>
    </div>
  );
};

export default RTHome;
