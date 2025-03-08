import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
// import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
// import { useBlogContext } from "../Context/BlogContext";
import { useAuthContext } from "../Context/AuthContextModified";
import axios from "axios";
import toast from "react-hot-toast";

const BlogForm = () => {
  const { user } = useAuthContext();
  //handling file
  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    title: "",
    body: "",
    user,
  });

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select an image!");

    // Use FormData to include the file along with the title and body
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", data.title);
    formData.append("body", data.body);
    formData.append("name", user.name);
    formData.append("createdBy", user._id);

    //FOR DEVELOPMENT
    // http://localhost:5001/api/blog/add-new

    try {
      const res = await axios
        .post(
          "https://bajrang-2-0-server.vercel.app/api/blog/add-new",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(() => {
          setData({ title: "", body: "" });
          setFile(null); // Reset the file input

          // if (res.status === 201) {
          toast.success("Blog Added !");
          navigate("/blog"); //redirect to blog page
          window.location.reload(); // Reload the page to fetch the updated blogs
          // }
        })
        .catch((error) => {
          console.error("Error submitting the blog:", error);
        });
    } catch (error) {
      console.error("Error submitting the blog:", error);
    }
  };

  return (
    <div className="container px-4 mx-auto max-w-7xl">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="pb-12 border-b border-gray-900/10">
            <h1 className="text-2xl font-semibold text-gray-900">Blog</h1>
            <p className="mt-1 text-gray-600 text-sm/6">
              This information will be displayed publicly, so be careful what
              you share.
            </p>

            <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="block font-medium text-gray-900 text-sm/6"
                >
                  Title :
                </label>
                <div className="mt-2">
                  <div className="flex items-center pl-3 bg-white rounded-md outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      value={data.title}
                      onChange={(e) =>
                        setData({ ...data, title: e.target.value })
                      }
                      id="title"
                      name="title"
                      type="text"
                      placeholder="Enter the title"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="body"
                  className="block font-medium text-gray-900 text-sm/6"
                >
                  Content :
                </label>
                <div className="mt-2">
                  <textarea
                    id="body"
                    value={data.body}
                    onChange={(e) => setData({ ...data, body: e.target.value })}
                    name="body"
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
                <p className="mt-3 text-gray-600 text-sm/6">
                  Write a few sentences about the blog.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block font-medium text-gray-900 text-sm/6"
                >
                  Cover photo
                </label>
                <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
                  <div className="text-center">
                    <PhotoIcon
                      aria-hidden="true"
                      className="mx-auto text-gray-300 size-12"
                    />
                    <div className="flex mt-4 text-gray-600 text-sm/6">
                      <label
                        htmlFor="file-upload"
                        className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          // name="coverImage"
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileChange(e)}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-gray-600 text-xs/5">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
