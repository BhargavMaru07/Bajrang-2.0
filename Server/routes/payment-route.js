const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment-controller");

router.post("/create-checkout-session", paymentController.checkoutSession);

module.exports = router;
