const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: Date
});

module.exports = mongoose.model("Assignment", assignmentSchema);