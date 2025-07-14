import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center w-full flex-wrap md:flex-nowrap">
      {/* Logo */}
      <span className="text-xl font-bold flex items-center gap-1">
        <span className="text-green-500">&lt;</span>
        <span>PASS</span>
        <span className="text-green-500">OP/&gt;</span>
      </span>

      {/* Links */}
      <ul className="flex flex-wrap justify-center md:justify-end items-center gap-5 mt-3 md:mt-0 w-full md:w-auto">
        <a className="cursor-pointer hover:text-green-400 hover:font-bold transition-colors duration-300">
          Home
        </a>
        <a className="cursor-pointer hover:text-green-400 hover:font-bold transition-colors duration-300">
          About
        </a>
        <a className="cursor-pointer hover:text-green-400 hover:font-bold transition-colors duration-300">
          Contact
        </a>
        <img
          src="icons/github-icon.png"
          alt="GitHub Icon"
          className="h-8 ring-white ring-1 rounded-2xl"
        />
      </ul>
    </div>
  );
};

export default Navbar;
