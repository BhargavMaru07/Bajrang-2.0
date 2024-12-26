import React, { useEffect } from "react";
import { useBlogContext } from "../Context/BlogContext";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { blog, getSingleBlog } = useBlogContext();
  const { id } = useParams(); // Extract `id` from the URL

  // Fetch the blog using the ID
  useEffect(() => {
    if (id) {
      getSingleBlog(id);
    }
  }, [id]);

  return (
    <div>
      {blog ? (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
          <img src={blog.coverImage} alt="coverImage" />
        </div>
      ) : (
        <p>Loading blog...</p>
      )}
    </div>
  );
};

export default BlogPage;
