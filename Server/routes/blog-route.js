const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog-controller");

//Get All the blogs
router.get("/", blogController.getAllBlog);

//Add new blog
router.post("/add-new", blogController.addBlog);

//show single  blog
router.get("/:id", blogController.getSingleBlog);

//add comment
router.post("/comment/:blogId", blogController.addComment);

module.exports = router;
