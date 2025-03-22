import React from 'react';

function TjFooter() {
  return (
    <div className="bg-gray-800 text-white py-6 text-center">
      <p>&copy; 2024 Your Shopping Website. All rights reserved.</p>
      <div className="mt-4">
        <a href="/privacy" className="mx-2 text-blue-300 hover:underline">Privacy Policy</a>
        <a href="/terms" className="mx-2 text-blue-300 hover:underline">Terms of Service</a>
      </div>
    </div>
  );
}

export default TjFooter;
