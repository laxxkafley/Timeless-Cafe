import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 to-gray-50 text-gray-800 text-center py-20">
        <h1 className="text-6xl font-serif font-bold mb-6 tracking-tight">
          Welcome to Timeless Café
        </h1>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600">
          A haven where art, poetry, and connections flourish. Share your moments, embrace creativity, and find inspiration in every corner.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/Stories"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition"
          >
            Discover Stories
          </Link>
          <Link
            href="/Coffee"
            className="px-6 py-3 border border-gray-800 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
          >
            Brew Your Coffee
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-700 mb-6">
            A Place for Creative Souls
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Timeless Café, we celebrate the magic of art, poetry, and storytelling. Explore, connect, and let your imagination take flight.
          </p>
        </div>
        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
            <img
              src="https://www.1st-art-gallery.com/media/wysiwyg/back-mob-min2.jpg"
              alt="Art Gallery"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Art Gallery
              </h3>
              <p className="text-gray-600 text-sm">
                Dive into the beauty of creativity through curated works of art.
              </p>
              <Link
                href="/Paintings"
                className="text-gray-800 font-medium text-sm mt-4 inline-block hover:underline"
              >
                Visit Now →
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJVdLuHSSYwR2vhhdQkcxCQSKvcMbqHLjPvA&s"
              alt="Poetry Showcase"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Poetry Showcase
              </h3>
              <p className="text-gray-600 text-sm">
                Unravel emotions and stories through our collection of poetry.
              </p>
              <Link
                href="/Poems"
                className="text-gray-800 font-medium text-sm mt-4 inline-block hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLgHmQZccv2n7SqaXX-ktHJu-5zDD2_GzTg&s"
              alt="Stories & Discussions"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Stories & Connections
              </h3>
              <p className="text-gray-600 text-sm">
                Share your journey, exchange ideas, and find your tribe.
              </p>
              <Link
                href="/Stories"
                className="text-gray-800 font-medium text-sm mt-4 inline-block hover:underline"
              >
                Explore Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-700 mb-6">
            Join the Timeless Community
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Be part of a thriving creative space where art, poetry, and stories bring people together.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/Register"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition"
          >
            Register Now
          </Link>
        </div>
      </section>
    </main>
  );
}
