const express = require("express");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/students", studentRoutes);

// Home
app.get("/", (req, res) => {
    res.send("Student Management API");
});

// Start server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});