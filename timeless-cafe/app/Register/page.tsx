"use client";

import { useFormState } from "react-dom";
import register from "../_actions/REGISTER";
import { redirect } from "next/navigation";
import Link from "next/link";
import SubmitButton from "../../components/SubmitButton";

export default function Register() {
  const [data, action] = useFormState(register, {});

  if (data.message) {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Register</h1>
        <form action={action} className="space-y-6">
          {/* Email Field */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
            {data.error?.email && (
              <div className="mt-1 text-sm text-red-600">
                {data.error?.email[0]}
              </div>
            )}
          </div>

          {/* Name Field */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="mb-2 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
            {data.error?.name && (
              <div className="mt-1 text-sm text-red-600">
                {data.error?.name[0]}
              </div>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              name="password"
              id="password"
              placeholder="Create a password"
              required
            />
            {data.error?.password && (
              <div className="mt-1 text-sm text-red-600">
                {data.error?.password[0]}
              </div>
            )}
          </div>

          {/* Error Message */}
          {data.error?.message && (
            <div className="text-sm text-red-600">{data.error?.message}</div>
          )}

          {/* Submit Button */}
          <div>
                    {data.message ? <p>{data.message}</p> : <SubmitButton label="Register" />}
                </div>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
