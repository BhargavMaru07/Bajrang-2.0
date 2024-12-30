const USER = require("../models/user-model");

//Access of all users data :
const getAllUsers = async (req, res) => {
  try {
    const users = await USER.find({}).select({
      password: 0,
      confirmPassword: 0,
    });
    if (!users || users.length === 0) {
      return res.status(404).json({ msg: "No users found !!" });
    }
    return res.status(200).json({ msg: "All users !!", users: users });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = { getAllUsers };
