'use client';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#03063e] backdrop-blur-sm shadow-sm w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left side: Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.svg" // Replace with the correct logo path
            alt="Solutions CTC Logo"
            width={150}
            height={150}
          />
        </div>

        {/* Right side: Navigation Links for larger devices */}
        <div className="hidden md:flex space-x-8 text-lg text-white">
          {['Home', 'FAQ', 'Contact', "Team"].map((link, index) => (
            <a
              key={index}
              href={link === "Team" ? "/team" : `#${link.toLowerCase().replace(/[']/g, '')}`}
              className="relative group"
            >
              <span className="hover:text-orange-500 transition duration-300">
                {link}
              </span>
              <span className="block absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Burger Menu Icon for small devices */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-8 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu for small devices */}
      {isOpen && (
        <div className="md:hidden bg-white/60 backdrop-blur-sm shadow-md px-6 py-4">
          <div className="flex flex-col space-y-4 text-lg text-gray-700">
            {['À propos', 'FAQ', 'Contact', "L'équipe"].map((link, index) => (
              <a
                key={index}
                href={link === "L'équipe" ? "/team" : `#${link.toLowerCase().replace(/[']/g, '')}`}
                className="hover:text-orange-500 transition duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
