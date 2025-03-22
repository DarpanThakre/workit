// src/pages/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';

const RTNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">Page Not Found</p>
      <Link to="/RT" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Go Home
      </Link>
    </div>
  );
};

export default RTNotFound;
