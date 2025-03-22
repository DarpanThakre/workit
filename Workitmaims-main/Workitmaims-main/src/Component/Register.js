import React from 'react';

const Register = () => {
  return (
    <div className=" mt-16 flex min-h-screen justify-center items-center bg-gray-50">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:h-[80vh] lg:w-3/5 bg-white p-12 rounded-3xl shadow-2xl">

        {/* Left Section (Form) */}
        <div className="w-full lg:w-2/4 flex flex-col justify-center items-start space-y-6">
          <h2 className="text-4xl font-bold">Sign up</h2>

          <form className="w-full max-w-md space-y-4">
            {/* Name Input */}
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14c2.667 0 8 1.333 8 4v1H4v-1c0-2.667 5.333-4 8-4zM12 12c-2.667 0-8-1.333-8-4V7c0-2.667 2.333-4 8-4s8 1.333 8 4v1c0 2.667-5.333 4-8 4z"
                />
              </svg>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full py-3 pl-10 pr-4 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8.25L12 13.25L21 8.25M3 12.75V17.25C3 17.6642 3.33579 18 3.75 18H20.25C20.6642 18 21 17.6642 21 17.25V12.75M3 8.25V12.75"
                />
              </svg>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full py-3 pl-10 pr-4 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 8.25V6.75C16.5 5.50736 15.4926 4.5 14.25 4.5H9.75C8.50736 4.5 7.5 5.50736 7.5 6.75V8.25M7.5 8.25V18C7.5 19.2426 8.50736 20.25 9.75 20.25H14.25C15.4926 20.25 16.5 19.2426 16.5 18V8.25M7.5 8.25H16.5"
                />
              </svg>
              <input
                type="password"
                placeholder="Password"
                className="w-full py-3 pl-10 pr-4 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 8.25V6.75C16.5 5.50736 15.4926 4.5 14.25 4.5H9.75C8.50736 4.5 7.5 5.50736 7.5 6.75V8.25M7.5 8.25V18C7.5 19.2426 8.50736 20.25 9.75 20.25H14.25C15.4926 20.25 16.5 19.2426 16.5 18V8.25M7.5 8.25H16.5"
                />
              </svg>
              <input
                type="password"
                placeholder="Repeat your password"
                className="w-full py-3 pl-10 pr-4 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Terms and conditions */}
            <div className="flex items-start space-x-2">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm text-gray-600">
                I agree to all statements in{' '}
                <a href="/" className="text-blue-500">Terms of service</a>
              </p>
            </div>

            {/* Register Button */}
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200">
              Register
            </button>
          </form>

          {/* Already a member */}
        
        </div>

        {/* Right Section (Image) */}
        <div className="hidden flex-col lg:flex w-2/4 justify-center items-center">
          <img
            src="registe.png"  // Replace with your illustration path
            alt="Sign up illustration"
            className="w-[618px] h-[343px] object-contain"
          />
          <p className="text-sm text-center">
            <a href="/login" className="text-blue-500">I am already a member</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;
