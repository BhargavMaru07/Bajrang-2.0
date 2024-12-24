const express = require("express");
const BLOG = require("../models/blog-model");
const multer = require("multer");
const path = require("path")

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

const router = express.Router();

router.get("/", (req, res) => {
  return res.end("blog page");
});

router.post("/add-new",upload.single("coverImage"), async (req, res) => {
  let { title, body } = req.body;

  let new_blog = await BLOG.create({
    title,
    body,
    coverImage: `/uploads/${req.file.filename}`,
  });

  console.log(new_blog);
  return res.send({
    "msg":"Blog is created"
  });
});

module.exports = router;
