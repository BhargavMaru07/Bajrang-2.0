import React from "react";
import { classNames } from "../helper/index";
import Button from "../Styles/Button";

const Animated = ({
  className,
  id,
  label,
  image,
  description,
  animation,
  ...props
}) => {
  return (
    <div {...props} className={classNames("w-full relative", className)}>
      <div className="flex flex-col justify-center w-1/2 h-full xl:w-2/5 xl:ml-20">
        <h4
          className={classNames(
            "z-[60] mb-4 text-[#7b9496] uppercase text-2xl font-medium",
            animation
          )}
        >
          {description || ""}
        </h4>
        <h1
          className={classNames(
            "z-[60] mb-6 text-[#52586d] text-7xl font-normal",
            animation
          )}
        >
          {label || ""}
        </h1>
        <Button className="ulinaBTN">
          <span>Explore Now</span>
        </Button>
      </div>
      <div className="top-1/2 -translate-y-1/2 right-0 xl:right-36 absolute w-[700px] h-[700px] bg-white rounded-full">
        <img
          alt="slider_image"
          className={classNames(
            "absolute !w-[500px] xl:!w-[600px]",
            "right-0 xl:right-16"
          )}
          src={image}
        />
      </div>
    </div>
  );
};

export default Animated;
