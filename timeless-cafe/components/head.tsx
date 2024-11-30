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
import { getSession } from "@/utils/loginUser";
import logout from "./logout"

import Link from "next/link";

import { useEffect, useState } from "react"
import { redirect } from "next/dist/server/api-utils";
import { revalidatePath } from "next/cache";

export default function Nav() {
  const[user, setUser]=useState<{name: String} | null>()

  
  useEffect(() => {
    const getUser = async () => {
      const user1 = await getSession(); // Fetch session
      console.log("Fetched user from session:", user1); // Log fetched user data
      setUser(user1);
      
       // Update the user state
       
    };
    getUser();
    
  }, []);
 
  const handleLogout = () => {
    setUser(null); 
   // Clear user state
};

  console.log("Current user state:", user); // Log user state
  

  const [isOpen, setIsOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <header className="bg-blue-200 text-black shadow-md">
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
          <div>
          {
  user ? (
    <>
      Hello: {user.name} |{" "}
      <button
      className="ml-2 px-3 py-2 text-sm font-medium text-black bg-red-500 rounded-md hover:bg-red-600"
      onClick={() => {
        handleLogout();
        setRefresh(!refresh); // Trigger a re-render by toggling state
      }}
    >
      Logout
    </button>
    </>
  ) : (
    <>
      <Link className="btn-outline" href="/login">
      Login
      </Link>
    
      <Link className="btn-primary" href="Register">
        Register
      </Link>
    </>
  )
}
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
            <Link href="/" className="text-black hover:text-purple-300">
              Home
            </Link>
            <Link href="/Coffee" className="text-black hover:text-purple-300">
              Coffee Brew
            </Link> 
            <Link href="/Poems" className="text-black hover:text-purple-300">
              Poetry
            </Link>
            <Link href="/Register" className="text-black hover:text-purple-300">
              Account
            </Link>
           <div className="text-purple-900">

           

           </div>

          </div>
        )}
      </nav>
    </header>
  );
}
