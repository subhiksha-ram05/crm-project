const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const {
  getDashboard,
} = require("../controllers/dashboardController");

// Dashboard (Admin Only)
router.get(
  "/",
  protect,
  authorize("Admin"),
  getDashboard
);

module.exports = router;