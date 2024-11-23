export default async function hashPassword(password: string) {
    const arrayBuffer = await crypto.subtle.digest(
        "SHA-512", //  crypto.subtle.digest is a method available in the Web Cryptography API (specifically subtle), which provides access to cryptographic functions like hashing, encryption, etc
        new TextEncoder().encode(password)// convert the password (a string) into an array of bytes (Uint8Array)
    )

    return Buffer.from(arrayBuffer).toString("base64")// base 64 converts binary data into an ASCII string format, 
}

