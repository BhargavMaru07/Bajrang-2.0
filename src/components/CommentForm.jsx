import React, { useState } from "react";
import { useAuthContext } from "../Context/AuthContextModified";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function CommentForm() {
  const [comment, setComment] = useState("");
  const { id } = useParams();

  const { user } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      fetch(`https://bajrang-2-0-server.vercel.app/api/blog/comment/${id}`, {
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
    } else {
      setComment("");
      toast.error("Please Login !");
    }
  };

  return (
    <div className="relative my-4">
      <form onSubmit={handleSubmit}>
        <div className="flex w-full h-24 gap-2 px-2 py-2 text-sm bg-gray-100 border-2 rounded-lg">
          <img
            className="rounded-full size-8"
            src={
              user.profileImage === null
                ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                : user.profileImage
            }
            alt="profile pic"
          />
          <textarea
            className="w-full mt-2 bg-transparent focus:outline-none"
            placeholder="Add a comment..."
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></textarea>

          <button
            type="submit"
            className="absolute bottom-0 right-0 w-16 h-8 m-2 text-sm font-semibold text-white rounded-lg"
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
