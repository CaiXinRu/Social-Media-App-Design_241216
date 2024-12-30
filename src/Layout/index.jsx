import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import LeftBar from "../components/leftBar/LeftBar";
import NavBar from "../components/navBar/NavBar";
import RightBar from "../components/rightBar/RightBar";
import { DarkModeContext } from "../context/darkModeContext";
import "../style.scss";

const Layout = () => {
  const { darkMode } = useContext(DarkModeContext);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Layout;
