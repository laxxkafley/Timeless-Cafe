'use client';
import Link from "next/link";
import React, { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu on and off when the hamburger is clicked
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Navigation Links */}
            {/* These links will be always visible on large screens and toggleable on small screens */}
            
            <div className={`${isOpen ? 'flex flex-col space-y-4' : 'hidden'} lg:space-x-4 lg:flex lg:flex-row`}>
              <Link href="/" className="text-gray-700 hover:text-purple-800">
                Home
              </Link>
              <Link href="/musicstore" className="text-gray-700 hover:text-purple-800">
                Coffee Brew
              </Link>
              <Link href="/Poems" className="text-gray-700 hover:text-purple-800">
                Poetry
              </Link>
              <Link href="/Register" className="text-gray-700 hover:text-purple-800">
                Account
              </Link>
            </div>

            {/* Hamburger Button (only visible on small screens) */}
            <button 
              onClick={handleClick} 
              className="lg:hidden bg-blue-50 p-4"
            >
              <span className="bg-purple-500 block h-0.5 w-6 rounded-sm"></span>
              <span className="bg-purple-500 block h-0.5 w-6 rounded-sm my-0.5"></span>
              <span className="bg-purple-500 block h-0.5 w-6 rounded-sm"></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
