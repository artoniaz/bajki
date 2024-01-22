const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taleSchema = new Schema(
  {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tale", taleSchema);
