// src/App.js

import React from 'react';
import RTHeader from './components/RTHeader';
import RTFooter from './components/RTFooter';
import RTServices from './components/RTServices';

function RTOHome() {
  return (
    <div className="mt-24">
      <RTHeader />
      <RTServices/>
      <RTFooter />
    </div>
  );
}

export default RTOHome;
