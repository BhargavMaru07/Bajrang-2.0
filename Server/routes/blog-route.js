require("dotenv").config();
const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog-controller");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

//Get All the blogs
router.get("/", blogController.getAllBlog);

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
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

//Add new blog
router.route("/add-new").post(upload.single("image"), blogController.addBlog);

//show single  blog
router.get("/:id", blogController.getSingleBlog);

//add comment
router.post("/comment/:blogId", blogController.addComment);

//get Comments of blog
router.get("/comment/:blogId", blogController.getAllComments);

module.exports = router;
