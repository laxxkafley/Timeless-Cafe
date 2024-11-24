import prisma from "@/utils/db"; // Import prisma instance

export async function getPoems() {
  try {
    const poems = await prisma.poem.findMany();
    return poems;
  } catch (error) {
    console.error("Error fetching poems:", error);
    throw new Error("Unable to fetch poems.");
  }
}
