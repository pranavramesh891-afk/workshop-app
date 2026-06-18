const outcomes = [
  "Understand AI fundamentals and machine learning concepts",
  "Learn robotics basics and automation principles",
  "Build simple AI-powered projects",
  "Develop problem-solving and logical thinking skills",
  "Create interactive robotics activities and prototypes",
  "Gain confidence in future technology concepts",
];

export default function LearningOutcomes() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Learning Outcomes
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">🚀</div>
              <p className="text-gray-700 font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}