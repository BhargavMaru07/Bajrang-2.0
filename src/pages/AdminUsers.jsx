import React from "react";
import Progress from "../helper/Progress";
import { useAdminContext } from "../Context/AdminContext";
import { ICONS } from "../assets/Icons/icon";

const AdminUsers = () => {
  // const { users, isLoading } = useAdminContext();

  const users = [
    { id: 1, name: "Bhargav maru", phone: "56556565965", email: "shfjsh" },
    { id: 1, name: "Bhargav maru", phone: "56556565965", email: "shfjsh" },
    { id: 1, name: "Bhargav maru", phone: "56556565965", email: "shfjsh" },
    { id: 1, name: "Bhargav maru", phone: "56556565965", email: "shfjsh" },
    { id: 1, name: "Bhargav maru", phone: "56556565965", email: "shfjsh" },
  ];

  return (
    <div className="bg-gray-100">
      <div className="container p-4 mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-1/3">
            <input
              className="w-full p-2 pr-10 border border-gray-300 rounded"
              placeholder="Search"
              type="text"
            />
            <ICONS.SEARCH
              size={16}
              className="absolute w-5 text-gray-400 transition-colors duration-200 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
            />
          </div>

          <div className="flex items-center space-x-2">
            <button className="flex items-center px-4 py-2 text-white transition-colors duration-200 bg-blue-600 rounded hover:text-gray-300">
              <ICONS.USERS
                size={20}
                className="mr-2 tracking-wider text-white-400 "
              />
              Invite
            </button>
            <i className="text-gray-400 fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div className="bg-white rounded shadow">
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
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input className="form-checkbox" type="checkbox" />
                  </td>
                  <td className="flex items-center px-6 py-4 whitespace-nowrap">
                    <img
                      alt="User profile picture"
                      className="w-10 h-10 rounded-full"
                      height="40"
                      src="https://via.placeholder.com/100"
                      width="40"
                    />
                    <span className="ml-4">{user.name}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-500">Edit</button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-red-500">Delete</button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">01/01/2025</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;

// if (isLoading) {
//   return <Progress />;
// }
// <div>
//   <h1>User Data : </h1>
//   {users.map((user) => {
//     return <h1 key={user._id}>{user.name}</h1>;
//   })}
// </div>
