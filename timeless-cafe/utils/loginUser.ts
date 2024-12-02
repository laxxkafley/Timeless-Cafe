// // "use server"

// // import { SignJWT, jwtVerify } from "jose"; 
// // import { cookies } from "next/headers";
// // import { NextRequest, NextResponse } from "next/server";

// // const secretKey = process.env.SECRET;
// // const key = new TextEncoder().encode(secretKey);

// // const TIMEOUT = 300 // 300 second

// // export async function encrypt(payload: any) {
// //   return await new SignJWT(payload)
// //     .setProtectedHeader({ alg: "HS256" })
// //     .setIssuedAt()
// //     .setExpirationTime(`${TIMEOUT} sec from now`)
// //     .sign(key);
// // }

// // export async function decrypt(input: string): Promise<any> {
// //   const { payload } = await jwtVerify(input, key, {
// //     algorithms: ["HS256"],
// //   });
// //   return payload;
// // }

// // export async function loginUser(userInput:any, remember: boolean) { 
// //   const {id, email, name} = userInput; 

// //   let timeout = TIMEOUT // default 5 mins
// //   if (remember)
// //     timeout = 24*60*60;
// //   // Create the session
// //   const expires = new Date(Date.now() + timeout * 1000);
// //   const session = await encrypt({ id, email, name, expires });

// //   // Save the session in a cookie
// //   (await
// //     // Save the session in a cookie
// //     cookies()).set("session", session, { expires, httpOnly: true });
// //   return { message: "Login Success" }
// // }

// // export async function logoutUser() {
// //   // Destroy the session 
// //   // cookies().set("session", "", { expires: new Date(0) });
// //   (await
// //     // Destroy the session 
// //     // cookies().set("session", "", { expires: new Date(0) });
// //     cookies()).delete('session') 
// //   return { message: "Logout Success" }
// // }

// // export async function getSession() {
// //   const session = (await cookies()).get("session")?.value;
// //   if (!session) return null;
// //   return await decrypt(session);
// // }

// // export async function updateSession(request: NextRequest) {
// //   const session = request.cookies.get("session")?.value;
// //   if (!session) return;

// //   // Refresh the session so it doesn't expire
// //   const parsed = await decrypt(session);
// //   parsed.expires = new Date(Date.now() + TIMEOUT * 1000);
// //   const res = NextResponse.next();
// //   res.cookies.set({
// //     name: "session",
// //     // secure: true,   // if https is used
// //     value: await encrypt(parsed),
// //     httpOnly: true,
// //     expires: parsed.expires,
// //   });
// //   return res;
// // }

// // // "use server";

// // // import { SignJWT, jwtVerify } from "jose"; 
// // // import { cookies } from "next/headers";
// // // import { NextRequest, NextResponse } from "next/server";

// // // const secretKey = process.env.SECRET; // Ensure this is set in your environment variables
// // // const key = new TextEncoder().encode(secretKey);

// // // const TIMEOUT = 300; // Default session timeout: 5 minutes (300 seconds)

// // // // Function to encrypt a payload into a JWT token
// // // export async function encrypt(payload: any) {
// // //   return new SignJWT(payload)
// // //     .setProtectedHeader({ alg: "HS256" })
// // //     .setIssuedAt()
// // //     .setExpirationTime(`${TIMEOUT}s`) // Expiry in seconds
// // //     .sign(key);
// // // }

// // // // Function to decrypt a JWT token
// // // export async function decrypt(input: string): Promise<any> {
// // //   try {
// // //     const { payload } = await jwtVerify(input, key, { algorithms: ["HS256"] });
// // //     return payload;
// // //   } catch (error) {
// // //     console.error("Error decrypting session:", error);
// // //     throw error; // Re-throw the error for handling elsewhere
// // //   }
// // // }

// // // // Login user and set the session cookie
// // // export async function loginUser(userInput: any, remember: boolean) { 
// // //   const { id, email, name } = userInput; 

// // //   let timeout = TIMEOUT; // Default: 5 minutes
// // //   if (remember) timeout = 24 * 60 * 60; // 1 day if "remember me"

// // //   // Create the session token
// // //   const expires = new Date(Date.now() + timeout * 1000);
// // //   const session = await encrypt({ id, email, name, expires });

// // //   // Set the session cookie
// // //   const cookieInstance = await cookies();
// // //   cookieInstance.set("session", session, { 
// // //     expires, 
// // //     httpOnly: true,
// // //     path: "/" // Ensure cookie is accessible across the app
// // //   });

// // //   return { message: "Login Success" };
// // // }

