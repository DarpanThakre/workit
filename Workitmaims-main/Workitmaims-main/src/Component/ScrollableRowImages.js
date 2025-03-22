import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Ensure to import Link if using React Router

const ScrollableRowImages = () => {
  const scrollContainerRef = useRef(null);

  return (
    <div className=" py-10">
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <h1 className="text-4xl sm:text-7xl font-extrabold mb-4 sm:mb-10 leading-tight ">
          Website templates that set you
          <p>up for success.</p>
        </h1>
        <p className="mb-6 sm:mb-8 text-2xl sm:text-3xl max-w-3xl">
          Get a headstart on your journey with 900+ free, customizable website templates
          <span className="block mb-4 sm:mb-6 text-2xl sm:text-3xl">
            Strategically researched and tailored for every industry — or start from a blank canvas on our website builder.
          </span>
        </p>
        <Link to="/signup">
          <button className="rounded-lg bg-black text-white text-2xl font-semibold py-4 px-8 hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Sign up
          </button>
        </Link>
      </div>

      {/* Scrollable image row */}
      <div
        className="pt-10 flex space-x-6 overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-500"
        ref={scrollContainerRef}
      >
        {["Rectangle 6.png", "rectangle 7.png", "image3.png", "image4.png", "image5.png"].map((src, index) => (
          <div key={index} className="flex-none w-[600px] h-[380px]">
            <img
              src={src}
              alt={`Scenic landscape ${index + 1}`} // Descriptive alt text
              className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Visible scrollbar styling */}
      <style jsx>{`
        div::-webkit-scrollbar {
          height: 10px;
        }
        div::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        div::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background-color: #555;
        }
      `}</style>
    </div>
  );
};

export default ScrollableRowImages;
