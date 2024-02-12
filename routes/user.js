const userController = require("../controllers/userController.js");
const express = require("express");

// controller methods
const { loginUser, registerUser } = require("../controllers/userController");

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
//TODO: protect the route
// router.route('/profile').get(protect, userController.getUserProfile)
router.route("/profile").get();

module.exports = router;
