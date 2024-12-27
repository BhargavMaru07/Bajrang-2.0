import React, { useEffect } from "react";
import { useBlogContext } from "../Context/BlogContext";
import { useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import Comment from "../components/Comment";

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
    <>
      <div className="px-10 text-black">
        <div>
          {blog ? (
            <div>
              <p className="font-bold">
                By <span style={{ color: "#6254F3" }}>{blog.name}</span>{" "}
                <span className="font-normal opacity-70">
                  {new Date(blog.createdAt).toLocaleDateString("en-GB")}
                </span>
              </p>
              <div className="flex bg-gray-300 justify-center p-2">
                <h1 className="text-2xl">{blog.title}</h1>
              </div>
              <div className="w-full flex justify-center mt-2 mb-2">
                <img
                  src={`/Server/public${blog.coverImage}`}
                  alt="coverImage"
                  className="h-fit rounded-2xl"
                />
              </div>
              <div className="p-10">
                <p className="font-bold mb-2">Description:</p>
                <p>{blog.body}</p>
              </div>
            </div>
          ) : (
            <p>Loading blog...</p>
          )}
        </div>
        <div className="mx-5">
          <div>
            <p className="opacity-70">
              Want to say something? Add your thoughts here!
            </p>
            <CommentForm />
          </div>
          <div>
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
