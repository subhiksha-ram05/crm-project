const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  createLead,
  getLeads,
  updateLeadStatus,
} = require("../controllers/leadController");

router.post("/", protect, createLead);

router.get("/", protect, getLeads);

router.put("/:id/status", protect, updateLeadStatus);

module.exports = router;