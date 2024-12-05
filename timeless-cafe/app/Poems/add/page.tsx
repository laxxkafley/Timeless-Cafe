// import prisma from "@/utils/db";
// import { revalidatePath } from "next/cache";

// export default async function Add(){
//  async function addPoem(formData:FormData) {
//   "use sever"
//     // Extract values from FormData
//     const title = formData.get("title")  as string;;
//     const content = formData.get("content") as string;;
//     const author = formData.get("author") as string;; // Optional, add fields as needed

//     // Validate the required fields
//     if (!title || !content) {
//       throw new Error("Title and content are required.");
//     }

//     await prisma.poem.create({ data: { title, author, content } });
//     revalidatePath("/"); // Refresh the page after the addition
//     // Insert the poem into the database
  

 
//   } 
  



// export default function AddPoemForm() {
//   return (
//     <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
//       <h2 className="text-2xl font-semibold text-purple-950 mb-4">Add a New Poem</h2>
//       <form action={addPoem} className="space-y-4">
//         <div>
//           <input
//             className="w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none"
//             type="text"
//             name="title"
//             placeholder="Title"
//             required
//           />
//         </div>
//         <div>
//           <textarea
//             className="w-full p-3 border-2 border-purple-300 rounded-lg"
//             name="content"
//             placeholder="Content"
//             rows={4}
//             required
//           />
//         </div>
//         <div>
//           <input
//             className="w-full p-3 border-2 border-purple-300 rounded-lg"
//             type="text"
//             name="author"
//             placeholder="Author"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-3 bg-purple-950 text-white font-bold rounded-lg hover:bg-blue-900 transition-colors"
//         >
//           Add Poem
//         </button>
//       </form>
//     </div>
//   );
// }
// }