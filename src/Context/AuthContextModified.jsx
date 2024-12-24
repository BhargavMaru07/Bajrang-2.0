import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    // Update the token state whenever the local storage changes
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

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
  };

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        userLogout,
        isLoggedIn,
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
