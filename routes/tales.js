const express = require("express");
const { getTale } = require("../controllers/taleController");

const router = express.Router();

router.get("/:id", getTale);

module.exports = router;
