import React, { useState } from "react";
import useComment from "../Context/CommentContext";

function CommentForm() {
  const [msg, setMsg] = useState("");
  const { addComment } = useComment();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!msg) return;
    addComment({ msg });
    setMsg("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-100 flex bg-gray-100 px-2 py-2 text-sm rounded-lg ml-14">
          <input
            type="text"
            value={msg}
            placeholder="Add a comment..."
            onChange={(e) => setMsg(e.target.value)}
            className="w-full bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="px-2 w-1/8 text-sm font-semibold hover:scale-105 duration-200" style={{color:"#6254F3"}}
          >Post</button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
