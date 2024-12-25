import axios from "axios";
import {createContext, useContext, useEffect, useState} from "react"


const BlogContext = createContext();
const API = "http://localhost:5001/api/blog/";

const BlogProvider = ({children})=>{

   const [blogs, setBlogs] = useState([]);

   const getBlogs = async () => {
     try {
       const response = await axios.get(API);
       console.log(response.data);
       setBlogs(response.data);
     } catch (error) {
       console.error("Error fetching blogs:", error);
     }
   };

    useEffect(()=>{
        getBlogs()
    },[])

    return(
        <BlogContext.Provider value={{blogs}}>
            {children}
        </BlogContext.Provider>
    )
}

//custom hook 

const useBlogContext = ()=>{
    return useContext(BlogContext)
}

export {BlogProvider,useBlogContext}