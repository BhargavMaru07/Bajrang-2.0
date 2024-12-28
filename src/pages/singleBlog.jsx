import React, { useEffect } from "react";
import { useBlogContext } from "../Context/BlogContext";
import { useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import Comment from "../components/Comment";
import Progress from "../helper/Progress";
import Navigate from "../Shared/Navigate";
import { useAuthContext } from "../Context/AuthContextModified";

const SingleBlog = () => {
  const { blog, getSingleBlog } = useBlogContext();
  const { id } = useParams(); // Extract `id` from the URL
  const { user, isLogged } = useAuthContext();

  // Fetch the blog using the ID
  useEffect(() => {
    if (id) {
      getSingleBlog(id);
    }
  }, [id]);

  return (
    <>
      <Navigate name={"Blog"} item={id} />
      <div className="max-w-4xl p-5 mx-auto mb-5 border rounded-lg md:max-w-7xl bg-bg">
        <div>
          {blog ? (
            <div>
              <p className="flex flex-col justify-between gap-2 mb-4 font-semibold sm:flex-row">
                <p>
                  Post By{" "}
                  <span className="capitalize text-btn">{blog.name}</span>{" "}
                </p>
                <span className="font-medium text-text">
                  Created at :{" "}
                  {new Date(blog.createdAt).toLocaleDateString("en-GB")}
                </span>
              </p>
              <div className="flex justify-center py-2 capitalize bg-white border rounded-lg">
                <h1 className="text-base md:text-2xl">{blog.title}</h1>
              </div>
              <div className="flex justify-center w-full mt-2 mb-2 ">
                <div>
                  <img
                    src={`/Server/public${blog.coverImage}`}
                    alt="coverImage"
                    className="h-fit rounded-2xl sm:w-full w-[90%] mx-auto"
                  />
                </div>
              </div>
              <hr className="w-full h-0.5 bg-text" />
              <div className="p-2 mb-4 sm:p-6">
                <p className="mb-2 font-semibold">Description:</p>
                <p>{blog.body}</p>
              </div>
            </div>
          ) : (
            <Progress />
          )}
        </div>
        <hr className="w-full h-0.5 bg-text" />

        <div className="mt-2">
          <div>
            <p className="text-text">
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

export default SingleBlog;
