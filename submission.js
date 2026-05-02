const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  assignmentId: mongoose.Schema.Types.ObjectId,
  submittedAt: Date,
  status: String
});

module.exports = mongoose.model("Submission", submissionSchema);