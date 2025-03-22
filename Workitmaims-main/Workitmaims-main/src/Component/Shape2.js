import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import Loader from './Loader';

export default function Shape2() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
      {isLoading && (
          <div className=" w-96 h-96 m-80 p-29 mr-40 justify-center items-center">
            <Loader />
          </div>
        )}
      <Spline
        scene="https://prod.spline.design/VcZcu6TPzklz76Ni/scene.splinecode"
        onLoad={() => setIsLoading(false)} // This callback hides the loader once the scene loads
      />
    </main>
  );
}
