const express = require("express");
const {
  loginUser,
  registerUser,
  getUserProfile,
} = require("../controllers/userController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.route("/profile").get(requireAuth, getUserProfile);

module.exports = router;
