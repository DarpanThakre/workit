import React from 'react';

const RjContact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Name</label>
            <input className="w-full p-2 rounded" type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input className="w-full p-2 rounded" type="email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Message</label>
            <textarea className="w-full p-2 rounded" rows="4"></textarea>
          </div>
          <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default RjContact;