// // // // Logout user by deleting the session cookie
// // // export async function logoutUser() {
// // //   const cookieInstance = await cookies();
// // //   cookieInstance.delete("session"); // Remove the session cookie
// // //   return { message: "Logout Success" };
// // // }

// // // // Retrieve the session from the cookie
// // // export async function getSession() {
// // //   const cookieInstance = await cookies();
// // //   const session = cookieInstance.get("session")?.value;

// // //   if (!session) {
// // //     console.log("No session cookie found.");
// // //     return null; // No session available
// // //   }

// // //   try {
// // //     return await decrypt(session); // Decrypt and return session data
// // //   } catch (error) {
// // //     console.error("Error retrieving session:", error);
// // //     return null; // Return null on error
// // //   }
// // // }

// // // // Refresh and update the session expiration time
// // // export async function updateSession(request: NextRequest) {
// // //   const session = request.cookies.get("session")?.value;

// // //   if (!session) return null; // No session to update

// // //   try {
// // //     // Decrypt the existing session
// // //     const parsed = await decrypt(session);

// // //     // Refresh the session expiration
// // //     parsed.expires = new Date(Date.now() + TIMEOUT * 1000);

// // //     // Re-encrypt and set the updated session
// // //     const cookieInstance = await cookies();
// // //     cookieInstance.set("session", await encrypt(parsed), {
// // //       httpOnly: true,
// // //       expires: parsed.expires,
// // //       path: "/",
// // //     });

// // //     return { message: "Session Updated" };
// // //   } catch (error) {
// // //     console.error("Error updating session:", error);
// // //     return null; // Return null on error
// // //   }
// // // }



// // "use server"

// // import { SignJWT, jwtVerify } from "jose"; 
// // import { cookies } from "next/headers";
// // import { NextRequest, NextResponse } from "next/server";

// // const secretKey = process.env.SECRET;
// // const key = new TextEncoder().encode(secretKey);

// // const TIMEOUT = 300 // 300 second

// // export async function encrypt(payload: any) {
// //   return await new SignJWT(payload)
// //     .setProtectedHeader({ alg: "HS256" })
// //     .setIssuedAt()
// //     .setExpirationTime(`${TIMEOUT} sec from now`)
// //     .sign(key);
// // }

// // export async function decrypt(input: string): Promise<any> {
// //   const { payload } = await jwtVerify(input, key, {
// //     algorithms: ["HS256"],
// //   });
// //   return payload;
// // }

// // export async function loginUser(userInput:any, remember: boolean) { 
// //   const {id, email, name} = userInput; 

// //   let timeout = TIMEOUT // default 5 mins
// //   if (remember)
// //     timeout = 24*60*60;
// //   // Create the session
// //   const expires = new Date(Date.now() + timeout * 1000);
// //   const session = await encrypt({ id, email, name, expires });

// //   // Save the session in a cookie
// //   cookies().set("session", session, { expires, httpOnly: true });
// //   return { message: "Login Success" }
// // }

// // export async function logoutUser() {
// //   // Destroy the session 
// //   // cookies().set("session", "", { expires: new Date(0) });
// //   cookies().delete('session') 
// //   return { message: "Logout Success" }
// // }

// // export async function getSession() {
// //   const session = cookies().get("session")?.value;
// //   if (!session) return null;
// //   return await decrypt(session);
// // }

// // export async function updateSession(request: NextRequest) {
// //   const session = request.cookies.get("session")?.value;
// //   if (!session) return;

// //   // Refresh the session so it doesn't expire
// //   const parsed = await decrypt(session);
// //   parsed.expires = new Date(Date.now() + TIMEOUT * 1000);
// //   const res = NextResponse.next();
// //   res.cookies.set({
// //     name: "session",
// //     // secure: true,   // if https is used
// //     value: await encrypt(parsed),
// //     httpOnly: true,
// //     expires: parsed.expires,
// //   });
// //   return res;
// // }

// "use server";

// import { SignJWT, jwtVerify } from "jose";
// import { cookies } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";

// // Secret key for signing and verifying the JWT
// const secretKey = process.env.SECRET || "your-secret-key"; // Ensure this is set in your environment variables
// const key = new TextEncoder().encode(secretKey);

// // Timeout in seconds for the session (default is 5 minutes)
// const TIMEOUT = 300;

// // Encrypt the session payload into a JWT token
// export async function encrypt(payload: any) {
//   return new SignJWT(payload)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime(`${TIMEOUT}s`) // Expiry in seconds
//     .sign(key);
// }

