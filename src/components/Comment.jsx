import React from "react";

function Comment({ comment }) {
  return (
    <div className="flex gap-4 items-start py-2">
      <img
        src="/src/assets/Icons/profile-01.png"
        alt="profile pic"
        className="w-8 h-8 rounded-full border border-gray-300"
      />
      
      <div className="flex flex-col">
        <p className="text-sm font-semibold">UserName</p>
        <p className="text-sm text-gray-700">{comment.msg}</p>
      </div>
      <div className="ml-auto">
        <button>
          Like
        </button>
      </div>
    </div>
  );
}

export default Comment;
