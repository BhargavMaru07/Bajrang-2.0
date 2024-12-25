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
  return res.end("blog page");
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
  return res.redirect(`/api/blog/${new_blog._id}`);
};


module.exports = {
  getAllBlog,
  addBlog: [upload.single("coverImage"), addBlog],
};
