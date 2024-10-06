import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // On component mount, check for saved theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center bg-white dark:bg-gray-800 p-4 overflow-hidden">
  {/* Search Bar */}
  <form className="flex items-center justify-center w-full md:w-[30%] mb-2 md:mb-0">
    <div className="relative w-full">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
        className="block w-full p-4 pl-10 text-sm border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
        placeholder="Search for news and Funds"
        required
      />
    </div>
  </form>

  {/* Login section with toggle button */}
  <div className="flex items-center gap-4 w-full md:w-[30%] justify-end">
    {/* Toggle Button */}
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only" onChange={toggleTheme} checked={theme === 'dark'} />
      <div className="w-12 h-6 bg-gray-200 rounded-full shadow-inner dark:bg-gray-600 transition-all duration-300"></div>
      <div
        className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-full' : ''
        }`}
      ></div>
    </label>

    {/* Notification Bell */}
    <div className="rounded-full bg-[#F0FFF7] p-2 dark:bg-gray-700">
      <img src="/notification.png" alt="Notification Bell" className="h-6 w-6" />
    </div>

    {/* User Avatar */}
    <div className="flex items-center">
      <img src="/Ellipse.png" alt="User Avatar" className="h-12 w-12 rounded-full" />
      <h1 className="text-sm font-bold ml-2 dark:text-white">Rayford Chenail</h1>
    </div>
  </div>
</div>
);
};

export default Navbar;
