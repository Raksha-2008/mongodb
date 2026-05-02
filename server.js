const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/assignments", require("./routes/assignmentRoutes"));
app.use("/api/submissions", require("./routes/submissionRoutes"));

app.get("/", (req, res) => {
  res.send("Server Running");
});

// Start server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});