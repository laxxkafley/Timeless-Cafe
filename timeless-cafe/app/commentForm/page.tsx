// "use client";

// import { useState, useTransition } from "react";
// import comment from "../_actions/post"; 

// export default function CommentForm() {
//   const [commentText, setCommentText] = useState("");
//   const [message, setMessage] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [isSubmitting, startTransition] = useTransition();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setMessage(null);
//     setError(null);

//     const formData = new FormData();
//     formData.append("Comment", commentText); // Use "Comment" (uppercase) to match backend schema

//     startTransition(async () => {
//       const result = await comment(undefined, formData); // Call your backend server action
//       if (result.error) {
//         setError(result.error.message || "An error occurred.");
//       } else {
//         setMessage(result.message || "Comment submitted successfully!");
//         setCommentText(""); // Clear the form
//       }
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-4">
//       <label htmlFor="comment" className="block text-lg font-medium mb-2">
//         Share your thoughts!
//       </label>
//       <textarea
        
//         value={commentText}
//         onChange={(e) => setCommentText(e.target.value)}
//         placeholder="Write your comment here..."
//         className="w-full p-2 border rounded-md"
//         rows={4}
//         required
//       ></textarea>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//       {message && <p className="text-green-500 mt-2">{message}</p>}
//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className={`mt-4 p-2 rounded text-white ${
//           isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
//         }`}
//       >
//         {isSubmitting ? "Submitting..." : "Submit Comment"}
//       </button>
//     </form>
//   );
// }

// "use client";

// import { useState, useTransition } from "react";
// import comment from "../_actions/post"; // Adjust path if necessary

// export default function CommentForm({ poemId }: { poemId: number }) {
//   const [commentText, setCommentText] = useState("");
//   const [isPending, startTransition] = useTransition();
//   const [message, setMessage] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setMessage(null);
//     setError(null);

//     const formData = new FormData();
//     formData.append("comment", commentText);
//     formData.append("poemId", poemId.toString()); // Include poemId in the request

//     startTransition(async () => {
//       const result = await comment(undefined, formData);

//       if (result.error) {
//         setError(result.error.message || "An error occurred.");
//       } else {
//         setMessage(result.message || "Comment submitted successfully!");
//         setCommentText(""); // Clear the form
//       }
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-4">
//       <label htmlFor={`comment-${poemId}`} className="block text-lg font-medium mb-2">
//         Share your thoughts on this poem!
//       </label>
//       <textarea
//         id={`comment-${poemId}`}
//         name="comment"
//         value={commentText}
//         onChange={(e) => setCommentText(e.target.value)}
//         placeholder="Write your comment here..."
//         className="w-full p-2 border rounded-md"
//         rows={4}
//         required
//       ></textarea>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//       {message && <p className="text-green-500 mt-2">{message}</p>}
//       <button
//         type="submit"
//         disabled={isPending}
//         className={`mt-4 p-2 rounded text-white ${
//           isPending ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
//         }`}
//       >
//         {isPending ? "Submitting..." : "Submit Comment"}
//       </button>
//     </form>
//   );
// }
// "use client";

// import { useState } from "react";

// export default function CommentForm({ poemId }: { poemId: number }) {
//   const [comment, setComment] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("comment", comment);
//     formData.append("poemId", poemId.toString());

//     try {
//       const res = await fetch("/api/comments", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();
//       if (data.message) {
//         setMessage(data.message);
//         setComment(""); // Clear the input field
//       } else {
//         setError(data.error?.message || "Something went wrong.");
//       }
//     } catch (err) {
//       setError("Failed to submit comment.");
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       {message && <p className="text-green-600">{message}</p>}
//       {error && <p className="text-red-600">{error}</p>}
//       <textarea
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//         placeholder="Enter your comment"
//         className="w-full p-2 border rounded"
//         rows={4}
//         required
//       />
//       <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
//         Submit Comment
//       </button>
//     </form>
//   );
// }








// "use client";

// import { useState, useTransition } from "react";
// import comment from "../_actions/post";

// export default function CommentForm() {
//   const [commentText, setCommentText] = useState("");
//   const [message, setMessage] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [isSubmitting, startTransition] = useTransition();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setMessage(null);
//     setError(null);

