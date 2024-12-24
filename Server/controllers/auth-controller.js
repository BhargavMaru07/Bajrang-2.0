const USER = require("../models/user-model");
const bcrypt = require("bcryptjs");

//Home Auth route Controller :
const home = (req, res) => {
  res.status(201).send("Hello Auth Route !");
};

//Register Auth route Controller :
const register = async (req, res) => {
  try {
    const user = req.body; // Extract the body from the request
    const { email } = user;

    // Check if the email already exists
    const userExist = await USER.findOne({ email });

    if (userExist) {
      return res
        .status(400)
        .json({ msg: "Email Already Registered!", email: userExist });
    }

    // If email does not exist, create the user
    const newUser = await USER.create(user);

    return res.status(201).json({
      msg: "Registration successfully!",
      token: await newUser.generateToken(),
      userId: newUser._id.toString(),
    });
  } catch (error) {
    console.error("Error!", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

//Login Auth route Controller :

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //It is valid or not ?
    const userExist = await USER.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credentials !" });
    }

    const user = await userExist.comparePassword(password);

    if (user) {
      return res.status(200).json({
        msg: "Login successfully!",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      return res.status(400).json({ msg: "Invalid Credentials !" });
    }
  } catch (error) {
    console.error("Error!", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = { home, register, login };