// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <main style={{ flexGrow: 1, padding: "16px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
