import React from "react";
import { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import CloseIcon from "@mui/icons-material/Close";

const AdminSettngs = () => {
  const [headingText, setHeadingText] = useState("BAJARANG LATKAN ADMINS ");
  const [isEditing, setIsEditing] = useState(false);

  const [isAddingAdmin, setIsAddingAdmin] = useState(false);
  const [newAdminName, setNewAdminName] = useState("");
  const [newAdminRole, setNewAdminRole] = useState("");

  const [admins, setAdmins] = useState([
    { name: "Mayur Kapdi", role: "xyz", img: "" },
    { name: "Bhargav Maru", role: "xyz", img: "" },
    { name: "Jay Odedra", role: "xyz", img: "" },
    { name: "Harsh Vadher", role: "xyz", img: "" },
  ]);

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
      image: "", // Replace with a default image
    };

    setAdmins([...admins, newAdmin]);
    setIsAddingAdmin(false);
    setNewAdminName("");
    setNewAdminRole("");
  };

  return (
    <div>
      {/* heading... */}
      <div className="sm:flex items-center m-2 my-4">
        <div className="size-28 rounded-full bg-[#edf6fe] flex justify-center items-center mr-6 sm:mb-0 mb-4 ">
          <CameraAltOutlinedIcon fontSize="large" className="text-[#87a6c2]" />
        </div>
        <div className="flex grow justify-between ">
          {isEditing ? (
            <input
              type="text"
              value={headingText}
              className="text-3xl font-bold tracking-wide w-full pl-2"
              onChange={(event) => setHeadingText(event.target.value)}
              autoFocus
            />
          ) : (
            <h1 className="text-3xl font-bold tracking-wide w-auto pl-2">
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
              <SaveOutlinedIcon className="cursor-pointer" />
            ) : (
              <EditOutlinedIcon className="cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      {/* workspace admins... */}
      <div className="my-8">
        <h1 className="text-2xl m-2 mt-6">Workspace admins</h1>
        <div className="flex flex-wrap ">
          {admins.map((admin, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#fbfbfb] shadow-md rounded-lg p-2 m-2 h-auto w-32 hover:translate-y-[-2px] hover:shadow-lg transition-transform duration-150"
            >
              <div className="w-full flex flex-row-reverse">
                <CloseIcon
                  fontSize="small"
                  className="cursor-pointer"
                  onClick={() => updateAdmin(index)}
                />
              </div>
              <div className="size-16 bg-gray-300 rounded-full ">
                {admin.img}
              </div>
              <div className="flex flex-col items-center pb-2">
                <span className="font-medium text-sm p-2 mt-2">
                  {admin.name}
                </span>
                <span className="text-xs text-gray-600 p-1 m-x-2">
                  {admin.role}
                </span>
              </div>
            </div>
          ))}

          <div
            className="flex flex-col justify-center items-center border-2 border-blue-600 border-dashed rounded-lg p-2 m-2 cursor-pointer h-44 w-32"
            onClick={handleAddAdmin}
          >
            <p className="text-blue-600 text-5xl font-thin">+</p>
            <br />
            <p className="text-blue-600 text-sm font-medium">Add Admin</p>
          </div>
        </div>
      </div>

      {isAddingAdmin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Add New Admin</h2>
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
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow"
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
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCancelAddAdmin}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitAddAdmin}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      <hr />
      <div className="m-2 flex my-4 h-32">
        <div className="bg-[#fbfbfb]  p-4 rounded-lg shadow-md flex grow flex-col justify-center items-center">
          <span className="text-3xl font-bold">12</span>
          <span className="text-sm text-gray-500 mt-2">User</span>
        </div>
        <div className="bg-[#fbfbfb] mx-2 p-4 rounded-lg shadow-md flex grow flex-col justify-center items-center">
          <span className="text-3xl font-bold">5</span>
          <span className="text-sm text-gray-500 mt-2">Product</span>
        </div>
        <div className="bg-[#fbfbfb] p-4 rounded-lg shadow-md flex grow flex-col justify-center items-center">
          <span className="text-3xl font-bold">3</span>
          <span className="text-sm text-gray-500 mt-2">Admins</span>
        </div>
      </div>
    </div>
  );
};

export default AdminSettngs;
