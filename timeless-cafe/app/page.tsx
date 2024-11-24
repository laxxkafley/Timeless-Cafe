import PaintingModel from "@/components/paintings";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import preExistingData from "../preExistingData";
import Link from "next/link";

export default async function Home() {
  async function initializePaintings() {
    "use server";

    try {
      const existingPaintings = await prisma.paintings.findMany();

      if (existingPaintings.length === 0) {
        await prisma.paintings.createMany({ data: preExistingData });
        console.log("Paintings initialized");
      } else {
        console.log("Paintings already exist in the database.");
      }

      return prisma.paintings.findMany();
    } catch (error) {
      console.error("Error initializing paintings:", error);
      return [];
    }
  }

  const paintings = await initializePaintings();

  async function deletePainting(id: string) {
    "use server";
    try {
      await prisma.paintings.delete({ where: { id } });
      revalidatePath("/");
    } catch (error) {
      console.error("Error deleting painting:", error);
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-400 py-6">
        Featured Paintings
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paintings.map((painting) => (
          <div key={painting.id} className="bg-white  rounded-lg overflow-hidden">
            <PaintingModel
              id={painting.id}
              title={painting.title}
              image={painting.image}
              description={painting.description}
              deletePainting={deletePainting}
            />
            <Link href={`/param/${encodeURIComponent(painting.title)}`}>
              <h2 className="text-lg font-medium text-center text-blue-500 hover:underline py-3">
                See more
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
