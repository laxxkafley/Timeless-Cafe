// // // import prisma from "@/utils/db";
// // import { revalidatePath } from "next/cache";
// // import PoemModel from "@/components/poem"; 
// // import prisma from "@/utils/db";// Import PoemModel component
// // import "@/global.css"

// // export default async function PoemsPage() {
// //   const poems = await prisma.poem.findMany(); // Fetch all poems from the database

// //   // Function to delete poem
// //   const deletePoem = async (id: string) => {
// //     "use server"; // Marks the function as a server-side function
// //     await prisma.poem.delete({ where: { id } });
// //     revalidatePath("/"); // Refresh the page after deletion
// //   };

// //   return (
// //     <div className="bg-gray-100">
// //       <h1 className="text-4xl font-extrabold text-center text-blue-300 mb-8 mt-4">
// //         Poems Collection
// //       </h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //         {poems.map((poem) => (
// //           <PoemModel
// //             key={poem.id}
// //             id={poem.id}
// //             title={poem.title}
// //             author={poem.author}
// //             content={poem.content}
// //             deletePoem={deletePoem} // Pass deletePoem function to PoemModel
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



// import { getSession } from "@/utils/loginUser"; // Assuming you have this function to get session details
// import { revalidatePath } from "next/cache";
// import PoemModel from "@/components/poem"; 
// import prisma from "@/utils/db";// Import PoemModel component
// import "@/global.css"

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
//     </div>
//   );
// }

import { getSession } from "@/utils/loginUser"; // Adjust the import path based on your project structure
import { revalidatePath } from "next/cache";
import PoemModel from "@/components/poem"; 
import prisma from "@/utils/db"; // Import PoemModel component
import "@/global.css";

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
          />
        ))}
      </div>
    </div>
  );
}
