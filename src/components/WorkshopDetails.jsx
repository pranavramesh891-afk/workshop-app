import {
  FaRobot,
  FaClock,
  FaLaptop,
  FaRupeeSign,
  FaCalendarAlt,
} from "react-icons/fa";

const details = [
  {
    title: "Age Group",
    value: "8–14 Years",
    icon: <FaRobot />,
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Duration",
    value: "4 Weeks",
    icon: <FaClock />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Mode",
    value: "Online",
    icon: <FaLaptop />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Fee",
    value: "₹2,999",
    icon: <FaRupeeSign />,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Start Date",
    value: "15 July 2026",
    icon: <FaCalendarAlt />,
    color: "from-indigo-500 to-purple-600",
  },
];

export default function WorkshopDetails() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-extrabold text-center mb-4">
          Workshop Highlights 🚀
        </h2>

        <p className="text-center text-gray-600 text-lg mb-14">
          Learn AI, Robotics and Future Technologies in a fun way!
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {details.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100
              hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div
                className={`w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center text-white text-2xl bg-gradient-to-r ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-2 text-blue-600 font-semibold text-lg">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}