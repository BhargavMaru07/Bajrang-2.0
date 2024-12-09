import React, { useState, useEffect } from "react";

const TruncatedTitle = ({ name, desktopLimit, mobileLimit }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [truncatedTitle, setTruncatedTitle] = useState("");

  // Function to update the title length based on window width
  const updateTruncatedTitle = () => {
    const limit = windowWidth < 640 ? mobileLimit : desktopLimit;
    setTruncatedTitle(
      name.length > limit ? name.slice(0, limit) + "..." : name
    );
  };

  // Update window width and title length on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update truncated title whenever windowWidth or title changes
  useEffect(() => {
    updateTruncatedTitle();
  }, [windowWidth, name]);

  return truncatedTitle;
};

export default TruncatedTitle;