// // Decrypt the JWT token and return the payload
// export async function decrypt(input: string): Promise<any> {
//   try {
//     const { payload } = await jwtVerify(input, key, { algorithms: ["HS256"] });
//     return payload;
//   } catch (error) {
//     console.error("Error decrypting session:", error);
//     return null; // Return null if decryption fails
//   }
// }

// // Login user and set session in cookies
// export async function loginUser(userInput: any, remember: boolean) {
//   const { id, email, name } = userInput;
  
//   // Set timeout based on whether 'remember me' is checked
//   let timeout = remember ? 24 * 60 * 60 : TIMEOUT; // 1 day or default 5 minutes
  
//   // Create session expiration date
//   const expires = new Date(Date.now() + timeout * 1000);
//   const session = await encrypt({ id, email, name, expires });

//   // Save session in a cookie
//   (await
//     // Save session in a cookie
//     cookies()).set("session", session, {
//     expires,
//     httpOnly: true,
//     path: "/",
//   });

//   return { message: "Login Success" };
// }

// // Logout user by deleting session cookie
// export async function logoutUser() {
//   (await cookies()).delete("session");
//   return { message: "Logout Success" };
// }

// // Retrieve session from cookies
// export async function getSession() {
//   const session = (await cookies()).get("session")?.value;
//   if (!session) return null;

//   try {
//     const user = await decrypt(session); // Decrypt the session
//     return user;
//   } catch (error) {
//     console.error("Error retrieving session:", error);
//     return null;
//   }
// }

// // Update the session expiration time to extend it
// export async function updateSession(request: NextRequest) {
//   const session = request.cookies.get("session")?.value;

//   if (!session) return null; // No session to update

//   try {
//     const parsed = await decrypt(session); // Decrypt the session
//     parsed.expires = new Date(Date.now() + TIMEOUT * 1000); // Extend the expiration time

//     // Re-encrypt and save the updated session
//     const res = NextResponse.next();
//     res.cookies.set({
//       name: "session",
//       value: await encrypt(parsed),
//       httpOnly: true,
//       expires: parsed.expires,
//       path: "/",
//     });

//     return res;
//   } catch (error) {
//     console.error("Error updating session:", error);
//     return null;
//   }
// }

"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Secret key for signing and verifying the JWT (ensure this is set in your environment variables)
const secretKey = process.env.SECRET || "your-secret-key"; // Replace with your actual secret
const key = new TextEncoder().encode(secretKey);

// Timeout in seconds for the session (default is 5 minutes)
const TIMEOUT = 300;

// Encrypt the session payload into a JWT token
export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${TIMEOUT}s`) // Expiry in seconds
    .sign(key);
}

// Decrypt the JWT token and return the payload
export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, { algorithms: ["HS256"] });
    return payload;
  } catch (error) {
    console.error("Error decrypting session:", error);
    return null; // Return null if decryption fails
  }
}

// Login user and set session in cookies
export async function loginUser(userInput: any, remember: boolean) {
  const { id, email, name, role } = userInput; // Assuming 'role' is part of the user input
  
  // Set timeout based on whether 'remember me' is checked
  let timeout = remember ? 24 * 60 * 60 : TIMEOUT; // 1 day or default 5 minutes
  
  // Create session expiration date
  const expires = new Date(Date.now() + timeout * 1000);
  
  // Include the 'role' in the session payload
  const session = await encrypt({ id, email, name, role, expires });

  // Save session in a cookie
  (await cookies()).set("session", session, {
    expires,
    httpOnly: true,
    path: "/",
  });

  return { message: "Login Success" };
}

// Logout user by deleting session cookie
export async function logoutUser() {
  (await cookies()).delete("session");
  return { message: "Logout Success" };
}

// Retrieve session from cookies
export async function getSession() {
  const session = (await cookies()).get("session")?.value;
  if (!session) return null;

  try {
    const user = await decrypt(session); // Decrypt the session
    return user; // The user object will now include the 'role'
  } catch (error) {
    console.error("Error retrieving session:", error);
    return null;
  }
}

// Update the session expiration time to extend it
export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;

  if (!session) return null; // No session to update

  try {
    const parsed = await decrypt(session); // Decrypt the session
    parsed.expires = new Date(Date.now() + TIMEOUT * 1000); // Extend the expiration time

    // Re-encrypt and save the updated session
    const res = NextResponse.next();
    res.cookies.set({
      name: "session",
      value: await encrypt(parsed),
      httpOnly: true,
      expires: parsed.expires,
      path: "/",
    });

    return res;
  } catch (error) {
    console.error("Error updating session:", error);
    return null;
  }
}
