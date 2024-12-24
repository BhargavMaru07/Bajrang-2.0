const express = require("express");
const authControllers = require("../controllers/auth-controller");

const router = express.Router();

//Home of Auth Route :
router.route("/").get(authControllers.home);

//Register Route :
router.route("/register").post(authControllers.register);

//Login Route :
router.route("/login").post(authControllers.login);

module.exports = router;
