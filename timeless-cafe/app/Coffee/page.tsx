'use client';

import Link from 'next/link';

export default function CoffeeBrew() {
  return (
    <main className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen font-sans">
      {/* Header Section */}
      <section className="bg-red-50 text-purple py-20 text-center relative">
        <h1 className="text-6xl font-serif font-extrabold mb-6 tracking-wide drop-shadow-lg">
          Coffee Brew Corner
        </h1>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed drop-shadow-md">
          Where coffee meets creativity. Brew your favorite virtual cup and find
          inspiration in our timeless collection of art, poetry, and stories.
        </p>
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-yellow-200 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-36 h-36 rounded-full bg-indigo-300 opacity-30 animate-pulse"></div>
      </section>

      {/* Interactive Coffee Builder */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-8">
            Brew Your Coffee
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Choose your brew and let it guide you to a creative journey.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Espresso */}
            <div className="bg-gradient-to-br from-indigo-50 to-white shadow-lg rounded-xl p-6 transition hover:scale-105 hover:shadow-2xl relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAO2WRO6PAFDFhUYYUF1sK2JuE9u9NhOtiw&s"
                alt="Espresso"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <h3 className="text-xl font-semibold text-indigo-700 mt-4">
                Espresso
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Short and strong, espresso pairs perfectly with intense poems or
                flash fiction.
              </p>
              <Link
                href="/Poems"
                className="inline-block text-indigo-500 hover:underline text-sm font-medium"
              >
                Discover Poems →
              </Link>
              <div className="absolute top-0 right-0 w-8 h-8 bg-indigo-200 rounded-full opacity-30 animate-ping"></div>
            </div>

            {/* Latte */}
            <div className="bg-gradient-to-br from-purple-50 to-white shadow-lg rounded-xl p-6 transition hover:scale-105 hover:shadow-2xl relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX11QweY1Y9kNhr2Mr-9fA63w4oCFgTWYA2w&s"
                alt="Latte"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <h3 className="text-xl font-semibold text-purple-700 mt-4">
                Latte
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Smooth and creamy, a latte is a great companion for relaxing
                stories.
              </p>
              <Link
                href="/Stories"
                className="inline-block text-purple-500 hover:underline text-sm font-medium"
              >
                Read Stories →
              </Link>
              <div className="absolute bottom-0 left-0 w-8 h-8  rounded-full opacity-30 animate-ping"></div>
            </div>

            {/* Cold Brew */}
            <div className="bg-gradient-to-br from-pink-50 to-white shadow-lg rounded-xl p-6 transition hover:scale-105 hover:shadow-2xl relative">
              <img
                src="https://thumbs.dreamstime.com/b/coffe-illustration-white-background-61914260.jpg"
                alt="Cold Brew"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <h3 className="text-xl font-semibold text-pink-700 mt-4">
                Cold Brew
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Refreshingly modern, cold brew pairs well with contemporary art.
              </p>
              <Link
                href="/Paintings"
                className="inline-block text-pink-500 hover:underline text-sm font-medium"
              >
                Explore Art →
              </Link>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-pink-200 rounded-full opacity-30 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Quotes */}
      <section className="py-16 bg-gradient-to-t from-white to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-8">
            Sip & Reflect
          </h2>
          <p className="text-gray-600 text-lg italic">
            "Coffee is more than a beverage—it’s a moment of reflection."
          </p>
          <p className="text-gray-600 text-lg italic mt-4">
            "Each cup tells a story, each sip sparks creativity."
          </p>
          <div className="mt-8">
            <Link
              href="/Poems"
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
            >
              Explore Coffee-Inspired Poems
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center">
        <h2 className="text-4xl font-serif font-bold mb-6">
          Ready to Brew Your Imagination?
        </h2>
        <p className="text-lg mb-8">
          Join the Timeless Café community and let creativity flow with every
          sip.
        </p>
        <Link
          href="/Register"
          className="px-8 py-4 bg-white text-indigo-700 rounded-full text-sm font-medium hover:bg-gray-100 transition shadow-lg"
        >
          Join the Community
        </Link>
      </section>
    </main>
  );
}
