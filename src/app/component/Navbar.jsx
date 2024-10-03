import React from 'react';

const Navbar = () => {
  return (
    <div className='w-[84%] ml-auto bg-white p-4 '>
      <form className="max-w-md flex items-center justify-between w-full">
        {/* Search Bar */}
        <div className="relative w-full">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
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

        {/* Login section aligned to the right */}
        <div className="flex justify-end gap-4 ml-4">
          <div className="rounded-full bg-[#F0FFF7] p-4">
            <img src="/notification.png" alt="Notification Bell" className="h-6 w-8" />
          </div>
          <div className="flex items-center">
            <img src="/Ellipse.png" alt="User Avatar" className="h-14 w-12 rounded-full" />
            <h1 className="text-sm font-semibold ml-2">John</h1>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Navbar;
