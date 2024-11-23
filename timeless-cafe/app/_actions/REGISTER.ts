"use server"

import prisma from "@/utils/db"
import isValidPassword from "@/utils/isValidPassword";
import { loginUser } from "@/utils/loginUser";
import { z } from "zod";
import hashPassword from "@/utils/hashPassword";

const addSchema = z.object({
    email: z.string().email().max(20),
    name: z.string().min(3).max(8, {message:"Not more than 8 characters"}),
    password: z.string().min(3),
})
//The fieldErrors type defines the structure of the error object that will be returned if validation fails. It includes optional error messages for email, name, password, and a general message.

type fieldErrors = {
    email?: string[] | undefined;
    name?: string[] | undefined;
    password?: string[] | undefined;
    message?: string | undefined;
}

export default async function register(prevState: unknown, formData: FormData) : 
    Promise<{
        message?:string
        data?:string
        error?:fieldErrors
    }> {
 
    console.log("Email: " + formData.get("email") +
        formData.get("name"))

    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if (result.success === false) {
        console.log("Error: ", result.error.formErrors.fieldErrors)
        return {error: result.error.formErrors.fieldErrors}
    }

    const data = result.data

    let {email, name, password} = data
    //let email = data.email;
    //let name = data.name;
    //let password = data.password;

    password = await hashPassword(password)

   
    try {
        await prisma.user.create({ data: { email, name, password, } })
        
        // pull the recently added user to login
        const user = await prisma.user.findUnique({
            where: { email },
        })

        await loginUser(user, false) // default remember = false
    }
    catch (error) {
        console.log("error: " + error)
        return { error: {message: error + "" }}
    }
    return { message: "Added user successful" }
}