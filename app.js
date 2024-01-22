const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const taleRoutes = require("./routes/tales");
const app = express();

app.use(express.json());

app.use("/api/tales", taleRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {});
  })
  .catch((err) => console.log(err));
