import {
  FaBrain,
  FaRobot,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaTools,
} from "react-icons/fa";

const outcomes = [
  {
    title: "AI Fundamentals",
    description: "Understand AI and machine learning concepts.",
    icon: <FaBrain />,
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Robotics Basics",
    description: "Learn automation and robotics principles.",
    icon: <FaRobot />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Build Projects",
    description: "Create exciting AI-powered mini projects.",
    icon: <FaCode />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Problem Solving",
    description: "Develop logical thinking and creativity.",
    icon: <FaLightbulb />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Hands-on Activities",
    description: "Work on interactive robotics activities.",
    icon: <FaTools />,
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Future Skills",
    description: "Gain confidence with emerging technologies.",
    icon: <FaRocket />,
    color: "from-red-500 to-pink-500",
  },
];

export default function LearningOutcomes() {
  return (
    <section
      id="outcomes"
      className="
      py-24
      bg-gradient-to-br
      from-sky-100
      via-blue-100
      to-cyan-100
      relative
      overflow-hidden
      "
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-20 w-72 h-72 bg-sky-300/40 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-20 w-72 h-72 bg-cyan-300/40 rounded-full blur-3xl"></div>

        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h2
          className="
          text-5xl
          md:text-6xl
          font-extrabold
          text-center
          mb-4
          bg-gradient-to-r
          from-sky-600
          via-blue-600
          to-purple-600
          bg-clip-text
          text-transparent
          "
        >
          🚀 What You'll Learn
        </h2>

        <p className="text-center text-gray-700 text-lg mb-16">
          Build, Create and Explore Future Technologies
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="
              bg-white/60
              backdrop-blur-xl
              rounded-3xl
              p-8
              border
              border-white/50
              shadow-xl
              hover:-translate-y-3
              hover:scale-105
              hover:shadow-2xl
              hover:ring-4
              hover:ring-sky-200/50
              hover:bg-white/70
              transition-all
              duration-300
              "
            >
              <div
                className={`
                w-16 h-16
                rounded-2xl
                flex items-center justify-center
                text-white text-2xl
                bg-gradient-to-r ${item.color}
                shadow-lg
                mb-5
                `}
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}