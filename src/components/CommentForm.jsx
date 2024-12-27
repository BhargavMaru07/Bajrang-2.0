import React, { useState } from "react";
import { useAuthContext } from "../Context/AuthContextModified";
import { useParams } from "react-router-dom";

function CommentForm() {
  const [comment, setComment] = useState("");
  const { id } = useParams();

  const { user } = useAuthContext();

  const  handleSubmit =  (e) => {
    e.preventDefault();

    console.log(user);

    fetch(`http://localhost:5001/api/blog/comment/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
        createdBy: user._id,
      }),
    })
      .then((newComment) => {
        // toast.success("Comment Added !");
        setComment("");
        window.location.reload()
      })
      .catch((error) => {
        console.error("Error submitting the comment:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-100 flex bg-gray-100 px-2 py-2 text-sm rounded-lg ml-14">
          <input
            type="text"
            value={comment}
            placeholder="Add a comment..."
            onChange={(e) => setComment(e.target.value)}
            className="w-full bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="px-2 w-1/8 text-sm font-semibold hover:scale-105 duration-200"
            style={{ color: "#6254F3" }}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
