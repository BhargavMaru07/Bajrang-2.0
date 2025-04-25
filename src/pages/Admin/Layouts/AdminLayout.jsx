import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../../../Shared/AdminSidebar";
import useTitle from "../../../Hooks/title";
// import AdminSidebar from "../Components/AdminSidebar";
// import { SidebarProvider } from "@/components/ui/sidebar";

const AdminLayout = () => {
  useTitle("Admin Dashboard");
  return (
    <>
      {/* <SidebarProvider> */}
      <div className="flex flex-col gap-2 mb-6 md:grid md:grid-cols-12">
        <div className=" md:col-span-2 bg-bg">
          {/* <div className="flex w-full"> */}
          <AdminSidebar />
        </div>
        {/* </div> */}
        <div className="px-4 md:col-span-10 ">
          {/* <div className="flex-1 p-4"> */}
          <Outlet />
          {/* </div> */}
        </div>
      </div>
      {/* </SidebarProvider> */}
    </>
  );
};

export default AdminLayout;
