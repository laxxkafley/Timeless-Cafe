// "use client";

import { logoutUser } from "@/utils/loginUser";

export default function Logout({ handleLogout }: { handleLogout: Function }) {
  return (
    <button
      className="ml-2 px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      onClick={async () => {
        await logoutUser(); // Call the logout function
        handleLogout(); // Clear the user state
      }}
    >
      Logout
    </button>
  );
}
