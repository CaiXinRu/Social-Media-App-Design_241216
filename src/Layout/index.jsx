import React from "react";
import { Outlet } from "react-router-dom";
import LeftBar from "../components/leftBar/LeftBar";
import NavBar from "../components/navBar/navBar";
import RightBar from "../components/rightBar/rightBar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default Layout;
