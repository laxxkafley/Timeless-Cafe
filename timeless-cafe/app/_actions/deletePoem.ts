"use server";

import prisma from "@/utils/db"; // Import your Prisma client

export default async function deletePoem(id: string) {
  try {
    await prisma.poem.delete({
      where: { id: parseInt(id, 10) }, // Ensure the ID is parsed correctly
    });
    console.log(`Poem with ID ${id} deleted successfully.`);
  } catch (error) {
    console.error(`Failed to delete poem with ID ${id}:`, error);
    throw new Error("Failed to delete poem.");
  }
}
