import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Navigate from "../Shared/Navigate";
import convertTobase64 from "../helper/convertTobase64";
import { useAuthContext } from "../Context/AuthContextModified";

const Profile = () => {
  const [file, setFile] = useState("");
  const { user, profileUpdate } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Add update logic here
    try {
      profileUpdate(data);
    } catch (error) {
      console.log("Form not Submitted !!");
    }
  };

  const onUpload = async (e) => {
    const base64 = await convertTobase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div>
      <Navigate name={"Home"} item={"Profile"} />
      <div className="grid grid-cols-12 p-0 mx-auto sm:p-0 max-w-7xl">
        <div className="hidden p-6 lg:col-span-4 md:block md:col-span-5 xl:col-span-3">
          <div className="flex flex-col gap-4">
            <Link to="/profile">
              <div className="p-4 font-medium rounded-xl bg-bg text-[18px] border">
                Profile
              </div>
            </Link>
            <Link to="/blog">
              <div className="p-4 rounded-xl bg-bg text-[18px] border">
                Blog
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-12 p-6 bg-white rounded-lg lg:col-span-8 md:col-span-7 xl:col-span-9">
          <div className="flex items-center justify-between pb-4 mb-6 border-b">
            <h1 className="text-2xl font-bold">Profile Information</h1>
            <Link to="/logout">
              <button className="text-red-500 hover:underline">Sign Out</button>
            </Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col items-start">
              <label htmlFor="profile">
                <img
                  src={file || "https://via.placeholder.com/100"}
                  alt="Profile"
                  className="object-cover w-24 h-24 mb-4 rounded-full"
                />
              </label>
              <input
                type="file"
                id="profile"
                // {...register("profile")}
                name="profile"
                onChange={onUpload}
                className="hidden"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  defaultValue={user.firstName}
                  className={`w-full  p-2 mt-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  defaultValue={user.lastName}
                  className={`w-full p-2 mt-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="number"
                  defaultValue={user.phone}
                  className={`w-full p-2 mt-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  defaultValue={user.email}
                  className={`w-full p-2 mt-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-[200px] px-2 py-3 text-white bg-pink-500 rounded-md shadow hover:bg-pink-600"
            >
              Update Profile
            </button>
          </form>

          <div className="pt-4 mt-8 border-t">
            <h2 className="text-lg font-semibold">Account Information</h2>
            <div className="flex items-center justify-between mt-4 space-x-2">
              {/* change path according route */}
              <button className="flex items-center justify-center flex-1 px-4 py-2 text-green-600 bg-green-100 rounded-md shadow hover:bg-green-200">
                <Link to={"/"}>My Orders</Link>
              </button>

              <button className="flex items-center justify-center flex-1 px-4 py-2 text-green-600 bg-green-100 rounded-md shadow hover:bg-green-200">
                <Link to={"/address"}>Address</Link>
              </button>

              {/* change path according route */}
              <button className="flex items-center justify-center flex-1 px-4 py-2 text-green-600 bg-green-100 rounded-md shadow hover:bg-green-200">
                <Link to={"/"}> My Wishlists</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
