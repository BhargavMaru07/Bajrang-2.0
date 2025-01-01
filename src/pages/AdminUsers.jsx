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
    <body class="bg-gray-100">
      <div class="container mx-auto p-4">
        <div class="flex justify-between items-center mb-4">
          <div className="relative w-1/3">
            <input
              className="w-full p-2 pr-10 border border-gray-300 rounded"
              placeholder="Search"
              type="text"
            />  
            <ICONS.SEARCH
              size={16}
              className="absolute w-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-200 hover:text-gray-600"
            />
          </div>

          <div class="flex items-center space-x-2">
            <button class="bg-blue-600 text-white px-4 py-2 rounded flex items-center transition-colors duration-200 hover:text-gray-300">
              <ICONS.USERS
                size={20}
                className="text-white-400 tracking-wider mr-2 "
              />
              Invite
            </button>
            <i class="fas fa-ellipsis-v text-gray-400"></i>
          </div>
        </div>
        <div class="bg-white shadow rounded">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input class="form-checkbox" type="checkbox" />
                </th>
                {[
                  "User",
                  "Phone Number",
                  "Email",
                  "Edit",
                  "Delete",
                  "Date",
                ].map((item) => (
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <input class="form-checkbox" type="checkbox" />
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap flex items-center">
                    <img
                      alt="User profile picture"
                      class="h-10 w-10 rounded-full"
                      height="40"
                      src="https://via.placeholder.com/100"
                      width="40"
                    />
                    <span class="ml-4">{user.name}</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td class="px-6 py-4 whitespace-nowrap"><button className="text-blue-500">Edit</button></td>
                  <td class="px-6 py-4 whitespace-nowrap"><button className="text-red-500">Delete</button></td>
                  <td class="px-6 py-4 whitespace-nowrap">01/01/2025</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </body>
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

