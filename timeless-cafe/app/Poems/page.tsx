// // // // // import prisma from "@/utils/db";
// // // // import { revalidatePath } from "next/cache";
// // // // import PoemModel from "@/components/poem"; 
// // // // import prisma from "@/utils/db";// Import PoemModel component
// // // // import "@/global.css"

// // // // export default async function PoemsPage() {
// // // //   const poems = await prisma.poem.findMany(); // Fetch all poems from the database

// // // //   // Function to delete poem
// // // //   const deletePoem = async (id: string) => {
// // // //     "use server"; // Marks the function as a server-side function
// // // //     await prisma.poem.delete({ where: { id } });
// // // //     revalidatePath("/"); // Refresh the page after deletion
// // // //   };

// // // //   return (
// // // //     <div className="bg-gray-100">
// // // //       <h1 className="text-4xl font-extrabold text-center text-blue-300 mb-8 mt-4">
// // // //         Poems Collection
// // // //       </h1>
// // // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // //         {poems.map((poem) => (
// // // //           <PoemModel
// // // //             key={poem.id}
// // // //             id={poem.id}
// // // //             title={poem.title}
// // // //             author={poem.author}
// // // //             content={poem.content}
// // // //             deletePoem={deletePoem} // Pass deletePoem function to PoemModel
// // // //           />
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }



// // // import { getSession } from "@/utils/loginUser"; // Assuming you have this function to get session details
// // // import { revalidatePath } from "next/cache";
// // // import PoemModel from "@/components/poem"; 
// // // import prisma from "@/utils/db";// Import PoemModel component
// // // import "@/global.css"

// // // export default async function PoemsPage() {
// // //   const poems = await prisma.poem.findMany(); // Fetch all poems from the database

// // //   // Get session data to check if the user is an admin
// // //   const session = await getSession(); // Fetch session (you need this function to return the current user's session)
// // //   const isAdmin = session?.role === "admin"; // Check if the user is an admin

// // //   // Function to delete poem
// // //   const deletePoem = async (id: string) => {
// // //     "use server"; // Marks the function as a server-side function
// // //     await prisma.poem.delete({ where: { id } });
// // //     revalidatePath("/"); // Refresh the page after deletion
// // //   };

// // //   return (
// // //     <div className="bg-gray-100">
// // //       <h1 className="text-4xl font-extrabold text-center text-blue-300 mb-8 mt-4">
// // //         Poems Collection
// // //       </h1>
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // //         {poems.map((poem) => (
// // //           <PoemModel
// // //             key={poem.id}
// // //             id={poem.id}
// // //             title={poem.title}
// // //             author={poem.author}
// // //             content={poem.content}
// // //             deletePoem={deletePoem} // Pass deletePoem function to PoemModel
// // //             isAdmin={isAdmin} // Pass isAdmin to PoemModel
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // // import Link from "next/link";
// // // import { getSession } from "@/utils/loginUser"; // Adjust the import path based on your project structure
// // // import { revalidatePath } from "next/cache";
// // // import PoemModel from "@/components/poem"; 
// // // import prisma from "@/utils/db"; // Import PoemModel component
// // // import "@/global.css";

// // // export default async function PoemsPage() {
// // //   const poems = await prisma.poem.findMany(); // Fetch all poems from the database

// // //   // Get session data to check if the user is an admin
// // //   const session = await getSession(); // Fetch session (you need this function to return the current user's session)
// // //   const isAdmin = session?.role === "admin"; // Check if the user is an admin

// // //   // Function to delete poem
// // //   const deletePoem = async (id: string) => {
// // //     "use server"; // Marks the function as a server-side function
// // //     await prisma.poem.delete({ where: { id } });
// // //     revalidatePath("/"); // Refresh the page after deletion
// // //   };

// // //   return (
// // //     <div className="bg-gray-100">
// // //       <h1 className="text-4xl font-extrabold text-center text-blue-300 mb-8 mt-4">
// // //         Poems Collection
// // //       </h1>
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

// // //         {poems.map((poem) => (
// // //           <PoemModel
// // //             key={poem.id}
// // //             id={poem.id}
// // //             title={poem.title}
// // //             author={poem.author}
// // //             content={poem.content}
// // //             deletePoem={deletePoem} // Pass deletePoem function to PoemModel
// // //             isAdmin={isAdmin} // Pass isAdmin to PoemModel
// // //           />
          
// // //         ))}
// // //         <Link href={`/poems/${poem.id}`}>
// // //                 <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
// // //                   View Details
// // //                 </button>
// // //               </Link>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import { getSession } from "@/utils/loginUser"; // Adjust the import path based on your project structure
// // import { revalidatePath } from "next/cache";
// // import Link from "next/link";
// // import prisma from "@/utils/db";
// // import "@/global.css";

// // export default async function PoemsPage() {
// //   const poems = await prisma.poem.findMany(); // Fetch all poems from the database

// //   const session = await getSession(); // Fetch session (you need this function to return the current user's session)
// //   const isAdmin = session?.role === "admin"; // Check if the user is an admin

// //   const deletePoem = async (id: string) => {
// //     "use server"; // Marks the function as a server-side function
// //     await prisma.poem.delete({ where: { id } });
// //     revalidatePath("/poems"); // Refresh the page after deletion
// //   };

