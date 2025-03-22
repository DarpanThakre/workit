import React from 'react';

export const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-10 bg-gray-100 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          How to Create a Website for Free
        </h1>
        <p className="subtitle text-lg sm:text-xl mb-8 text-gray-700">
          Follow these 6 simple steps to create a website today
        </p>
        <ul className="list-none space-y-4 text-left">
          {Array.from({ length: 6 }, (_, index) => (
            <li
              key={index}
              className="text-lg sm:text-xl pl-96 font-semibold"
            >
              <span className="w-8">{index + 1}.</span>
              <span className="ml-2 font-normal">
                {getStepDescription(index)}
              </span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            // Handle the click event, like navigating to another page
            console.log('Learn More clicked');
          }}
          className="mt-6 inline-block text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors bg-transparent border-none cursor-pointer"
        >
          Learn More →
        </button>
      </div>

      <footer className="bg-gray-800 text-white text-center py-2 mt-0">
        <p>© 2024 Your Business. All Rights Reserved.</p>
      </footer>
    </>
  );
};

const getStepDescription = (index) => {
  switch (index) {
    case 0:
      return 'Choose a platform. Sign up for a secure, reliable, and powerful website builder.';
    case 1:
      return 'Start creating. Choose from 900+ fully-functional templates or use the AI website builder.';
    case 2:
      return 'Customize your website. Use the drag-and-drop editor and tailor your site to fit your brand.';
    case 3:
      return 'Optimize for search engines. Increase your site’s visibility with a suite of built-in SEO tools.';
    case 4:
      return 'Publish your website. Register and connect a custom domain name and go live.';
    case 5:
      return 'Promote and drive traffic. Use built-in marketing tools to grow and expand your reach.';
    default:
      return '';
  }
};
