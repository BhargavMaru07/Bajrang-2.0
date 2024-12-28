import React, { useEffect } from "react";
import { useAuthContext } from "../Context/AuthContextModified";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const { userLogout } = useAuthContext();

  useEffect(() => {
    userLogout(); // Call the logout function
  }, [userLogout]);

  return <Navigate to="/" />;
};

export default Logout;
