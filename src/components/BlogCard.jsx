import React, { useState } from "react";
import CommentForm from "./CommentForm";
import { CommentProvider } from "../Context/CommentContext";
import Comment from "./Comment";
import { comment } from "postcss";

function BlogCard({ blog }) {
  const [comments, setComments] = useState([]);
  const [showComment, setShowComment] = useState(false);

  const addComment = (msg) => {
    setComments((prev) => [{ ...msg }, ...prev]);
  };

  const visibleComments = showComment ? comments : comments.slice(0, 2);

  const toggleShowMoreComment = () => {
    setShowComment((prev) => !prev);
  };

  return (
    <CommentProvider value={{ comments, addComment }}>
      <div>
        <div className="flex my-4 gap-5 p-4">
          <div className="w-full">
            <div className="flex gap-3 items-center mb-2">
              <img
                src="/src/assets/Icons/profile-01.png"
                alt="profile pic"
                className="w-8 h-8 rounded-full"
              />
              <p>Jay Odedra</p>
              <p className="opacity-70 text-xs">4 days ago</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {blog.body}
              </p>
            </div>
            <div className="mt-3 mb-3">
              <CommentForm />
            </div>
            <div
              className={`ml-14 transition-all duration-300 ${
                showComment ? "max-h-fit" : "max-h-24 overflow-hidden"
              }`}
            >
              {visibleComments.map((comment, index) => (
                <div key={index} className="text-sm text-gray-700 mb-2">
                  <Comment comment={comment}></Comment>
                </div>
              ))}
            </div>
            {comments.length > 2 && (
              <p
                className="cursor-pointer text-gray-500 text-sm mt-2"
                onClick={toggleShowMoreComment}
              >
                {showComment ? "Show less comments" : "Show more comments"}
              </p>
            )}
          </div>
          <div>
            <img
              src={`/Server/public${blog.coverImage}`}
              alt={blog.title}
              className="object-cover w-40 h-40 mt-2 rounded-md hover:grayscale"
            />
          </div>
        </div>
        <hr className="border-t border-gray-600" />
      </div>
    </CommentProvider>
  );
}

export default BlogCard;
