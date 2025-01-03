import React from "react";
import { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { ICONS } from "../assets/Icons/icon";
import { useAdminContext } from "../Context/AdminContext";
import { useProductContext } from "../Context/ProductContext";
import Progress from "../helper/Progress";

const ImgUrl =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

const AdminSettngs = () => {
  const [headingText, setHeadingText] = useState("BAJRANG LATKAN ADMINS ");
  const [isEditing, setIsEditing] = useState(false);

  const [isAddingAdmin, setIsAddingAdmin] = useState(false);
  const [newAdminName, setNewAdminName] = useState("");
  const [newAdminRole, setNewAdminRole] = useState("");

  const [admins, setAdmins] = useState([
    { name: "Mayur Kapadi", role: "Developer", img: ImgUrl },
    { name: "Bhargav Maru", role: "Developer", img: ImgUrl },
    { name: "Jay Odedra", role: "Developer", img: ImgUrl },
    { name: "Harsh Vadher", role: "Developer", img: ImgUrl },
  ]);

  const { users, adminsInfo, isLoading } = useAdminContext();
  const { products } = useProductContext();
  const updateAdmin = (index) => {
    setAdmins(admins.filter((_, i) => i !== index));
  };

  const handleAddAdmin = () => {
    setIsAddingAdmin(true);
  };

  const handleCancelAddAdmin = () => {
    setIsAddingAdmin(false);
    setNewAdminName("");
    setNewAdminRole("");
  };

  const handleSubmitAddAdmin = () => {
    const newAdmin = {
      name: newAdminName,
      role: newAdminRole,
      img: ImgUrl, // Replace with a default image
    };

    setAdmins([...admins, newAdmin]);
    setIsAddingAdmin(false);
    setNewAdminName("");
    setNewAdminRole("");
  };

  if (isLoading) {
    return <Progress />;
  }

  return (
    <div>
      {/* heading... */}
      <div className="items-center m-2 my-4 sm:flex">
        <div className="size-28 rounded-full bg-[#edf6fe] flex justify-center items-center mr-6 sm:mb-0 mb-4 ">
          <ICONS.CAMERA fontSize="large" className="text-[#87a6c2]" />
        </div>
        <div className="flex justify-between grow ">
          {isEditing ? (
            <input
              type="text"
              value={headingText}
              className="w-full pl-2 text-3xl font-bold tracking-wide"
              onChange={(event) => setHeadingText(event.target.value)}
              autoFocus
            />
          ) : (
            <h1 className="w-auto pl-2 text-3xl font-bold tracking-wide">
              {headingText}
            </h1>
          )}
          <div
            className="flex items-center ml-2"
            onClick={
              isEditing ? () => setIsEditing(false) : () => setIsEditing(true)
            }
          >
            {isEditing ? (
              <ICONS.SAVE className="cursor-pointer" />
            ) : (
              <ICONS.EDITADMIN className="cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      {/* workspace admins... */}
      <div className="my-8">
        <h1 className="m-2 mt-6 text-2xl">Workspace admins</h1>
        <div className="flex flex-wrap ">
          {admins.map((admin, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-bg cursor-pointer shadow-md rounded-lg p-2 m-2 h-auto w-32 hover:translate-y-[-2px] hover:shadow-lg transition-transform duration-150 text-center"
            >
              <div className="flex flex-row-reverse w-full">
                <ICONS.CLOSE
                  fontSize="small"
                  className="cursor-pointer"
                  onClick={() => updateAdmin(index)}
                />
              </div>
              <div className="size-16">
                <img
                  src={admin.img}
                  alt="admin profile"
                  className="rounded-full "
                />
              </div>
              <div className="flex flex-col items-center pb-2">
                <span className="p-2 mt-2 text-sm font-medium">
                  {admin.name}
                </span>
                <span className="p-1 text-xs text-gray-600 m-x-2">
                  {admin.role}
                </span>
              </div>
            </div>
          ))}

          <div
            className="flex flex-col items-center justify-center w-32 p-2 m-2 border-2 border-blue-600 border-dashed rounded-lg cursor-pointer h-44"
            onClick={handleAddAdmin}
          >
            <p className="text-5xl font-thin text-blue-600">+</p>
            <br />
            <p className="text-sm font-medium text-blue-600">Add Admin</p>
          </div>
        </div>
      </div>

      {isAddingAdmin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-lg font-semibold">Add New Admin</h2>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={newAdminName}
                onChange={(e) => setNewAdminName(e.target.value)}
                className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role:
              </label>
              <input
                type="text"
                id="role"
                value={newAdminRole}
                onChange={(e) => setNewAdminRole(e.target.value)}
                className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCancelAddAdmin}
                className="px-4 py-2 mr-2 font-bold text-gray-700 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitAddAdmin}
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      <hr />
      <div className="flex h-32 m-2 my-4 text-center">
        <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-bg grow">
          <span className="text-3xl font-bold">{users.length}</span>
          <span className="mt-2 text-sm text-text">Total Users</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 mx-2 rounded-lg shadow-md bg-bg grow">
          <span className="text-3xl font-bold">{products.length}</span>
          <span className="mt-2 text-sm text-text">Total Products</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-bg grow">
          <span className="text-3xl font-bold">{adminsInfo.length}</span>
          <span className="mt-2 text-sm text-text">Total Admins</span>
        </div>
      </div>
    </div>
  );
};

export default AdminSettngs;
