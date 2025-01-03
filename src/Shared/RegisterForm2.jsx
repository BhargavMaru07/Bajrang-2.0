import React, { useRef } from "react";
import Button from "../Styles/Button";
import { Link, useNavigate } from "react-router-dom";
import welcome from "../assets/Auth/welcome.jpg";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthContext } from "../Context/AuthContextModified";
import { sendEmail } from "../helper/sendemail";

const RegisterForm2 = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { storeTokenInLS } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://bajrang-2-0-server.vercel.app/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      sendEmail(form);

      if (response.ok) {
        const res_data = await response.json();
        // console.log("Json Data :", res_data);
        storeTokenInLS(res_data.token);

        reset();
        toast.success("Registration Successfully !");
        navigate("/login");
      }
      // console.log(response);
    } catch (error) {
      console.error("Can't post user data", error);
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <div className="w-full lg:w-9/12">
        <div className="flex items-center justify-center">
          <img src={welcome} alt="welcome" className="w-[300px]" />
        </div>
        <div className="p-6">
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <div>
              <label htmlFor="name" className="py-2 text-text">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="John Doe"
                className={`w-full p-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="py-2 text-text">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                placeholder="user@xyz.com"
                className={`w-full p-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="py-2 text-text">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="●●●●●●●●●●"
                className={`w-full p-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="py-2 text-text">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                placeholder="●●●●●●●●●●"
                className={`w-full p-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button className="w-full">
              <input type="submit" value="Sign Up" />
            </Button>
            <p className="mt-3 text-center text-text">
              Already have an account?{" "}
              <Link
                to="/login"
                className="cursor-pointer text-btn hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm2;
