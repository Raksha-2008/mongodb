const express = require("express");
const router = express.Router();
const Assignment = require("../models/Assignment");

// Create assignment
router.post("/", async (req, res) => {
  const data = await Assignment.create(req.body);
  res.json(data);
});

// Get all assignments
router.get("/", async (req, res) => {
  const data = await Assignment.find();
  res.json(data);
});

module.exports = router;