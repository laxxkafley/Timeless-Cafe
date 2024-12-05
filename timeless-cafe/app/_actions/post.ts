// // "use server"

// // import prisma from "@/utils/db";
// // import { getSession } from "@/utils/loginUser";
// // import { revalidatePath } from "next/cache";
// // import { z } from "zod";

// // const addSchema = z.object({
// //     Comment: z.string().min(10).max(2000),
   
// // })

// // type fieldErrors = {
// //     comment?: string[] | undefined;
    
// //     message?: string | undefined;
   
// // }

// // export default async function comment(prevState: unknown, formData: FormData) : 
// //     Promise<{
// //         message?:string
// //         data?:string
// //         error?:fieldErrors
// //     }> {
 
// //     console.log("comment: " + formData.get("comment") )

// //     const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
// //     if (result.success === false) {
// //         console.log("Error: ", result.error.formErrors.fieldErrors)
// //         return {error: result.error.formErrors.fieldErrors}
// //     }

// //     const data = result.data
// //     const {comment} = data
// //     const user = await getSession()
// //     const userId = user.id

// //     try {
// //         await prisma.comment.create({
// //             data: {
// //                 comment,
// //                 userId,
// //             },
// //          })
// //     }
// //     catch (error) {
// //         console.log("error: " + error)
// //         return { error: {message: "Invalid email address" }}
// //     }
// //     revalidatePath("/")
// //     return { message: "Added user successful" }
// // }

// import { getSession } from "@/utils/loginUser"; // Adjust based on your session management
// import prisma from "@/utils/db";
// import { revalidatePath } from "next/cache";
// import { z } from "zod";

// const addSchema = z.object({
//   comment: z.string().min(10).max(2000), // Validate comment length
//   poemId: z.string().regex(/^\d+$/), // Validate poemId is a number
// });

// export default async function comment(
//   prevState: unknown,
//   formData: FormData
// ): Promise<{
//   message?: string;
//   error?: { message?: string; [key: string]: any };
// }> {
//   console.log("FormData received:", Object.fromEntries(formData.entries())); // Debug FormData

//   const commentText = formData.get("comment");
//   const poemIdText = formData.get("poemId");

//   if (!commentText || !poemIdText) {
//     console.error("Missing required fields:", { commentText, poemIdText });
//     return { error: { message: "Comment and Poem ID are required." } };
//   }

//   console.log("Parsed fields:", { commentText, poemIdText });

//   const session = await getSession(); // Replace with your session method
//   if (!session || !session.user || !session.user.id) {
//     return { error: { message: "User must be logged in to comment." } };
//   }

//   const userId = session.user.id;

//   try {
//     await prisma.comment.create({
//       data: {
//         comment: commentText as string,
//         poemId: parseInt(poemIdText as string),
//         userId: userId, // Use the logged-in user's ID
//       },
//     });

//     revalidatePath(`/poems/${poemIdText}`);
//   } catch (error) {
//     console.error("Error saving comment:", error);
//     return { error: { message: "Failed to save comment. Please try again." } };
//   }

//   return { message: "Comment submitted successfully!" };
// }


// "use server";

// import prisma from "@/utils/db";
// import { getSession } from "@/utils/loginUser";
// import { revalidatePath } from "next/cache";
// import { z } from "zod";

// const addSchema = z.object({
//   Comment: z.string().min(10).max(2000),
// });

// export default async function comment(
//   prevState: unknown,
//   formData: FormData
// ): Promise<{
//   message?: string;
//   data?: string;
//   error?: { message?: string; [key: string]: any };
// }> {
//   const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
//   if (!result.success) {
//     return { error: result.error.formErrors.fieldErrors };
//   }

//   const { Comment } = result.data;

// //   const user = await getSession();
// //   if (!user) {
// //     return { error: { message: "You must be logged in to submit a comment." } };
// //   }

// //   const userId = user.id;

// //   try {
// //     await prisma.comment.create({
// //       data: {
// //         comment: Comment,
// //         userId,
// //       },
// //     });
// //   } catch (error) {
// //     console.error("Error saving comment:", error);
// //     return { error: { message: "Failed to save comment. Please try again." } };
// //   }

