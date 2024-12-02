// // import { PrismaClient } from "@prisma/client";
// import CommentForm from "@/app/commentForm/page"; // Adjust path
// import { PrismaClient } from "@prisma/client";
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

// const prisma = new PrismaClient();

// export default async function PoemDetail({ params }: { params: { id: string } }) {
//   const { id } = params;

//   const poem = await prisma.poem.findUnique({
//     where: { id: parseInt(id) },
//   });

//   if (!poem) {
//     return (
//       <div className="bg-pink-50 m-6 p-6 text-red-900 rounded">
//         <h1 className="text-2xl font-bold">Poem not found</h1>
//         <button className="mt-4 p-2 bg-red-500 rounded text-white">
//           <a href="/poems">Go Back</a>
//         </button>
//       </div>
//     );
//   }

//   const poemLines = poem.content.split("\n");

//   return (
//     <div className="bg-pink-50 m-6 p-6 text-red-900 rounded">
//       <h1 className="text-3xl font-bold text-red-900">{poem.title}</h1>
//       <h2 className="text-xl italic text-gray-600 mb-6">By {poem.author}</h2>

//       {/* Display each line of the poem */}
//       <div className="poem-content space-y-4">
//         {poemLines.map((line: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => (
//           <p key={index} className="text-lg leading-relaxed">{line}</p>
//         ))}
//       </div>

//       <button className="mt-4 p-2 bg-red-500 rounded text-white">
//         <a href="/Poems">Go Back</a>
//       </button>

//       {/* Comment Form */}
//       <CommentForm poemId={parseInt(id)} />
//     </div>
//   );
// }
// Import necessary modules
import { PrismaClient } from "@prisma/client";
import { getSession } from "@/utils/loginUser"; // Import session management
import CommentForm from "@/app/commentForm/page";// Adjust the path as necessary
import Link from "next/link"; // Import Link for navigation

const prisma = new PrismaClient();

export default async function PoemDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  // Fetch the poem based on the ID
  const poem = await prisma.poem.findUnique({
    where: { id: parseInt(id) },
  });

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

  // Split poem content by lines to display them properly
  const poemLines = poem.content.split("\n");

  // Get the session to check if the user is logged in
  const user = await getSession();

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
        <a href="/Poems">Go Back</a>
      </button>

      {/* Conditionally render the comment form based on user session */}
      {user ? (
        <div className="mt-6">
          <h3 className="text-lg">Share your thoughts:</h3>
          <CommentForm poemId={parseInt(id)} />
        </div>
      ) : (
        <div className="mt-6 text-gray-600">
          <p>Login to share your thoughts and leave a comment.</p>
          <Link href="/login" className="text-blue-500 hover:underline">Log in</Link> to leave a comment.
        </div>
      )}
    </div>
  );
}
