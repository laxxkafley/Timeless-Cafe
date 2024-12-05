// import prisma from "@/utils/db"; // Import prisma instance

// export async function getPoems() {
//   try {
//     const poems = await prisma.poem.findMany();
//     return poems;
//   } catch (error) {
//     console.error("Error fetching poems:", error);
//     throw new Error("Unable to fetch poems.");
//   }
// }

import prisma from "@/utils/db"; // Import prisma instance
import { revalidatePath } from "next/cache";

// Function to fetch all poems
export async function getPoems() {
  try {
    const poems = await prisma.poem.findMany();
    return poems;
  } catch (error) {
    console.error("Error fetching poems:", error);
    throw new Error("Unable to fetch poems.");
  }
}

// Function to add a new poem
export async function addPoem(formData:FormData) {
  
    // Extract values from FormData
    const title = formData.get("title")  as string;;
    const content = formData.get("content") as string;;
    const author = formData.get("author") as string;; // Optional, add fields as needed

    // Validate the required fields
    if (!title || !content) {
      throw new Error("Title and content are required.");
    }

    await prisma.poem.create({ data: { title, author, content } });
    revalidatePath("/"); // Refresh the page after the addition
    // Insert the poem into the database
  

 
  } 
  


