import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-14 text-center">
        <p className="text-3xl pb-4 font-light">Crafting Clean Frontend Code with Purpose</p>
        <p className="text-md">
          &copy; {currentYear} Dian Tanjung. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
