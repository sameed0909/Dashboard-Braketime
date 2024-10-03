import React from 'react';

const Navbar = () => {
  return (
    <div className='w-[84%] ml-auto bg-white p-2'>
      <form className="max-w-md ml-16">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative flex items-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path stroke="currentColor" strokeLinecap="round" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm border-gray-300 rounded-lg bg-gray-50 dark:text-white"
              placeholder="Search for news and Funds"
              required
            />
          </div>
          <div className="flex items-center justify-end ml-4">
            <div className="rounded-full bg-[#F0FFF7] p-2">
              <img src="/notification.png" alt="Notification Bell" className="h-6 w-6" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Navbar;
