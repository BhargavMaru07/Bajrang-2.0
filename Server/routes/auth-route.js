const express = require("express");
const authControllers = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const router = express.Router();

//Home of Auth Route :
router.route("/").get(authControllers.home);

//Register Route :
router.route("/register").post(authControllers.register);

//Login Route :
router.route("/login").post(authControllers.login);

//user Route :
router.route("/user").get(authMiddleware, authControllers.user);

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dt6l8zbje",
  api_key: "929316373326748",
  api_secret: "VlUaeehpuJGAUbDUImclpWyKK2I",
});

// Configure Multer storage with Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads", // Cloudinary folder name
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });
//profile Route :
router.route("/user/profile").patch(
  authMiddleware,
  upload.single("image"),
  authControllers.profile
);

module.exports = router;
