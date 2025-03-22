import React, { useState } from 'react';

function TjNewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <section className="container mx-auto py-10 text-center bg-gray-200">
      <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
      <p className="mb-4">Subscribe to our newsletter to receive the latest news and exclusive offers.</p>
      <form onSubmit={handleSignup} className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default TjNewsletterSignup;
