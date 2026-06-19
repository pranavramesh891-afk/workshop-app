const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

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

app.listen(5000, () => {
  console.log("Server running on port 5000");
});