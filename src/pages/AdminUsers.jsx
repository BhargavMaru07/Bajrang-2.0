import React, { useState, useEffect } from "react";
import Progress from "../helper/Progress";
import { useAdminContext } from "../Context/AdminContext";
import { ICONS } from "../assets/Icons/icon";
import userProfile from "../assets/Logo/profile1.png";

const AdminUsers = () => {
  const { users: initialUsers, isLoading } = useAdminContext();

  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));

      fetch(`https://bajrang-2-0-server.vercel.app/api/admin/${userId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete user");
          }
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  };

  const filteredUsers = users.filter((user) => {
    const name = user.name?.toLowerCase() || "";
    const email = user.email?.toLowerCase() || "";
    const phone = user.phone?.toString().toLowerCase() || "";
    return (
      name.includes(searchTerm) ||
      email.includes(searchTerm) ||
      phone.includes(searchTerm)
    );
  });

  if (isLoading) {
    return <Progress />;
  }

  return (
    <div className="bg-gray-100">
      <div className="container p-4 mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-full sm:w-1/3">
            <input
              className="w-full p-2 pr-10 border border-gray-300 rounded"
              placeholder="Search"
              type="text"
              value={searchTerm}
              onChange={handleSearch}
            />
            <ICONS.SEARCH
              size={16}
              className="absolute w-5 text-gray-400 transition-colors duration-200 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
            />
          </div>

          <div className="items-center hidden space-x-2 sm:flex">
            <button className="flex items-center px-4 py-2 text-white transition-colors duration-200 bg-blue-600 rounded hover:text-gray-300">
              <ICONS.USERS
                size={20}
                className="mr-2 tracking-wider text-white-400"
              />
              Invite
            </button>
            <i className="text-gray-400 fas fa-ellipsis-v"></i>
          </div>
        </div>

        <div className="bg-white rounded shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    <input className="form-checkbox" type="checkbox" />
                  </th>
                  {[
                    "User",
                    "Phone Number",
                    "Email",
                    "Edit",
                    "Delete",
                    "Date",
                  ].map((item, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody
                className="bg-white divide-y divide-gray-200"
                key={users.id}
              >
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input className="form-checkbox" type="checkbox" />
                      </td>
                      <td className="flex items-center px-6 py-4 whitespace-nowrap">
                        <img
                          alt="User profile picture"
                          className="w-10 h-10 rounded-full"
                          height="40"
                          src={userProfile}
                          width="40"
                        />
                        <span className="ml-4">{user.name}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-blue-500">Edit</button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          className="text-red-500"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.createdAt.toString().slice(0, 10)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No User Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
