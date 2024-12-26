import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();

//FOR PRODUCTION
// const API =  "https://bajrang-2-0-server.vercel.app/api/blog"

//FOR NORMAL USE
const API = "http://localhost:5001/api/blog"

const BlogProvider = ({ children }) => {
  //For All Blogs
  const [blogs, setBlogs] = useState([]);
  //For Single Blog
  const [blog, setBlog] = useState(null);


  //GET ALL BLOGS
  const getBlogs = async () => {
    try {
      const response = await axios.get(API);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };


  //GET SINGLE BLOG
  const getSingleBlog = async (id) => {
    try {
      const response = await axios.get(`${API}/${id}`);
      setBlog(response.data);
      console.log(response.data);
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
    <BlogContext.Provider value={{ blogs, blog ,getSingleBlog}}>
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook
const useBlogContext = () => {
  return useContext(BlogContext);
};

export { BlogProvider, useBlogContext };
