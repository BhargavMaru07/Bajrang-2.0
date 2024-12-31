import React from "react";
import Progress from "../helper/Progress";
import { useAdminContext } from "../Context/AdminContext";

const Admin = () => {
  const { users, isLoading } = useAdminContext();
  if (isLoading) {
    return <Progress />;
  }
  return (
    <div>
      <h1>User Data : </h1>
      {users.map((user) => {
        return <h1 key={user._id}>{user.name}</h1>;
      })}
    </div>
  );
};

export default Admin;
