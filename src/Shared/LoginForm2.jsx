import React from "react";
import welcome from "../assets/Auth/welcome.jpg";
import { Facebook, GitHub, Google, Instagram } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Styles/Button";
import { toast } from "react-toastify";
import { useAuthContext } from "../Context/AuthContextModified";

const LoginForm2 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { storeTokenInLS } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const res_data = await response.json();
        // console.log("Json Data :", res_data);
        storeTokenInLS(res_data.token);
        reset();
        toast.success("Login Successfully !");
        navigate("/");
      }
      console.log(response);
    } catch (error) {
      console.error("Login Error", error);
    }
  };

  return (
    <>
      <div className="w-full lg:w-9/12">
        <div className="flex items-center justify-center">
          <img src={welcome} alt="welcome" className="w-[300px]" />
        </div>
        <div className="p-6 pt-1">
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
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
            <div className="mt-3 text-end">
              <Link to="/resetpassword" className="hover:text-btn">
                Forget Password?
              </Link>
            </div>
            <Button className="w-full">
              <input type="submit" value="Login" />
            </Button>
            <p className="mt-3 text-center text-text">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="cursor-pointer text-btn hover:underline"
              >
                Register
              </Link>
            </p>
            <div className="flex items-center justify-center">
              <span className="p-1 text-sm font-bold rounded-full text-text">
                OR
              </span>
            </div>
            <div className="text-center">
              <h2>Login with Social Media</h2>
              <div className="flex items-center justify-center p-2">
                <Link
                  className="p-2 mx-1 text-white duration-100 rounded-full bg-btn hover:scale-75 hover:bg-blue-gray-400"
                  //   onClick={handleRegister}
                >
                  <Google />
                </Link>
                <Link
                  className="p-2 mx-1 text-white duration-100 rounded-full bg-btn hover:scale-75 hover:bg-blue-gray-400"
                  //   onClick={handleRegister}
                >
                  <Facebook />
                </Link>
                <Link
                  className="p-2 mx-1 text-white duration-100 rounded-full bg-btn hover:scale-75 hover:bg-blue-gray-400"
                  //   onClick={handleRegister}
                >
                  <GitHub />
                </Link>
                <Link
                  className="p-2 mx-1 text-white duration-100 rounded-full bg-btn hover:scale-75 hover:bg-blue-gray-400"
                  //   onClick={handleRegister}
                >
                  <Instagram />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm2;
