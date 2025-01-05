const express = require("express");
const router = express.Router();
const AttackData = require("../models/AttackData");

// Get all data
router.get("/", async (req, res) => {
  try {
    const data = await AttackData.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get specific message by idx
router.get("/:idx", async (req, res) => {
  try {
    const data = await AttackData.findOne({ idx: req.params.idx });
    if (!data) return res.status(404).json({ message: "Not Found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
