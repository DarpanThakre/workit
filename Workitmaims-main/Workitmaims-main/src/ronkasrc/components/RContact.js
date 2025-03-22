// src/components/Contact.js

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RContact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setSubmitted(true);
        // You can also send the data to a server here
    };

    return (
        <section id="contact" className="py-20 bg-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h2>
                {submitted && (
                    <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md text-center">
                        Thank you! Your message has been sent.
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-10 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            {...register('name', { required: 'Name is required' })}
                            className={`mt-2 p-2 w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
                            placeholder="Your Name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { 
                                required: 'Email is required', 
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                            className={`mt-2 p-2 w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
                            placeholder="Your Email"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700">Message</label>
                        <textarea
                            id="message"
                            {...register('message', { required: 'Message is required' })}
                            className={`mt-2 p-2 w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
                            rows="4"
                            placeholder="Your Message"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default RContact;
