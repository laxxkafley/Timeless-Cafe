import RegisterModel from "@/components/register";
import prisma from '@/utils/db'; // Your Prisma instance for database access
import { revalidatePath } from 'next/cache';

// Define the structure of registration form data
export default async function Register() {
  "use server"

  const registerData = await prisma.user.findMany();
  console.log("data", registerData);

  // Function to handle the registration form data
  async function addRegister(formData: FormData) {
    "use server";
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await prisma.user.create({
      data: { name, email, password } // Create user in the database
    });

    revalidatePath("/"); // Revalidate the path to refresh the page
  }

  return (
    <>
      {registerData.map((item) => (
        <RegisterModel
          key={item.id}
          id={item.id} 
          name={item.name} 
          email={item.email} // Corrected typo here
          password={item.password}
        />
      ))}

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-purple-600">Create an Account</h2>
          <form action={addRegister} className="space-y-4">
            <div>
              <input
                className="w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
            </div>
            
            <div>
              <input
                className="w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div>
              <input
                className="w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full p-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Register
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-sm text-gray-500">Already have an account? <a href="/login" className="text-purple-600">Login</a></p>
          </div>
        </div>
      </div>
    </>
  );
}
