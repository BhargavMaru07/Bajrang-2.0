import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="bg-white w-auto shadow-md rounded-lg overflow-hidden transition-all duration-300">
      <img
        src={`/Server/public${blog.coverImage}`}
        alt={blog.title}
        className="w-full h-auto object-cover"
      />
      <div className="p-4 relative">
        <p className="text-sm text-gray-500 opacity-50">
          {new Date(blog.createdAt).toLocaleDateString("en-GB")}
        </p>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {blog.title}
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={blog.profileImage}
                alt="profile pic"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-800">{blog.name}</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-2 rounded-lg" style={{backgroundColor:"#6254F3"}}>
            <Link to={`/blog/${blog._id}`}>
              <button className="px-3 py-2 rounded-lg font-serif text-white duration-300 hover:text-black text-sm">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
