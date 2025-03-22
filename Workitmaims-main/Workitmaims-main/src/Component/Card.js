import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router

const data = [
  {
    imgSrc: "bllog.png",
    description: "Sell online and manage your business with powerful eCommerce solutions.",
    link: "/learn-more-bllog", // Add appropriate route for each item
    heading :"Blog",
  },
  {
    imgSrc: "ecomerse.png",
    description: "Sell online and manage your business with powerful eCommerce solutions.",
    link: "/learn-more-ecomerse",
    heading :"Ecomerse",
  },
  {
    imgSrc: "headphone.png",
    description: "Sell online and manage your business with powerful eCommerce solutions.",
    link: "/learn-more-headphone",
    heading :"Domain and hosting",
  },
  {
    imgSrc: "shampho.png",
    description: "Sell online and manage your business with powerful eCommerce solutions.",
    link: "/learn-more-shampho",
    heading :"Branding tools",
  },
];

export default function Card() {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center relative w-full sm:w-[500px] md:w-[600px] lg:w-[709px] h-auto p-5 m-4 rounded-3xl overflow-hidden shadow-2xl bg-white"
        >
          {/* Landscape Section */}
          <div className="relative w-full h-64 md:h-72 lg:h-[500px] overflow-hidden rounded-lg">
            {/* Image */}
            <img
              src={item.imgSrc}
              alt={item.description}
              className="w-full h-full object-cover"
            />
          </div>

            <div className='  p-2 m-2 font-semibold  text-3xl'>
                {item.heading}
            </div>

          {/* Content Section */}
          <div className="flex flex-col items-center justify-center w-full h-auto p-4 bg-gray-100 rounded-lg">
            {/* Description */}
            <p className="mt-3 text-center text-gray-800 text-sm font-semibold rounded-lg ">
              {item.description}
            </p>

            {/* Learn More Link */}
            <Link 
              to={item.link} 
              className="mt-3 text-black hover:text-blue-700 hover:font-semibold hover:underline text-sm flex items-center"
            >
              Learn More
              <svg 
                className="w-4 h-4 ml-2" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
