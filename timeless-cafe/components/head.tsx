// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className=" bg-gray-100">
//       {/* Navbar */}
//       <nav className="bg-white shadow-md">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex justify-between items-center py-4">
//             <div className="text-2xl font-bold text-purple-800">
//               My Website
//             </div>
//             <div className="flex space-x-4">
//               <Link href="/" className="text-gray-700 hover:text-purple-800">
//                 Home
//               </Link>
//               <Link href="/musicstore" className="text-gray-700 hover:text-purple-800">
//                 musicstore
//               </Link>
//               <Link href="/fetchClient" className="text-gray-700 hover:text-purple-800">
//                 fetchClient
//               </Link>
//               <Link href="/api/vercel" className="text-gray-700 hover:text-purple-800">
//                 Api
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="max-w-6xl mx-auto py-10 px-4">
//         <h1 className="text-4xl font-extrabold text-purple-800 mb-6">
//           Welcome to My Website
//         </h1>
//         <p className="text-lg text-gray-600 mb-4">
//           Discover our amazing products and learn more about what we offer. Click on the links above to explore!
//         </p>
//         <Link 
//           href="/product" 
//           className="bg-purple-800 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300"
//         >
//           Browse Products
//         </Link>
//       </main>
//     </div>
//   );
// }

import Link from "next/link";

export default function Home() {
  return (
    <div className="  bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-700 hover:text-purple-800">
                Home
              </Link>
              <Link href="/musicstore" className="text-gray-700 hover:text-purple-800">
                Coffe Brew
              </Link>
              <Link href="/fetchClient" className="text-gray-700 hover:text-purple-800">
                Poetry
              </Link>
              <Link href="/Register" className="text-gray-700 hover:text-purple-800">
                Account
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto  px-4">
        {/* <h1 className="text-4xl font-extrabold text-purple-800 mb-6">
          Welcome to My Website
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Discover our amazing products and learn more about what we offer. Click on the links above to explore!
        </p>
        <Link 
          href="/musicstore" 
          className="bg-purple-800 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300"
        >
          Browse Products
        </Link> */}
      </main>
    </div>
  );
}

