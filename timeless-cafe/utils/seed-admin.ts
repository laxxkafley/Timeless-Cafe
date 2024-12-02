import prisma from "@/utils/db"; // Ensure this points to your Prisma client instance
import hashPassword from "@/utils/hashPassword"; // Import hashPassword to hash the password

export default async function seedAdmin() {
  // Check if the admin user already exists
  const admin = await prisma.user.findUnique({
    where: { email: "admin@example.com" },
  });

  // If admin user doesn't exist, create a new one
  if (!admin) {
    console.log("Admin not found, creating admin user...");

    // Hash the password for the admin
    const hashedPassword = await hashPassword("adminPassword123");

    // Create admin user
    await prisma.user.create({
      data: {
        name: "Admin User",
        email: "admin@example.com",
        password: hashedPassword, // Store hashed password
        role: "admin", // Set role to admin
      },
    });

    console.log("Admin user created successfully!");
  } else {
    console.log("Admin user already exists.");
  }
}
