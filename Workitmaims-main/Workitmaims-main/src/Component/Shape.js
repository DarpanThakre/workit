import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import Loader from './Loader';

export default function Shape() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex justify-center items-center mt-5 lg:mt-0 p-5">
      <div className="w-[738px] h-[723px] overflow-hidden rounded-xl relative">
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <Loader />
          </div>
        )}
        <Spline
          scene="https://prod.spline.design/09RowId84bx-N8lr/scene.splinecode"
          onLoad={() => setIsLoading(false)} // Hide loader when the scene is loaded
        />
      </div>
    </div>
  );
}
