// /app/paramm/[id]/page.tsx
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Poem = {
  id: number;
  title: string;
  content: string;
  author: string;
};

export default async function PoemDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  let poem: Poem | null = null;

  try {
    // Fetch the poem data from the database based on the `id`
    poem = await prisma.poem.findUnique({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    console.error('Error fetching poem:', error);
  }

  // If poem is not found, show a message
  if (!poem) {
    return (
      <div className="bg-pink-50 m-6 p-6 text-red-900 rounded">
        <h1 className="text-2xl font-bold">Poem not found</h1>
        <button className="mt-4 p-2 bg-red-500 rounded text-white">
          <a href="/poems">Go Back</a>
        </button>
      </div>
    );
  }

  // Split the poem content by line breaks to display each line separately
  const poemLines = poem.content.split('\n');

  return (
    <div className="bg-pink-50 m-6 p-6 text-red-900 rounded">
      <h1 className="text-3xl font-bold text-red-900">{poem.title}</h1>
      <h2 className="text-xl italic text-gray-600 mb-6">By {poem.author}</h2>
      
      {/* Display each line of the poem */}
      <div className="poem-content space-y-4">
        {poemLines.map((line, index) => (
          <p key={index} className="text-lg leading-relaxed">{line}</p>
        ))}
      </div>

      <button className="mt-4 p-2 bg-red-500 rounded text-white">
        <a href="/poems">Go Back</a>
      </button>
    </div>
  );
}
