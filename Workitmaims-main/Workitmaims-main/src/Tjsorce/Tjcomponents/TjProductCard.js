import React from 'react';

function TjProductCard({ name, price, image }) {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 m-4 w-60">
      <img src={image} alt={name} className="w-full h-32 object-cover rounded-md" />
      <h2 className="text-xl font-semibold mt-2">{name}</h2>
      <p className="text-gray-700 mt-1">{price}</p>
      <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-lg hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
}

export default TjProductCard;