// //   return (
// //     <div className="bg-gray-100">
// //       <h1 className="text-4xl font-extrabold text-center text-blue-300 mb-8 mt-4">
// //         Poems Collection
// //       </h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //         {poems.map((poem) => (
// //           <div
// //             key={poem.id}
// //             className="p-4 bg-white rounded-lg shadow-md flex flex-col"
// //           >
// //             <h2 className="text-xl font-semibold mb-2">{poem.title}</h2>
// //             <p className="text-sm text-gray-600 mb-2">By {poem.author}</p>
// //             <p className="text-sm text-gray-800 mb-4 line-clamp-3">
// //               {poem.content.length > 100
// //                 ? `${poem.content.substring(0, 100)}...`
// //                 : poem.content}
// //             </p>
// //             <div className="mt-auto">
// //               {isAdmin && (
// //                 <button
// //                   onClick={() => deletePoem(poem.id)}
// //                   className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mb-2"
// //                 >
// //                   Delete
// //                 </button>
// //               )}
// //               <Link href={`/paramm/${poem.id}`}>
// //                 <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
// //                   View Details
// //                 </button>
// //               </Link>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



// import { getSession } from "@/utils/loginUser"; // Adjust the import path based on your project structure
// import { revalidatePath } from "next/cache";
// import PoemModel from "@/components/poem"; 
// import prisma from "@/utils/db"; // Import PoemModel component
// import "@/global.css";

// export default async function PoemsPage() {
//   const poems = await prisma.poem.findMany(); // Fetch all poems from the database

//   // Get session data to check if the user is an admin
//   const session = await getSession(); // Fetch session (you need this function to return the current user's session)
//   const isAdmin = session?.role === "admin"; // Check if the user is an admin

//   // Function to delete poem
//   const deletePoem = async (id: string) => {
//     "use server"; // Marks the function as a server-side function
//     await prisma.poem.delete({ where: { id } });
//     revalidatePath("/"); // Refresh the page after deletion
//   };

//   return (
//     <div className="bg-gray-100">
//       <h1 className="text-4xl font-extrabold text-center text-blue-300 mb-8 mt-4">
//         Poems Collection
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        
//         {poems.map((poem) => (
//           <PoemModel
//             key={poem.id}
//             id={poem.id}
//             title={poem.title}
//             author={poem.author}
//             content={poem.content}
//             deletePoem={deletePoem} // Pass deletePoem function to PoemModel
//             isAdmin={isAdmin} // Pass isAdmin to PoemModel
//           />
//         ))}
//       </div>
//       <div>

//       </div>
//     </div>
//   );
// }

// import { getSession } from "@/utils/loginUser"; // Adjust the import path based on your project structure
// import { revalidatePath } from "next/cache";
// import PoemModel from "@/components/poem";
// import prisma from "@/utils/db";
// import Link from "next/link";
// import "@/global.css";

// export default async function PoemsPage() {
//   const poems = await prisma.poem.findMany(); // Fetch all poems from the database

//   // Get session data to check if the user is an admin
//   const session = await getSession(); // Fetch session (you need this function to return the current user's session)
//   const isAdmin = session?.role === "admin"; // Check if the user is an admin

//   // Function to delete poem
//   const deletePoem = async (id: string) => {
//     "use server"; // Marks the function as a server-side function
//     await prisma.poem.delete({ where: { id } });
//     revalidatePath("/"); // Refresh the page after deletion
//   };

//   return (
//     <div className="bg-gray-100">
//       <h1 className="text-4xl font-extrabold text-center text-blue-300 mb-8 mt-4">
//         Poems Collection
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {poems.map((poem) => (
//           <div
//             key={poem.id}
//             className="p-4 bg-white rounded-lg shadow-md flex flex-col"
//           >
//             <h2 className="text-xl font-semibold mb-2">{poem.title}</h2>
//             <p className="text-sm text-gray-600 mb-2">By {poem.author}</p>
//             <p className="text-sm text-gray-800 mb-4 line-clamp-3">
//               {poem.content.length > 100
//                 ? `${poem.content.substring(0, 100)}...`
//                 : poem.content}
//             </p>
//             <div className="mt-auto">
          
//               {/* Add View Details button */}
//               <Link href={`/paramm/${poem.id}`}>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//                   View Details
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







import { getSession } from "@/utils/loginUser";

import { revalidatePath } from "next/cache";
import PoemModel from "@/components/poem"; 
import prisma from "@/utils/db"; // Import PoemModel component
import "@/global.css";
import Link from "next/link";
import poem from "@/components/poem";

export default async function PoemsPage() {
  const poems = await prisma.poem.findMany(); // Fetch all poems from the database

  // Get session data to check if the user is an admin
  const session = await getSession(); // Fetch session (you need this function to return the current user's session)
  const isAdmin = session?.role === "admin"; // Check if the user is an admin

  // Function to delete poem
  const deletePoem = async (id: string) => {
    "use server"; // Marks the function as a server-side function
    await prisma.poem.delete({ where: { id } });
    revalidatePath("/"); // Refresh the page after deletion
  };

  return (
    <div className="bg-gray-100">
  <h1 className="text-4xl font-extrabold text-center text-blue-300 mb-8 mt-4">
    Poems Collection
  </h1>

  
      
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

 
    {poems.map((poem) => (
      <PoemModel
        key={poem.id}
        id={poem.id}
        title={poem.title}
        author={poem.author}
        content={poem.content}
        deletePoem={deletePoem} // Pass deletePoem function to PoemModel
        isAdmin={isAdmin} // Pass isAdmin to PoemModel
      >
        <div className="mt-4">
          
        </div>
      </PoemModel>
    ))}
  </div>
</div>

  );
}
