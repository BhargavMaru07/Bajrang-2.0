import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(""); // Initialize with null to indicate no user initially
  const isLoggedIn = !!token;

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
      const res = await axios.get("http://localhost:5001/api/auth/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userInfo = res.data;
      setUser(userInfo.userData); // Update user state
    } catch (error) {
      console.error("Can't fetch user data:", error);
      userLogout(); // Logout if authentication fails
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
