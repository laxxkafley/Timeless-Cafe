// 'use client';
// import Link from "next/link";
// import React, { useState } from 'react';

// export default function Nav() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Function to toggle the menu on and off when the hamburger is clicked
//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="bg-gray-100">
//       {/* Navbar */}
//       <nav className="bg-white shadow-md">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex justify-between items-center py-4">
//             {/* Navigation Links */}
//             {/* These links will be always visible on large screens and toggleable on small screens */}
            
//             <div className={`${isOpen ? 'flex flex-col space-y-4' : 'hidden'} lg:space-x-4 lg:flex lg:flex-row`}>
//               <Link href="/" className="text-gray-700 hover:text-purple-800">
//                 Home
//               </Link>
//               <Link href="/Coffee" className="text-gray-700 hover:text-purple-800">
//                 Coffee Brew
//               </Link>
//               <Link href="/Poems" className="text-gray-700 hover:text-purple-800">
//                 Poetry
//               </Link>
//               <Link href="/Register" className="text-gray-700 hover:text-purple-800">
//                 Account
//               </Link>
//             </div>

//             {/* Hamburger Button (only visible on small screens) */}
//             <button 
//               onClick={handleClick} 
//               className="lg:hidden bg-blue-50 p-4"
//             >
//               <span className="bg-purple-500 block h-0.5 w-6 rounded-sm"></span>
//               <span className="bg-purple-500 block h-0.5 w-6 rounded-sm my-0.5"></span>
//               <span className="bg-purple-500 block h-0.5 w-6 rounded-sm"></span>
//             </button>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }


'use client';
import Link from "next/link";
import React, { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-200 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <span className="text-2xl font-bold hover:text-purple-300 transition cursor-pointer">
              Timeless Café
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link href="/" className="hover:text-purple-300">
              Home
            </Link>
            <Link href="/Coffee" className="hover:text-purple-300">
              Coffee Brew
            </Link>
            <Link href="/Poems" className="hover:text-purple-300">
              Poetry
            </Link>
            <Link href="/Register" className="hover:text-purple-300">
              Account
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={handleClick} 
            className="lg:hidden focus:outline-none"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden flex flex-col space-y-4 bg-purple-700 p-4 rounded-lg">
            <Link href="/" className="text-white hover:text-purple-300">
              Home
            </Link>
            <Link href="/Coffee" className="text-white hover:text-purple-300">
              Coffee Brew
            </Link>
            <Link href="/Poems" className="text-white hover:text-purple-300">
              Poetry
            </Link>
            <Link href="/Register" className="text-white hover:text-purple-300">
              Account
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
