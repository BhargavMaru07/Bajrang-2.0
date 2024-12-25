import React from "react";
import {Link} from "react-router-dom"

function Blog() {
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
    </>
  );
}

export default Blog;
