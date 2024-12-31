import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(""); // Initialize with null to indicate no user initially
  const isLoggedIn = !!token;

  const authorizationToken = `Bearer ${token}`;

  // Store token in Local Storage and update state
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  // Logout function
  const userLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(""); // Clear the user data on logout
  };

  // JWT Authentication - Fetch currently logged-in user data
  const userAuthentication = async () => {
    if (!token) return; // Skip if no token is available
    try {
      const res = await axios.get(
        "https://bajrang-2-0-server.vercel.app/api/auth/user",
        {
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const userInfo = res.data;
      setUser(userInfo.userData); // Update user state
    } catch (error) {
      console.error("Can't fetch user data:", error);
      userLogout(); // Logout if authentication fails
    }
  };
  const profileUpdate = async (data) => {
    try {
      const res = await axios.patch(
        "https://bajrang-2-0-server.vercel.app/api/auth/user/profile",
        data, // Pass the data as the request body
        {
          headers: {
            Authorization: authorizationToken, // Include the token in the headers
          },
        }
      );

      toast.success("User updated successfully");
      return res.data; // Return the response data
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response?.data || error.message
      );
      throw error; // Propagate the error for further handling
    }
  };

  // Effect to fetch user data whenever the token changes
  useEffect(() => {
    if (token) {
      userAuthentication();
    }
  }, [token]);

  // Effect to sync token with localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        userLogout,
        isLoggedIn,
        user,
        token,
        authorizationToken,
        profileUpdate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use Auth Context
const useAuthContext = () => {
  return useContext(AuthContext);
};

export { useAuthContext, AuthProvider };
