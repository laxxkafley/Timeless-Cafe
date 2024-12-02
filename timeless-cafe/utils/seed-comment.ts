//  import prisma from "@/utils/db"; // Adjust the path as needed
// import hashPassword from "./hashPassword"; // Adjust the path as needed

// export default async function seedComment() {
//   const password = await hashPassword("password");

//   // Create a user
//   const user = await prisma.user.create({
//     data: {
//       email: "warodom@prisma.io",
//       name: "wwarodom",
//       password,
//     },
//   });

//   // Create a user with comments
//   const userWithComments = await prisma.user.create({
//     data: {
//       email: "ariadne@prisma.io",
//       name: "Ariadne",
//       password,
//       comments: {
//         create: [
//           {
//             comment: "Lorem ipsum dolor sit amet. This is the first comment!",
//           },
//           {
//             comment: "Lorem ipsum dolor sit amet. This is the second comment!",
//           },
//         ],
//       },
//     },
//   });

//   console.log(user);
//   console.log(userWithComments);
// }

// export async function seedPost() {
//   const newPost = await prisma.comment.create({
//     data: {
//       comment: "This is a comment associated with a user!",
//       userId: 1, // Replace with the correct user ID
//     },
//   });

//   console.log(newPost);
// }
import prisma from "@/utils/db"; // Adjust the path as needed
import hashPassword from "./hashPassword"; // Adjust the path as needed

export default async function seedComment() {
  const password = await hashPassword("password");

  // Create a user
  const user = await prisma.user.create({
    data: {
      email: "warodom@prisma.io",
      name: "wwarodom",
      password,
    },
  });

  // Create poems
  const poem1 = await prisma.poem.create({
    data: {
      title: "The Dawn",
      content: "When the light rises, it meets the sea.",
      author: "John Doe",
    },
  });

  const poem2 = await prisma.poem.create({
    data: {
      title: "The Night",
      content: "The moon casts shadows upon the earth.",
      author: "Jane Doe",
    },
  });

  // Create a user with comments linked to poems
  const userWithComments = await prisma.user.create({
    data: {
      email: "ariadne@prisma.io",
      name: "Ariadne",
      password,
      comments: {
        create: [
          {
            comment: "Beautiful words that capture the morning's essence.",
            poemId: poem1.id, // Link to the first poem
          },
          {
            comment: "The moon's grace is unmatched.",
            poemId: poem2.id, // Link to the second poem
          },
        ],
      },
    },
  });

  console.log("User created:", user);
  console.log("Poems created:", poem1, poem2);
  console.log("User with comments created:", userWithComments);
}

export async function seedPost() {
  // Add a comment linked to a specific poem
  const newPost = await prisma.comment.create({
    data: {
      comment: "This poem truly resonates with me.",
      userId: 11, // Replace with the correct user ID
      poemId: 12, // Replace with the correct poem ID
    },
  });

  console.log("Comment created:", newPost);
}
