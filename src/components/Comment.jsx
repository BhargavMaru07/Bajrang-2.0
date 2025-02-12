import React, { useEffect } from "react";
import { useBlogContext } from "../Context/BlogContext";
import { useParams } from "react-router-dom";
import { ICONS } from "../assets/Icons/icon";

const Comment = () => {
  let { id } = useParams();
  let { comments, getAllComments } = useBlogContext();

  // Fetch the comments using the id
  useEffect(() => {
    if (id) {
      getAllComments(id);
    }
  }, []);

  if (!comments || comments.length === 0) {
    //style this para...
    return <p className="text-center">No comments available</p>;
  }

  return (
    <div className="md:ml-10" key={"index"}>
      {comments.map((comment, index) => (
        <>
          <div key={index} className="relative flex items-start gap-4 py-2">
            <div>
              <img
                src={
                  comment?.createdBy?.profileImage === null
                    ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    : comment?.createdBy?.profileImage
                }
                alt="profile pic"
                className="w-10 h-10 border border-gray-300 rounded-full"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex gap-2">
                <p className="text-sm font-semibold capitalize">
                  {comment?.createdBy?.name}
                </p>
                <p className="text-sm text-text">
                  {" "}
                  {new Date(comment?.createdAt).toLocaleDateString("en-GB")}
                </p>
              </div>
              <p className="text-sm text-gray-700">{comment?.content}</p>
            </div>
            <div className="absolute right-0 sm:top-[20px]">
              <div className="flex items-center justify-center gap-4">
                <div className="p-1 rounded-full cursor-pointer md:p-2 bg-btn">
                  <ICONS.HEART size={20} className="text-white" />
                </div>
                <div className="md:p-2 p-1 rounded-full bg-[#EF4444] cursor-pointer">
                  <ICONS.DELETE size={20} className="text-white " />
                </div>
              </div>
            </div>
          </div>
          <hr className="h-1" />
        </>
      ))}
    </div>
  );
};

export default Comment;
