import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import kidImage from "../assets/kid.jpg";
export default function RegistrationForm() {
const [formData, setFormData] = useState({
name: "",
email: "",
phone: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setSuccess("");

  try {
    const response = await fetch(
      "http://localhost:5000/api/enquiry",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (data.success) {
      setSuccess("🎉 Registration submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }

  setLoading(false);
};

return ( <section
   id="register"
   className="
   py-24
   bg-gradient-to-br
   from-blue-600
   via-purple-600
   to-pink-500
   "
 > <div className="max-w-7xl mx-auto px-6">

```
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Side */}

    {/* Left Side */}

<div className="text-white">

  {/* Heading */}

  <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">
     Join the Future
    <br />
    Innovators
  </h2>

  {/* Image */}

  <div className="mb-6">
    <img
      src={kidImage}
      alt="Kids Learning AI"
      className="
      w-full
      max-w-lg
      rounded-3xl
      shadow-2xl
      border-4
      border-white/20
      object-cover
      "
    />
  </div>

  {/* Description */}

  <p className="text-xl text-purple-100 mb-8 max-w-xl">
    Give your child the opportunity to learn AI, Robotics,
    Coding and Problem Solving through exciting hands-on
    projects and interactive learning experiences.
  </p>

  {/* Workshop Info */}

  <div className="flex flex-wrap gap-4">

    <span className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-full font-semibold">
      👦 Ages 8–14
    </span>

    <span className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-full font-semibold">
      📅 4 Weeks
    </span>

    <span className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-full font-semibold">
      🌐 Online
    </span>

    <span className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-full font-semibold">
      🏆 Certificate
    </span>

  </div>

</div>

      {/* Form */}

      <div
        className="
        bg-white/20
        backdrop-blur-xl
        rounded-3xl
        p-8
        shadow-2xl
        border
        border-white/20
        "
      >
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          Register Now
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-gray-500" />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="
              w-full
              pl-12
              pr-4
              py-4
              rounded-xl
              bg-white
              outline-none
              "
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-500" />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="
              w-full
              pl-12
              pr-4
              py-4
              rounded-xl
              bg-white
              outline-none
              "
            />
          </div>

          <div className="relative">
            <FaPhone className="absolute left-4 top-4 text-gray-500" />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="
              w-full
              pl-12
              pr-4
              py-4
              rounded-xl
              bg-white
              outline-none
              "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            py-4
            rounded-xl
            bg-gradient-to-r
            from-yellow-400
            to-orange-500
            text-white
            font-bold
            text-lg
            shadow-lg
            hover:scale-105
            transition-all
            duration-300
            "
          >
            {loading ? "Submitting..." : "Enroll Now 🚀"}
          </button>

          {success && (
            <div className="bg-green-500 text-white p-3 rounded-xl text-center">
              {success}
            </div>
          )}
        </form>

        <div className="mt-6 text-center text-white/90 text-sm">
          ⭐ Limited Seats Available
        </div>
      </div>

    </div>
  </div>
</section>


);
}
