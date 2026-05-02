const express = require("express");
const router = express.Router();
const Submission = require("../models/Submission");

// Submit assignment
router.post("/", async (req, res) => {
  const data = await Submission.create({
    ...req.body,
    submittedAt: new Date()
  });
  res.json(data);
});

// Track submissions
router.get("/:studentId", async (req, res) => {
  const data = await Submission.find({
    studentId: req.params.studentId
  });
  res.json(data);
});

module.exports = router;