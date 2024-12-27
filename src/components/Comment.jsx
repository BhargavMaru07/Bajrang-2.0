import React, { useEffect } from "react";
import { useBlogContext } from "../Context/BlogContext";
import { useParams } from "react-router-dom";

const Comment = () => {
  let { id } = useParams();
  let { comments, getAllComments } = useBlogContext();

  // Fetch the comments using the id
  useEffect(() => {
    if (id) {
      getAllComments(id);
    }
  }, [id]);

  if (!comments || comments.length === 0) {
    //style this para...
    return <p>No comments available</p> 
  }

  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index} className="flex gap-4 items-start py-2">
          <img
            src={comment.createdBy.profileImage}
            alt="profile pic"
            className="w-8 h-8 rounded-full border border-gray-300"
          />

          <div className="flex flex-col">
            <p className="text-sm font-semibold">
              {" "}
              {new Date(comment.createdAt).toLocaleDateString("en-GB")}
            </p>
            <p className="text-sm font-semibold">{comment.createdBy.name}</p>
            <p className="text-sm text-gray-700">{comment.content}</p>
          </div>
          <div className="ml-auto">
            <button>Like</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
