import React from 'react';

function TjCategories({ categories }) {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 w-full sm:w-1/2 md:w-1/4 text-center shadow-md">
            <h3 className="text-lg font-semibold">{category}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TjCategories;
