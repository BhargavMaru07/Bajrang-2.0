import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from "../Reducer/AdminReducer";
import axios from "axios";
import { useAuthContext } from "./AuthContextModified";

const AdminContext = createContext();
const API = "https://bajrang-2-0-server.vercel.app/api/admin/users";

const initialState = {
  users: [],
  isError: false,
  isLoading: false,
  adminsInfo: [],
};

const AdminProvider = ({ children }) => {
  const { authorizationToken, isLoggedIn } = useAuthContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllUser = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      if (isLoggedIn) {
        // Fetch data from API
        const res = await axios.get(url, {
          headers: {
            Authorization: authorizationToken,
          },
        });

        // Ensure the response data is valid
        const allusers = res.data;
        if (!allusers) {
          throw new Error("Can't fetch all users data.");
        }

        // Log products for debugging
        // console.log("All users:", allusers);

        dispatch({ type: "SET_ADMIN_USERS", payload: allusers });
        dispatch({ type: "SET_ADMIN_ONLY", payload: allusers });
      } else {
        console.log("User is not log in OR User is not Admin");
      }
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getAllUser(API);
  }, [isLoggedIn]);

  return (
    <AdminContext.Provider value={{ ...state }}>
      {children}
    </AdminContext.Provider>
  );
};

//custom hook

const useAdminContext = () => {
  return useContext(AdminContext);
};

export { AdminProvider, useAdminContext };
