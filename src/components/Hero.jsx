export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6">
              🚀 Summer 2026 Admissions Open
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              AI & Robotics
              <span className="block text-yellow-300">
                Summer Workshop
              </span>
            </h1>

            <p className="mt-6 text-xl text-purple-100 leading-relaxed max-w-xl">
              Discover the exciting world of Artificial Intelligence,
              Robotics, Coding, and Innovation through hands-on projects,
              fun activities, and interactive learning.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#register"
                className="bg-white text-purple-700 px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition"
              >
                Enroll Now
              </a>

              <button className="border-2 border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-purple-700 transition">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 text-center">
                <h3 className="text-2xl font-bold">8–14</h3>
                <p className="text-sm text-purple-100">Age Group</p>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 text-center">
                <h3 className="text-2xl font-bold">4 Weeks</h3>
                <p className="text-sm text-purple-100">Duration</p>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 text-center">
                <h3 className="text-2xl font-bold">₹2999</h3>
                <p className="text-sm text-purple-100">Fee</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">

            <div className="w-96 h-96 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center border border-white/20">

              <div className="text-center">
                <div className="text-8xl mb-4">🤖</div>

                <h3 className="text-3xl font-bold">
                  Future Innovators
                </h3>

                <p className="mt-2 text-purple-100">
                  Learn • Build • Create
                </p>
              </div>
            </div>

            {/* Floating Cards */}

            <div className="absolute top-0 left-0 bg-white text-gray-800 px-5 py-3 rounded-2xl shadow-xl">
              🚀 Robotics Projects
            </div>

            <div className="absolute bottom-10 right-0 bg-white text-gray-800 px-5 py-3 rounded-2xl shadow-xl">
              🧠 AI Learning
            </div>

            <div className="absolute top-24 right-10 bg-yellow-300 text-gray-900 px-5 py-3 rounded-2xl shadow-xl font-semibold">
              💻 Coding Fun
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}