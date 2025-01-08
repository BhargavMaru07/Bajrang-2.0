import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../Shared/AdminSidebar";
import useTitle from "../Hooks/title";

const AdminLayout = () => {
  useTitle("Admin Dashboard");
  return (
    <>
      <div className="flex flex-col gap-2 mb-6 md:grid md:grid-cols-12">
        <div className=" md:col-span-2 bg-bg">
          <AdminSidebar />
        </div>
        <div className="px-4 md:col-span-10 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
