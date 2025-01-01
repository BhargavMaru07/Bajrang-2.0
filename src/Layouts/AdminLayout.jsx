import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../Shared/AdminSidebar";

const AdminLayout = () => {
  return (
    <>
      <div className="flex flex-col gap-2 border border-black md:grid md:grid-cols-12">
        <div className="border border-black md:col-span-2 bg-bg ">
          <AdminSidebar />
        </div>
        <div className="p-4 border border-black md:col-span-10 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
