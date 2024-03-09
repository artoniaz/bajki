const Tale = require("../models/taleModel");
const mongoose = require("mongoose");
const {
  createTaleChatCompletion,
} = require("../openAi/createTaleChatCompletion");
const { createImage } = require("../openAi/createImage");

const getTalesByUser = async (req, res) => {
  const user_id = req.user._id;
  const tales = await Tale.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(tales);
};

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
  try {
    const taleContent = await createTaleChatCompletion(req);
    req.body.content = taleContent;

    // don't save tale & don't create image if !id
    if (req.body.user_id !== "") {
      const image_url = await createImage(taleContent);
      req.body.image_url = image_url;
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
  getTalesByUser,
  getTale,
  createTale,
};
