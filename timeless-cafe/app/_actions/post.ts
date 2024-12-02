// "use server"

// import prisma from "@/utils/db";
// import { getSession } from "@/utils/loginUser";
// import { revalidatePath } from "next/cache";
// import { z } from "zod";

// const addSchema = z.object({
//     Comment: z.string().min(10).max(2000),
   
// })

// type fieldErrors = {
//     comment?: string[] | undefined;
    
//     message?: string | undefined;
   
// }

// export default async function comment(prevState: unknown, formData: FormData) : 
//     Promise<{
//         message?:string
//         data?:string
//         error?:fieldErrors
//     }> {
 
//     console.log("comment: " + formData.get("comment") )

//     const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
//     if (result.success === false) {
//         console.log("Error: ", result.error.formErrors.fieldErrors)
//         return {error: result.error.formErrors.fieldErrors}
//     }

//     const data = result.data
//     const {comment} = data
//     const user = await getSession()
//     const userId = user.id

//     try {
//         await prisma.comment.create({
//             data: {
//                 comment,
//                 userId,
//             },
//          })
//     }
//     catch (error) {
//         console.log("error: " + error)
//         return { error: {message: "Invalid email address" }}
//     }
//     revalidatePath("/")
//     return { message: "Added user successful" }
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
