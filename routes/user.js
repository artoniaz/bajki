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
router.use(requireAuth);
router.get("/profile/:_id", getUserProfile);

module.exports = router;
