import React from "react";
import { Link } from "react-router-dom";
import { useBlogContext } from "../Context/BlogContext";

function Blog() {
  const { blogs } = useBlogContext();
  return (
    <>
      <div>Hello Blog!</div>
      <div>
        <Link to="/blog/add-new">
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md ">
            {" "}
            Add Blog
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="p-4 border rounded-md shadow-md bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p>{blog.body}</p>
            <img
              src={`/Server/public${blog.coverImage}`}
              // src={blog.coverImage}
              alt={blog.title}
              className="object-cover w-full h-40 mt-2 rounded-md"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;
