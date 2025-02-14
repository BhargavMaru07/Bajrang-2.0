const BLOG = require("../models/blog-model");
const COMMENT = require("../models/comment_model");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.resolve("./public/uploads"));
//   },
//   filename: function (req, file, cb) {
//     const filename = `${Date.now()}-${file.originalname}`;
//     cb(null, filename);
//   },
// });

// const upload = multer({ storage });

//Get All the blogs
const getAllBlog = async (req, res) => {
  try {
    const blogs = await BLOG.find({}).populate("createdBy");
    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

// Add New Blog...
const addBlog = async (req, res) => {
  try {
    let { title, body, name, createdBy } = req.body;

    let new_blog = await BLOG.create({
      title,
      body,
      name,
      createdBy,
      coverImage: req.file.path,
      // coverImage: `/uploads/${req.file.filename}`,
    });

    // console.log(new_blog);

    return res.status(201).json({ msg: "Blog Created !", Blog: new_blog });
  } catch (error) {
    return res.status(400).json({ msg: "Internal Server Error !" });
  }
};

//get single blog

const getSingleBlog = async (req, res) => {
  try {
    const blog = await BLOG.findById(req.params.id);

    // If blog not found
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    return res.status(200).json(blog);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch blog" });
  }
};

//ADD COMMENT...

const addComment = async (req, res) => {
  // console.log(req.body);
  try {
    let new_comment = await COMMENT.create({
      content: req.body.comment,
      createdBy: req.body.createdBy,
      blogId: req.params.blogId,
    });
    // console.log(new_comment);

    return res.status(201).json({ msg: "Comment Created !" });
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
};

//GET ALL COMMENTS OF A BLOG

let getAllComments = async (req, res) => {
  try {
    // let comments = await COMMENT.find({ blogId: req.params.blogId });
    let comments = await COMMENT.find({ blogId: req.params.blogId }).populate(
      "createdBy"
    );
    // console.log(comments);

    // If comments not found
    if (!comments) {
      return res.status(404).json({ error: "comments not found" });
    }

    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch comments" });
  }
};

module.exports = {
  getAllBlog,
  addBlog,
  getSingleBlog,
  addComment,
  getAllComments,
};
