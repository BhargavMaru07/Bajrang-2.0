import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();
const API = "https://bajrang-2-0-server.vercel.app/api/blog";

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const response = await axios.get(API);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // const addBlogToState = (newBlog) => {
  //   setBlogs((prevBlogs) => [newBlog, ...prevBlogs]);
  // };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs }}>
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook
const useBlogContext = () => {
  return useContext(BlogContext);
};

export { BlogProvider, useBlogContext };
