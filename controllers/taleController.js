const Tale = require("../models/taleModel");
const mongoose = require("mongoose");

const getTale = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ errorMessage: "No such tale" });
  }

  const tale = await Tale.findById(id);
  if (!tale) {
    return res.status(404).json({ errorMessage: "No such tale" });
  }
  res.status(200).json(tale);
};

module.exports = {
  getTale,
};
