export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-25 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center text-white text-xl">
            🤖
          </div>

          <h1 className="text-3xl font-extrabold">
            <span className="text-blue-600">Kidrove</span>
            <span className="text-purple-600"> Workshop</span>
          </h1>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-10 font-medium text-gray-700">
          <a href="#details" className="hover:text-purple-600 transition">
            Details
          </a>

          <a href="#outcomes" className="hover:text-purple-600 transition">
            Outcomes
          </a>

          <a href="#faq" className="hover:text-purple-600 transition">
            FAQ
          </a>
        </div>

        {/* CTA */}
        <a
          href="#register"
          className="
          bg-gradient-to-r
          from-blue-600
          to-purple-600
          text-white
          px-6
          py-3
          rounded-xl
          font-semibold
          shadow-lg
          hover:scale-105
          transition-all
          "
        >
          Enroll Now 🚀
        </a>
      </div>
    </nav>
  );
}