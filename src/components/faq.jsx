import { useState } from "react";

const faqs = [
  {
    question: "Do students need prior coding experience?",
    answer:
      "No. The workshop is beginner-friendly and designed for children with no prior coding experience.",
  },
  {
    question: "Will recordings be available?",
    answer:
      "Yes. All workshop sessions will be recorded and shared with enrolled students.",
  },
  {
    question: "What device is required?",
    answer:
      "A laptop or desktop with internet access is recommended.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold hover:bg-gray-50"
              >
                <span>{faq.question}</span>
                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}