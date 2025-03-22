import React from 'react'

const Login = () => {
  return (
    <div className=" mt-16 flex min-h-screen justify-center items-center bg-gray-50">
    <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:h-[80vh] lg:w-3/5 bg-white p-10 rounded-3xl shadow-2xl">
      {/* Image section for larger screens */}
      <div className="hidden lg:flex w-2/4 justify-center items-center rounded-l-3xl h-full">
        <img
          src="human.png"
          alt="Login illustration"
          className="w-[618px] h-[343px] object-contain"
        />
      </div>
  
      {/* Sign-up form */}
      <div className="w-full lg:w-2/4 flex flex-col justify-center items-center  p-2 h-full">
        <h2 className="text-4xl font-bold mb-6">Login</h2>
        <form className="w-full max-w-md">
          {/* Name Input */}
          <div className="flex items-center mb-4">
            <i className="fas fa-user mr-2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Password Input */}
          <div className="flex items-center mb-4">
            <i className="fas fa-lock mr-2 text-gray-400"></i>
            <input
              type="password"
              placeholder="Password"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Remember me & Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="/" className="text-blue-500">Forgot password?</a>
          </div>
          {/* Login Button */}
          <button className=" w-full bg-blue-500 text-white p-6 py-3 px-3 rounded-lg hover:bg-blue-600 transition duration-200">
            Log in
          </button>
        </form>
  
        {/* Other Login Options */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <a href="/Signup" className="text-blue-500">Create an account</a>
          </p>
          <div className="flex justify-center items-center mt-4">
            <p className="text-sm">Or login with</p>
            <div className="flex space-x-2 ml-4">
              <button className="w-10 h-10 bg-blue-700 text-white rounded-full">F</button>
              <button className="w-10 h-10 bg-blue-400 text-white rounded-full">T</button>
              <button className="w-10 h-10 bg-red-500 text-white rounded-full">G</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  


  );
}

export default Login