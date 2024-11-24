import prisma from "@/utils/db";
import Link from "next/link";
export default async function PoemsPage() {
  const poems = await prisma.poem.findMany(); // Fetch all poems from the database

  return (
    <div className="bg-gray-100">
      <h1 className="text-4xl font-extrabold text-center text-blue-300 mb-8 mt-4">
        Poems Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {poems.map((poem) => (
          <div
            key={poem.id}
            className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              {poem.title}
            </h2>
            <p className="text-sm text-gray-600 mb-3 italic">By {poem.author}</p>
            <p className="text-gray-800 text-base line-clamp-4">
              {poem.content}
            </p>
            <Link href={`/paramm/${poem.id}`}>
        <h2 className="text-xl border-2 text-center font-bold text-blue-500 cursor-pointer mt-4">
          See more
        </h2>
      </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
