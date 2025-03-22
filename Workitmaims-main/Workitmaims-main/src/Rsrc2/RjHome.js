import React from 'react';
import RjHeader from './components/RjHeader';
import RjHero from './components/RjHero';
import RjServices from './components/RjServices';
import RjContact from './components/RjContact';
import RjFooter from './components/RjFooter';


function RjHome() {
  return (
    <div>
      <RjHeader/>
       <RjHero/>
       <RjServices/>
       <RjContact/>
        <RjFooter/>
    </div>
  );
}

export default RjHome;
