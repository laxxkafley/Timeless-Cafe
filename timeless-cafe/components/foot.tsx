import Link from "next/link";
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Timeless Café. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/" className="hover:text-gray-100 text-sm">
              Home
            </Link>
            <Link href="/Poems" className="hover:text-gray-100 text-sm">
              Poetry
            </Link>
            <Link href="/Coffee" className="hover:text-gray-100 text-sm">
              Coffee Brew
            </Link>
            <Link href="/Stories" className="hover:text-gray-100 text-sm">
              Stories
            </Link>
          </div>
        </div>
      </footer>
    );
  }
  