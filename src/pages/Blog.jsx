import React from "react";
import { Link } from "react-router-dom";
import { useBlogContext } from "../Context/BlogContext";
import { BorderColor } from "@mui/icons-material";
import BlogCard from "../components/BlogCard";
import { useAuthContext } from "../Context/AuthContextModified";

function Blog() {
  const { isLoggedIn } = useAuthContext();
  const { blogs } = useBlogContext();
  return (
    <>
      <div className="px-10">
       { isLoggedIn ? (
        <div className="mt-10">
          <Link to="/blog/add-new" className="flex gap-2 items-center">
            <button className="text-white bg-transparent rounded-full">
              {" "}
              <img
                src="/src/assets/Icons/addBlog.png"
                alt="Add Blog"
                className="w-10 h-10"
              />
            </button>
            <p className="opacity-50">Keep up with the latest in any topic</p>
          </Link>
        </div>
        ):(<div>Please Login</div>)}
        <hr
          className="border-t-2 mt-5 mb-10 "
          style={{ borderColor: "#6254F3" }}
        />
        <div className="flex-col w-full">
          {blogs.map((blog) => (
            <div key={blog._id}>
              <BlogCard blog={blog}></BlogCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
