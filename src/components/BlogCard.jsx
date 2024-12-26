import React, { useState } from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {

  return (
    <div>
      <div className="flex my-4 gap-5 p-4">
        <div className="w-full">
          <div className="flex gap-3 items-center mb-2">
            <img
              src={blog.profileImage}
              alt="profile pic"
              className="w-8 h-8 rounded-full"
            />
            <p>{blog.name}</p>
            <p className="opacity-70 text-xs">
              {new Date(blog.createdAt).toLocaleDateString("en-GB")}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {blog.title}
            </h2>
            <Link to={`/blog/${blog._id}`}>
              <button className="px-3 py-2 rounded-lg bg-blue-600 text-white font-serif mt-2">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={`/Server/public${blog.coverImage}`}
            alt={blog.title}
            className="object-cover w-40 h-40 mt-2 rounded-md hover:grayscale"
          />
        </div>
      </div>
      <hr className="border-t border-gray-600" />
    </div>
  );
}

export default BlogCard;
