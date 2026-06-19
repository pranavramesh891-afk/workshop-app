const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  res.send("Kidrove Workshop Backend Running 🚀");
});

// Enquiry API
app.post("/api/enquiry", (req, res) => {
  console.log("New enquiry:", req.body);

  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  res.status(200).json({
    success: true,
    message: "Enquiry submitted successfully",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});