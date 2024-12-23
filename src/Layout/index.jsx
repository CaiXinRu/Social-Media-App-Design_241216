import React from "react";
import { Outlet } from "react-router-dom";
import LeftBar from "../components/leftBar/LeftBar";
import NavBar from "../components/navBar/NavBar";
import RightBar from "../components/rightBar/RightBar";
import "../style.scss";

const Layout = () => {
  return (
    <div className="theme-dark">
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
