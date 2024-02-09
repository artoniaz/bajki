const express = require("express");

// controller methods
const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

//singup route
router.post("/signup", signupUser);

module.exports = router;
