import React from "react";
import { Link } from "react-router-dom";
import { useBlogContext } from "../Context/BlogContext";
import { useAuthContext } from "../Context/AuthContextModified";
import BlogCard from "../components/BlogCard";
import Button from "../Styles/Button";
import { ICONS } from "../assets/Icons/icon";

const Blog = () => {
  const { isLoggedIn, user } = useAuthContext();
  const { blogs } = useBlogContext();

  return (
    <>
      <div className="mx-auto max-w-7xl">
        {isLoggedIn ? (
          <div className="mx-4">
            <div className="flex items-center justify-between">
              <p className="text-text">
                Welcome back !{" "}
                <span className="text-xl underline cursor-pointer text-btn">{user.name}</span>
                <br /> You're all set—start sharing your ideas and post your
                blog now!
              </p>
              <Link to="/blog/add-new">
                <span className="flex items-center justify-center p-2 border rounded-full bg-bg text-btn">
                  <ICONS.PLUS size={25} />
                </span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-start gap-2 mx-4 sm:items-center sm:justify-between sm:flex-row">
            <p>
              Log in now to unleash your creativity and share your blog with the
              world !!
            </p>
            <Link to="/login">
              <button className="text-red-500 hover:underline">Log in</button>
            </Link>
          </div>
        )}

        <hr className="mt-5 mb-10 border-t-2 border-[#6254F3] mx-4" />
        <div className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-3 lg:grid-cols-4 max-w-7xl sm:grid-cols-2">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
