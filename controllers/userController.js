const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    const userToken = createToken(user._id);

    res.status(200).json({ email, userToken });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    const userToken = createToken(user._id);

    res.status(200).json({ email, userToken });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = { loginUser, signupUser };
