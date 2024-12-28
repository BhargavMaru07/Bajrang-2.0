const express = require("express");
const router = express.Router();
const addressController = require("../controllers/address-controller")

router.post("/", addressController.addAddress);

router.get("/", addressController.getAddress);

module.exports = router;