//     const formData = new FormData();
//     formData.append("Comment", commentText); // Use "Comment" (uppercase) to match backend schema

//     startTransition(async () => {
//       const result = await comment(undefined, formData); // Call your backend server action
//       if (result.error) {
//         setError(result.error.message || "An error occurred.");
//       } else {
//         setMessage(result.message || "Comment submitted successfully!");
//         setCommentText(""); // Clear the form
//       }
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-4">
//       <label htmlFor="comment" className="block text-lg font-medium mb-2">
//         Share your thoughts!
//       </label>
//       <textarea
//         id="comment"
//         name="comment"
//         value={commentText}
//         onChange={(e) => setCommentText(e.target.value)}
//         placeholder="Write your comment here..."
//         className="w-full p-2 border rounded-md"
//         rows={4}
//         required
//       ></textarea>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//       {message && <p className="text-green-500 mt-2">{message}</p>}
//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className={`mt-4 p-2 rounded text-white ${
//           isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
//         }`}
//       >
//         {isSubmitting ? "Submitting..." : "Submit Comment"}
//       </button>
//     </form>
//   );
// }












// "use client";

// import { useState, useTransition } from "react";
// import comment from "../_actions/post"; // Adjust path if necessary

// export default function CommentForm({ poemId }: { poemId: number }) {
//   const [commentText, setCommentText] = useState("");
//   const [isPending, startTransition] = useTransition();
//   const [message, setMessage] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setMessage(null);
//     setError(null);

//     const formData = new FormData();
//     formData.append("comment", commentText);
//     formData.append("poemId", poemId.toString()); // Ensure poemId is included

//     // Log formData content to check its structure before passing to the server
//     console.log("Form data:", Object.fromEntries(formData.entries()));

//     startTransition(async () => {
//       const result = await comment(formData); // Pass formData directly

//       if (result.error) {
//         setError(result.error.message || "An error occurred.");
//       } else {
//         setMessage(result.message || "Comment submitted successfully!");
//         setCommentText(""); // Clear the form
//       }
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-4">
//       <label htmlFor={`comment-${poemId}`} className="block text-lg font-medium mb-2">
//         Share your thoughts on this poem!
//       </label>
//       <textarea
//         id={`comment-${poemId}`}
//         name="comment"
//         value={commentText}
//         onChange={(e) => setCommentText(e.target.value)}
//         placeholder="Write your comment here..."
//         className="w-full p-2 border rounded-md"
//         rows={4}
//         required
//       ></textarea>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//       {message && <p className="text-green-500 mt-2">{message}</p>}
//       <button
//         type="submit"
//         disabled={isPending}
//         className={`mt-4 p-2 rounded text-white ${
//           isPending ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
//         }`}
//       >
//         {isPending ? "Submitting..." : "Submit Comment"}
//       </button>
//     </form>
//   );
// }


"use client";

import { useState, useTransition } from "react";
import comment from "../_actions/post"; // Adjust path if necessary

export default function CommentForm({ poemId }: { poemId: number }) {
  const [commentText, setCommentText] = useState("");
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    const formData = new FormData();
    formData.append("comment", commentText);
    formData.append("poemId", poemId.toString()); // Include poemId in the request

    startTransition(async () => {
      const result = await comment(undefined, formData);

      if (result.error) {
        setError(result.error.message || "An error occurred.");
      } else {
        setMessage(result.message || "Comment submitted successfully!");
        setCommentText(""); // Clear the form
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <label htmlFor={`comment-${poemId}`} className="block text-lg font-medium mb-2">
        Share your thoughts on this poem!
      </label>
      <textarea
        id={`comment-${poemId}`}
        name="comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Write your comment here..."
        className="w-full p-2 border rounded-md"
        rows={4}
        required
      ></textarea>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {message && <p className="text-green-500 mt-2">{message}</p>}
      <button
        type="submit"
        disabled={isPending}
        className={`mt-4 p-2 rounded text-white ${
          isPending ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isPending ? "Submitting..." : "Submit Comment"}
      </button>
    </form>
  );
}