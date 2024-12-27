import React, { useEffect } from "react";
import { useBlogContext } from "../Context/BlogContext";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

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
    return <p>No comments available</p>;
  }

  return (
    <div className="ml-10">
      {comments.map((comment, index) => (
        <div key={index} className="flex gap-4 items-start py-2">
          <img
            src={comment.createdBy.profileImage}
            alt="profile pic"
            className="w-8 h-8 rounded-full border border-gray-300"
          />

          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="text-sm font-semibold">{comment.createdBy.name}</p>
              <p className="text-sm opacity-70">
                {" "}
                {new Date(comment.createdAt).toLocaleDateString("en-GB")}
              </p>
            </div>
            <p className="text-sm text-gray-700">{comment.content}</p>
          </div>
          <div className="ml-auto">
            <div className="flex gap-4">
              <FontAwesomeIcon icon={faHeart} />
              <img src="/src/assets/Icons/trash.png" alt="delete" className="w-4 h-5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
