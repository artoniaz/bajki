const Tale = require("../models/taleModel");
const mongoose = require("mongoose");
const {
  createTaleChatCompletion,
} = require("../openAi/createTaleChatCompletion");

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

const createTale = async (req, res) => {
  req.body.content = await createTaleChatCompletion(req);

  try {
    // don't save tale to db if !id
    if (req.body.user_id !== "") {
      const tale = await Tale.create(req.body);
      res.status(200).json(tale);
    } else {
      res.status(200).json(req.body);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ errorMessage: err.message });
  }
};

module.exports = {
  getTale,
  createTale,
};
