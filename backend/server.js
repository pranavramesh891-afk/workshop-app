require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();

// Supabase Client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  res.send("Kidrove Workshop Backend Running 🚀");
});

// Enquiry API
app.post("/api/enquiry", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const { data, error } = await supabase
      .from("enquiries")
      .insert([
        {
          name,
          email,
          phone,
        },
      ]);

    if (error) {
      console.error("Supabase Error:", error);

      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    console.log("New enquiry saved:", {
      name,
      email,
      phone,
    });

    res.status(200).json({
      success: true,
      message: "Enquiry submitted successfully",
    });
  } catch (err) {
    console.error("Server Error:", err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});