const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const taleRoutes = require("./routes/tales");
const userRoutes = require("./routes/user");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://twoja-bajka.pl",
      "https://www.twoja-bajka.pl",
    ],
    methods: ["GET", "POST"],
  })
);

app.use("/api/tales", taleRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {});
  })
  .catch((err) => console.log(err));
