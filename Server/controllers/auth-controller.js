const USER = require("../models/user-model");

const home = (req, res) => {
  res.status(201).send("Hello Auth Route !");
};

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

    return res
      .status(201)
      .json({ message: "User data saved successfully!", user: newUser });
  } catch (error) {
    console.error("Error!", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = { home, register };
