const express = require("express");
const {
  getTale,
  createTale,
} = require("../controllers/taleController");

const router = express.Router();

router.get("/:id", getTale);
router.post("/", createTale);

module.exports = router;
