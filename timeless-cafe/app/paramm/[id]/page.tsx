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


//Import necessary modules
import "@/global.css"
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























// import "@/global.css"
// import { PrismaClient } from "@prisma/client";
// import { getSession } from "@/utils/loginUser"; // Adjust the path as necessary
// import CommentForm from "@/app/commentForm/page"; // Adjust the path as necessary
// import Link from "next/link"; // For navigation

// const prisma = new PrismaClient();

// export default async function PoemDetail({
//   params,
// }: {
//   params: { id: string };
// }) {
//   // Ensure params is awaited before accessing properties
//   const { id } = await params;

//   // Fetch the poem based on the ID
//   const poem = await prisma.poem.findUnique({
//     where: { id: parseInt(id) },
//   });

//   if (!poem) {
//     return (
//       <div className="bg-red-50 m-6 p-6 text-red-900 rounded shadow-md">
//         <h1 className="text-2xl font-bold text-center">Poem Not Found</h1>
//         <Link href="/poems">
//           <button className="mt-4 p-2 bg-red-500 rounded text-white hover:bg-red-600 block mx-auto">
//             Go Back
//           </button>
//         </Link>
//       </div>
//     );
//   }

//   // Split poem content by lines to display them properly
//   const poemLines = poem.content.split("\n");

//   return (
//     <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
//         {poem.title}
//       </h1>
//       <h2 className="text-xl italic text-center text-gray-600 mb-6">
//         By {poem.author}
//       </h2>

//       {/* Poem content displayed line by line */}
//       <div className="bg-white p-24 rounded-md shadow-inner border-gray-300 border">
//         {poemLines.map((line, index) => (
//           <p
//             key={index}
//             className="text-lg text-gray-700 leading-relaxed text-center"
//           >
//             {line || <br />} {/* Render empty lines as blank space */}
//           </p>
//         ))}
//       </div>

//       <div className="mt-6 text-center">
//         <Link href="/poems">
//           <button className="p-3 bg-blue-500 rounded-md text-white hover:bg-blue-600">
//             Go Back
//           </button>
//         </Link>
//       </div>

//       {/* Conditionally render the comment form */}
//       <div className="mt-10">
//         <CommentForm poemId={parseInt(id)} />
//       </div>
//     </div>
//   );
// }
