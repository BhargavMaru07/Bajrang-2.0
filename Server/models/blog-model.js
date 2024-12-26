const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    name:{
      type:String,
    },
    createdBy: {
      type: String,
    },
  },
  { timestamps: true }
);


let BLOG = mongoose.model("blog",BlogSchema)

module.exports = BLOG;