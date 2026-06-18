const details = [
  { title: "Age Group", value: "8–14 Years" },
  { title: "Duration", value: "4 Weeks" },
  { title: "Mode", value: "Online" },
  { title: "Fee", value: "₹2,999" },
  { title: "Start Date", value: "15 July 2026" },
];

export default function WorkshopDetails() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Workshop Details
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {details.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center"
            >
              <h3 className="text-lg font-semibold text-blue-600">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-700 font-medium">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}