const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = createToken(user._id);
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: error.message });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await userModel({
      username,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.status(201).json({ success: true, token });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { loginUser, registerUser };