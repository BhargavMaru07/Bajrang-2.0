import React from "react";
import { Link } from "react-router-dom";
import noImage from "../assets/images/NoBlogImage.jpg";
import TruncatedTitle from "../helper/TruncatedTitle";

function BlogCard({ blog }) {

  return (
    <div className="flex flex-col justify-between w-full h-auto overflow-hidden border rounded-lg">
      <div className="sm:h-[70%] p-4 w-full h-auto">
        <img
          // src={`/Server/public${blog.coverImage}`}
          src={noImage}
          alt={blog.title}
          className="object-fill w-full h-full rounded-lg"
        />
      </div>
      <div className="relative p-2 sm:p-4">
        <p className="flex justify-between mb-2 text-sm text-text">
          <span>create at :</span>
          {new Date(blog.createdAt).toLocaleDateString("en-GB")}
        </p>
        <h2 className="flex justify-start gap-4 mb-2 text-xl font-semibold capitalize text-text">
          <span>Title :</span>
          <TruncatedTitle name={blog.title} />
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={blog?.createdBy?.profileImage}
                // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="profile pic"
                className="object-cover rounded-full h-9 w-9"
              />
              <div>
                <p className="font-medium text-gray-800 capitalize">
                  {blog.name}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute rounded-lg bottom-4 right-2 bg-btn">
            <Link to={`/blog/${blog._id}`}>
              <button className="px-3 py-2 text-sm font-medium text-white rounded-lg">
                View Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
