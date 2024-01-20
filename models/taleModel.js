const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taleSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    child_name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tale", taleSchema);
