import React from 'react';
import Shape from './Shape';

function ContentHome() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 lg:px-10">
        {/* Left Section */}
        <div className="col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-[#5330B440] flex flex-col items-center justify-center rounded-3xl px-5 lg:px-10 py-10 lg:py-14 m-5 lg:m-7">
              <div>
                <img src="logo.png" alt="work it logo" className="w-[766px] h-[243px]" />
              </div>
              <div className="text-center lg:text-left mt-5">
                <div className="font-semibold text-3xl lg:text-5xl leading-9 lg:leading-16">Design Website and Explore with us</div>
                <div className="font-normal text-base lg:text-2xl mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus nunc, ac rhoncus odio congue quis. Sed ac semper orci, eu porttitor lacus.
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
                <input
                  className="outline-none py-2 px-5 rounded-lg col-span-2 sm:col-span-2 w-full"
                  type="email"
                  placeholder="Enter your email address"
                />
                <button className="bg-black text-white py-2 px-5 rounded-2xl col-span-1 w-full hover:bg-blue-700">Sign up</button>
              </div>
            </div>
            <div className="flex justify-center items-center mt-5 lg:mt-0 p-5">
               <Shape/>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-2 m-5 lg:m-10">
          <div className="flex flex-col">
            <div className="font-poppins text-3xl lg:text-6xl font-semibold leading-tight lg:leading-[64px] tracking-[0.1em] text-center lg:text-left">
              One platform,<br />infinite possibilities
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
              <div className="border-t border-gray-500 pt-5">
                <div className="font-poppins text-2xl lg:text-3xl font-semibold tracking-[0.1em] text-left">
                  Build a website
                </div>
                <div className="font-poppins text-sm lg:text-xl font-light leading-tight mt-2 tracking-[0.05em]">
                  Design with a full suite of intuitive tools and powerful AI to create the site you want.
                </div>
              </div>
              <div className="border-t border-gray-500 pt-5">
                <div className="font-poppins text-2xl lg:text-3xl font-semibold tracking-[0.1em] text-left">
                  Manage your business
                </div>
                <div className="font-poppins text-sm lg:text-xl font-light leading-tight mt-2 tracking-[0.05em]">
                  Streamline your day-to-day with built-in business solutions, tailored to your needs.
                </div>
              </div>
              <div className="border-t border-gray-500 pt-5">
                <div className="font-poppins text-2xl lg:text-3xl font-semibold tracking-[0.1em] text-left">
                  Grow online
                </div>
                <div className="font-poppins text-sm lg:text-xl font-light leading-tight mt-2 tracking-[0.05em]">
                  Expand your reach and monetize your website with integrated tools built for your success.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentHome;
