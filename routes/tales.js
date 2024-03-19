const express = require("express");
const {
  getTalesByUser,
  getTale,
  createTale,
} = require("../controllers/taleController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.route("/").get(requireAuth, getTalesByUser);
router.route("/:id").get(requireAuth, getTale);
router.post("/", createTale);

module.exports = router;
