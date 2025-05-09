// import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-screen items-center justify-center bg-white text-gray-800 dark:bg-black dark:text-white transition-colors duration-300">
      <div className="relative flex items-center justify-center">
        {/* Outer Spinner */}
        <div className="
          w-24 h-24 border-4 border-transparent rounded-full animate-spin 
          border-t-blue-500 
          shadow-[0_0_10px_2px_rgba(0,0,0,0.1)]
          dark:shadow-[0_0_20px_4px_rgba(59,130,246,0.3)]
          dark:border-t-blue-500
        "></div>

        {/* Inner Spinner */}
        <div className="
          absolute w-16 h-16 border-4 border-transparent rounded-full 
          animate-spin-slow 
          border-t-pink-500 
          shadow-[0_0_6px_1px_rgba(0,0,0,0.05)]
          dark:shadow-[0_0_12px_2px_rgba(239,68,68,0.4)]
          dark:border-t-red-500
        "></div>
      </div>

      {/* Loading text */}
      <div className="
        text-lg font-semibold mt-4 
        animate-pulse 
        text-blue-600 
        dark:text-blue-300
      ">
        {/** Light mode gets bubbly text, dark stays chill */}
        <span className="block dark:hidden">Loading up the vibes ⚡</span>
        <span className="hidden dark:block">Loading<span className="animate-bounce">...</span></span>
      </div>
    </div>
  );
};

export default Loader;
