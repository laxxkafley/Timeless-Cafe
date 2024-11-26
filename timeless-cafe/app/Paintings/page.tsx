import prisma from "@/utils/db";
import Link from "next/link";

export default async function PaintingPage() {
  const paintings = await prisma.paintings.findMany();

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen py-8">
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
        Painting Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 lg:px-12">
        {paintings.map((painting) => (
          <div
            key={painting.id}
            className="bg-white shadow-md rounded-lg overflow-hidden ease-in-out"
          >
            <div className="h-48 bg-gray-200">
              <img
                src={painting.image}
                alt={painting.title}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {painting.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {painting.description}
              </p>
              <Link href={`/param/${painting.title}`}
              className="block text-center bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-300">
              See More
                 
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
