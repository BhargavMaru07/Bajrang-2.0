const BLOG = require("../models/blog-model");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./public/uploads"));
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

//Get All the blogs
const getAllBlog = async (req, res) => {
  try {
    const blogs = await BLOG.find({});
    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

// Add New Blog...
const addBlog = async (req, res) => {
  let { title, body } = req.body;

  let new_blog = await BLOG.create({
    title,
    body,
    coverImage: `/uploads/${req.file.filename}`,
  });

  console.log(new_blog);
  return res.redirect(`/api/blog/`);
};

module.exports = {
  getAllBlog,
  addBlog: [upload.single("coverImage"), addBlog],
};
