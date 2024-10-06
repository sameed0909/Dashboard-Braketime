import React from 'react';

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full md:max-w-6xl flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden h-full md:h-auto">
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex justify-center md:justify-center mb-8">
            <img src="/logo.png" alt="Brake Time Logo" className="h-6 w-auto" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left mb-6">
            Welcome
          </h2>
          <p className="text-gray-400 text-center md:text-left mb-8 font-['Red_Hat_Display']">
            Your One-Stop Shop for Effortless Fleet Management
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Username/email</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-green-500"
                placeholder="Enter your email or username"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-green-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="text-right">
              <a href="#" className="text-[#13834B] hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-[#13834B] text-white rounded-full hover:bg-[#13834B] transition duration-300 shadow-xl"
            >
              Login
            </button>
          </form>
          <div className="text-center text-gray-500 text-sm mt-8">
            Powered by 360Xpertsolutions
          </div>
        </div>
        <div className="hidden md:flex w-full md:w-1/2 bg-gray-100 items-center justify-center p-6">
          <img
            src="/loginbt.png"
            alt="Fleet Management Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
