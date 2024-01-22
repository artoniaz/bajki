const Tale = require("../models/taleModel");
const mongoose = require("mongoose");
const { openai } = require("../common/openAI");

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

const createTaleChatCompletion = async (req) => {
  const taleResponse = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
          You are a fairy tale writter. 
          You will be given info about the child for whom youre writting. The topic of the tale will be provided.
          Answer max 30 characters but keep in mind the tale will be extended. 
          Never change child name.
          Answer only in polish. 
  
          ###
          Example input:
          {
            "child_name": "adam",
            "age": 9,
            "topic": "dinosaurs"
          }
        `,
      },
      {
        role: "user",
        content: JSON.stringify(req.body),
      },
    ],
    model: process.env.GPT_MODEL_3_5_TURBO,
  });
  return taleResponse.choices[0].message.content;
};

const createTale = async (req, res) => {
  req.body.content = await createTaleChatCompletion(req);

  try {
    const tale = await Tale.create(req.body);
    res.status(200).json(tale);
  } catch (err) {
    console.log(err);
    res.status(400).json({ errorMessage: error.message });
  }
};

module.exports = {
  getTale,
  createTale,
};
