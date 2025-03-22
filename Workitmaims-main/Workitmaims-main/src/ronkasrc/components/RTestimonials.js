// src/components/Testimonials.js

import React from 'react';

const testimonials = [
    { id: 1, text: "This service was amazing! Highly recommend.", author: "Jane Doe" },
    { id: 2, text: "I couldn't be happier with the results.", author: "John Smith" },
    { id: 3, text: "Professional and efficient. Will use again.", author: "Alice Johnson" }
];

const RTestimonials = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Testimonials</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="bg-white shadow-lg rounded-lg p-6">
                            <p className="text-gray-600 italic">"{testimonial.text}"</p>
                            <p className="mt-4 font-semibold text-gray-800">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RTestimonials;
