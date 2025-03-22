import React from 'react';

function TjFeaturedProducts({ products }) {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
            <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-xl font-bold text-blue-500">${product.price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TjFeaturedProducts;
