const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taleSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    child_name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tale", taleSchema);
