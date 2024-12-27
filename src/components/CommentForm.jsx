import React, { useState } from "react";
import { useAuthContext } from "../Context/AuthContextModified";
import { useParams } from "react-router-dom";

function CommentForm() {
  const [comment, setComment] = useState("");
  const { id } = useParams();

  const { user } = useAuthContext();

  const handleSubmit = (e) => {
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
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error submitting the comment:", error);
      });
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <div className="w-full h-24 flex gap-2 bg-gray-100 px-2 py-2 text-sm rounded-lg">
          <img
            className="rounded-full size-8"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="profile pic"
          />
          <textarea
            className="w-full bg-transparent focus:outline-none mt-2"
            placeholder="Add a comment..."
            onChange={(e) => setComment(e.target.value)}
            value={comment}  
          ></textarea>
          
          <button
            type="submit"
            className="px-10 h-10 w-1/8 rounded-lg text-sm text-white font-semibold absolute bottom-0 right-0 m-2 hover:scale-105 duration-200"
            style={{ backgroundColor: "#6254F3" }}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
