import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Navigate from "../Shared/Navigate";
// import convertTobase64 from "../helper/convertTobase64";
import { useAuthContext } from "../Context/AuthContextModified";
import addUserProfile from "../assets/Logo/profile1.png";
import useTitle from "../Hooks/title";

const Profile = () => {
  useTitle("My profile");
  const { user, profileUpdate, handleFileChange } = useAuthContext();
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

  return (
    <div>
      <Navigate name={"Profile"} item={user?.name} />
      <div className="grid grid-cols-12 p-0 mx-auto sm:p-0 max-w-7xl">
        <div className="hidden p-6 lg:col-span-4 md:block md:col-span-5 xl:col-span-3">
          <div className="flex flex-col gap-4">
            {user.role === "ADMIN" ? (
              <>
                <Link to="/profile">
                  <div className="p-4 font-medium rounded-xl bg-bg text-[18px] border">
                    Profile
                  </div>
                </Link>
                <Link to="/admin/general">
                  <div className="p-4 font-medium rounded-xl bg-bg text-[18px] border">
                    Admin Page
                  </div>
                </Link>
                <Link to="/blog">
                  <div className="p-4 rounded-xl bg-bg text-[18px] border">
                    Blog
                  </div>
                </Link>
              </>
            ) : (
              <>
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
              </>
            )}
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
              <label htmlFor="profile" className="cursor-pointer">
                <img
                  src={user?.profileImage || addUserProfile}
                  alt="Profile"
                  className="object-cover w-24 h-24 mb-4 rounded-full"
                />
              </label>
              <input
                type="file"
                id="profile"
                accept="image/*"
                // {...register("profile")}
                name="profile"
                onChange={(e) => handleFileChange(e)}
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
              <div>
                <label
                  htmlFor="birthdate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Birth Date
                </label>
                <input
                  id="birthdate"
                  type="date"
                  defaultValue={
                    user.birthdate
                      ? new Date(user.birthdate).toISOString().split("T")[0]
                      : ""
                  }
                  className={`w-full p-2 mt-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  {...register("birthdate", {
                    required: "Birth Date is required",
                  })}
                />
                {errors.birthdate && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.birthdate.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  className={`w-full p-2 mt-2 pb-3 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring ${
                    errors.gender ? "border-red-500" : ""
                  }`}
                  // value={user.gender || ""}
                  {...register("gender", {
                    required: "Gender is required",
                  })}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                {errors.gender && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.gender.message}
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
            <div className="flex flex-col items-start justify-between gap-4 mt-4 sm:items-center sm:flex-row">
              {/* change path according route */}
              <Link
                to={"/"}
                className="flex items-center justify-center flex-1 w-full px-4 py-2 text-green-600 bg-green-100 rounded-md shadow hover:bg-green-200"
              >
                <button>My Orders</button>
              </Link>

              <Link
                to={"/address"}
                className="flex items-center justify-center flex-1 w-full px-4 py-2 text-green-600 bg-green-100 rounded-md shadow hover:bg-green-200"
              >
                <button>Address</button>
              </Link>

              {/* change path according route */}
              <Link
                to="/wishlist"
                className="flex items-center justify-center flex-1 w-full px-4 py-2 text-green-600 bg-green-100 rounded-md shadow hover:bg-green-200"
              >
                <button>My Wishlists</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
