import React, { useState } from "react";
import Button from "../Styles/Button";
import logo from "../assets/Logo/logo.png";
import { Link } from "react-router-dom";
import { ICONS } from "../assets/Icons/icon";
import { useAuthContext } from "../Context/AuthContextModified";

const Footer = () => {
  const { user } = useAuthContext();

  const handlesubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-bg p-7 md:p-10">
      <div className="container mx-auto my-0 lg:max-w-[1330px]">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-2">
          <div className="my-2">
            <h2 className="mb-3 font-bold text-text">NEED HELP</h2>
            <div className="flex flex-col">
              <div>
                <Link to="/contact">Contact us</Link>
              </div>
              <div>
                <Link>Return Policy</Link>
              </div>
              <div>
                <Link to="/help">Help Center</Link>
              </div>
              <div>
                <Link to="/profile">Account</Link>
              </div>
            </div>
          </div>
          <div className="my-2">
            <h2 className="mb-3 font-bold text-text">COMPANY</h2>
            <div className="flex flex-col">
              <div>
                <Link to="/about">About us</Link>
              </div>
              <div>
                <Link>Our Team</Link>
              </div>
              <div>
                <Link>Our Location</Link>
              </div>
            </div>
          </div>
          <div className="my-2">
            <h2 className="mb-3 font-bold text-text">MORE INFO</h2>
            <div className="flex flex-col">
              <div>
                <Link>Terms and Condition</Link>
              </div>
              <div>
                <Link>Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className="my-2">
            <h2 className="mb-3 font-bold text-text">SUBSCRIBE</h2>
            <form className="flex flex-col" onSubmit={handlesubmit}>
              <input
                type="email"
                name="email"
                defaultValue={user.email}
                className="p-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring"
                placeholder="user@xyz.com"
                required
              />
              <div>
                <Button>
                  <input type="submit" value="SUBSCRIBE" />
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="container flex flex-col justify-between p-4 sm:flex-row md:items-center">
          <div className="flex flex-col items-center my-3 sm:flex-row md:m-0">
            <div>
              <Link to="/">
                <img src={logo} alt="logo" className="w-[150px]" />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-1 text-text md:ml-4">
              <span className="text-xl font-bold text-text">&copy;</span>{" "}
              {new Date().getFullYear()} All right reserved.
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="mx-2 cursor-pointer text-text">
              <ICONS.TWITTER />
            </div>
            <div className="mx-2 cursor-pointer text-text">
              <ICONS.FACEBOOK />
            </div>
            <div className="mx-2 cursor-pointer text-text">
              <ICONS.INSTAGRAM />
            </div>
            <div className="mx-2 cursor-pointer text-text">
              <ICONS.LINKEDIN />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
