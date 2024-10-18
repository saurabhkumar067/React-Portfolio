import React from "react";
import Navbar from "./navbarSection/Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex justify-between xs:block lg:flex overflow-hidden">
      <div className="w-1/4 xs:w-full lg:w-1/4">
        <Navbar />
      </div>
      <div className="w-3/4 xs:w-full lg:w-3/4">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
