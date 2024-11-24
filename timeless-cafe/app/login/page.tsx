"use client"

import { useActionState } from "react" // Updated import
import login from "../_actions/LOGIN"
import Link from "next/link"
import { redirect } from "next/navigation"
import SubmitButton from "../../components/SubmitButton"


//Initial State: Initially, data is set to the empty object {} as defined in the useActionState hook ({}). The user hasn't attempted to log in yet.

//User Submits Form: When the user submits the login form, action() (the function that triggers the login) is called. It might be triggered by a onClick handler of the login button.

//Async Login: The login function gets executed, typically checking credentials via an API request. It then returns a result that will be stored in data.
export default function Login() {
  const [data, action] = useActionState(login, {}) // Updated hook

  if (data.message) {
    redirect("/")
  }


  return (
    <div className="max-w-md mt-20 mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className=" text-purple-600 text-2xl font-semibold text-center mb-6">Login</h2>
      <hr className="mb-4" />
      <form action={action} className="space-y-6">
        {/* Email Input */}
        <div className="flex flex-col mt-10">
          <label htmlFor="email" className=" text-purple-600 text-sm font-medium text-gray-700">Email</label>
          <input
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            id="email"
            required
          />
          {data.error?.email && <div className="mt-1 text-red-600 text-sm">{data.error?.email[0]}</div>}
        </div>

        {/* Password Input */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
          <input
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            id="password"
            required
          />
          {data.error?.password && <div className="mt-1 text-red-600 text-sm">{data.error?.password[0]}</div>}
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            className="w-5 h-5"
            type="checkbox"
            name="remember"
            id="remember"
          />
          <label className="text-sm text-gray-600" htmlFor="remember">Remember me</label>
        </div>

        {/* Error Message */}
        {data.error?.message && (
          <div className="mt-2 text-red-600 text-sm">{data.error?.message}</div>
        )}

        {/* Submit Button */}
        <div>
          {data.message ? (
            <p className="text-green-600 text-center">{data.message}</p>
          ) : (
            <SubmitButton label="Login" />
          )}
        </div>
      </form>

      <hr className="my-6" />

      {/* Back Link */}
      <div className="text-center">
        <Link href="/" className="text-blue-500 hover:underline">Back</Link>
      </div>
    </div>
  )
}
