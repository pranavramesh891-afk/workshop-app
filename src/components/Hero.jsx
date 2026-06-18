export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          AI & Robotics Summer Workshop
        </h1>

        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8">
          A fun and interactive 4-week online workshop designed to introduce
          children to Artificial Intelligence, Robotics, and future technologies
          through hands-on activities and exciting projects.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="bg-white/20 px-4 py-2 rounded-full">
            Age: 8–14 Years
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full">
            Duration: 4 Weeks
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full">
            Online
          </span>
        </div>

        <a
          href="#register"
          className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition inline-block"
        >
          Enroll Now
        </a>
      </div>
    </section>
  );
}