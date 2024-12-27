import React from "react";
import { Link } from "react-router-dom";
import { useBlogContext } from "../Context/BlogContext";
import BlogCard from "../components/BlogCard";
import { useAuthContext } from "../Context/AuthContextModified";
import Masonry from "react-masonry-css";
import "./Blog.css";

function Blog() {
  const { isLoggedIn } = useAuthContext();
  const { blogs } = useBlogContext();

  const breakpointColumns = {
    default: 4,
    1100: 3,
    768: 2,
    625: 1,
  };

  return (
    <>
      <div className="px-10">
        {isLoggedIn ? (
          <div className="mt-10">
            <Link to="/blog/add-new" className="flex gap-2 items-center">
              <button className="text-white bg-transparent rounded-full">
                <img
                  src="/src/assets/Icons/addBlog.png"
                  alt="Add Blog"
                  className="w-10 h-10"
                />
              </button>
              <p className="opacity-50">Keep up with the latest in any topic</p>
            </Link>
          </div>
        ) : (
          <div>Please Login</div>
        )}
        <hr
          className="border-t-2 mt-5 mb-10"
          style={{ borderColor: "#6254F3" }}
        />
        <Masonry
          breakpointCols={breakpointColumns}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </Masonry>
      </div>
    </>
  );
}

export default Blog;
