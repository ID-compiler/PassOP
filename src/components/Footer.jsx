import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white w-full">
      {/* Logo Area */}
      <div className="flex justify-center items-center py-4">
        <span className="text-xl font-semibold flex items-center gap-1">
          <span className="text-green-500">&lt;</span>
          <span>PASS</span>
          <span className="text-green-500">OP/&gt;</span>
        </span>
      </div>

      {/* Info */}
      <div className="px-4 pb-4 text-center md:flex md:items-center md:justify-center md:gap-10">
        <p className="text-sm">© 2025 Password Manager. All rights reserved.</p>
        <p className="text-xs mt-2 md:mt-0">Made with ❤️ by ID</p>
      </div>
    </div>
  );
};

export default Footer;