// //   revalidatePath("/");
// //   return { message: "Comment submitted successfully!" };
// // }
// "use server";

// import prisma from "@/utils/db";
// import { revalidatePath } from "next/cache";
// import { z } from "zod";

// const addSchema = z.object({
//   Comment: z.string().min(10).max(2000),
// });

// export default async function comment(
//   prevState: unknown,
//   formData: FormData
// ): Promise<{
//   message?: string;
//   error?: { message?: string; [key: string]: any };
// }> {
//   console.log("FormData received:", Object.fromEntries(formData.entries()));

//   const commentText = formData.get("comment") as string | null;
//   const poemIdText = formData.get("poemId") as string | null;

//   if (!commentText || !poemIdText) {
//     console.error("Missing required fields:", { commentText, poemIdText });
//     return { error: { message: "Comment and Poem ID are required." } };
//   }

//   const poemId = parseInt(poemIdText);
//   if (isNaN(poemId)) {
//     console.error("Invalid Poem ID:", poemIdText);
//     return { error: { message: "Invalid Poem ID." } };
//   }

//   const userId = 1; // Placeholder user ID; ensure this is valid
//   const userExists = await prisma.user.findUnique({
//     where: { id: userId },
//   });

//   if (!userExists) {
//     console.error("User not found:", userId);
//     return { error: { message: "User does not exist." } };
//   }

//   try {
//     await prisma.comment.create({
//       data: {
//         comment: commentText,
//         poemId,
//         userId,
//       },
//     });
//   } catch (error) {
//     console.error("Error saving comment:", error);
//     return { error: { message: "Failed to save comment. Please try again." } };
//   }

//   return { message: "Comment submitted successfully!" };
// }




// "use server";

// import prisma from "@/utils/db";
// import { z } from "zod";
// import { revalidatePath } from "next/cache";

// const addSchema = z.object({
//   comment: z.string().min(10).max(2000), // Validate comment
//   poemId: z.string().regex(/^\d+$/), // Validate poemId is a numeric string
// });

// export default async function comment(
//   formData: FormData
// ): Promise<{
//   message?: string;
//   error?: { message?: string; [key: string]: any };
// }> {
//   // Log received formData to check its structure
//   console.log("Received form data:", Object.fromEntries(formData.entries()));

//   const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
//   if (!result.success) {
//     console.error("Validation error:", result.error.formErrors.fieldErrors);
//     return { error: { message: "Invalid input. Please check your data." } };
//   }

//   const { comment, poemId } = result.data;

//   try {
//     await prisma.comment.create({
//       data: {
//         comment,
//         poemId: parseInt(poemId), // Associate comment with the correct poem
//         userId: 12, // Temporary placeholder for userId
//       },
//     });
//   } catch (error) {
//     console.error("Error saving comment:", error);
//     return { error: { message: "Failed to save comment. Please try again." } };
//   }

//   revalidatePath("/");
//   return { message: "Comment submitted successfully!" };
// }


"use server";

import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const addSchema = z.object({
  comment: z.string().min(10).max(2000), // Ensure comment length is valid
  poemId: z.string().regex(/^\d+$/), // Validate poemId is a number
});

export default async function comment(
  prevState: unknown,
  formData: FormData
): Promise<{
  message?: string;
  error?: { message?: string; [key: string]: any };
}> {
  console.log("FormData received:", Object.fromEntries(formData.entries())); // Debug FormData

  const commentText = formData.get("comment");
  const poemIdText = formData.get("poemId");

  if (!commentText || !poemIdText) {
    console.error("Missing required fields:", { commentText, poemIdText });
    return { error: { message: "Comment and Poem ID are required." } };
  }

  console.log("Parsed fields:", { commentText, poemIdText });
  const poemId = parseInt(poemIdText as string);

  try {
    await prisma.comment.create({
      data: {
        comment: commentText as string, // This must not be null
        poemId: parseInt(poemIdText as string), // This must be a valid number
        userId: 12, // Ensure this is a valid ID
      },
    });
    
  } catch (error) {
    console.error("Error saving comment:", error);
    return { error: { message: "Failed to save comment. Please try again." } };
  }

  return { message: "Comment submitted successfully!" };
}