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
    const _id = user._id;

    res.status(200).json({ _id, userToken });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.register(name, email, password);
    const userToken = createToken(user._id);
    const _id = user._id;

    res.status(200).json({ _id, userToken });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const getUserProfile = async (req, res) => {
  const {_id} = req.body;
  const user = await User.findById(_id);
  if (user) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404).json({error: 'User not found'})
  }
};

module.exports = { loginUser, registerUser, getUserProfile };
