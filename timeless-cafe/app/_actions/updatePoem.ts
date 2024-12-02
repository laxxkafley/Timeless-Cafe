import prisma from "@/utils/db";// Example server-side code to handle updating poems (with prisma)
export async function updatePoemAction(id: number, title: string, author: string, content: string) {
    try {
      const updatedPoem = await prisma.poem.update({
        where: { id: id },
        data: { title, author, content },
      });
      return updatedPoem;
    } catch (error) {
      console.error("Error updating poem:", error);
      return { error: 'Failed to update poem' };
    }
  }
  