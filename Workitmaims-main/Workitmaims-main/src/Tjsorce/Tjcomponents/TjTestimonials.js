import React from 'react';

function TjTestimonials() {
  const testimonials = [
    { name: "Alice", review: "Amazing products and great service!" },
    { name: "Bob", review: "I love the variety and quality here." },
    { name: "Charlie", review: "Fast delivery and top-notch support." },
  ];

  return (
    <section className="container mx-auto py-10 bg-blue-50">
      <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
      <div className="flex flex-wrap gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md w-full md:w-1/3">
            <p className="text-gray-700 italic">"{testimonial.review}"</p>
            <p className="text-gray-900 font-semibold mt-4">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TjTestimonials;
