import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const AllRoutes = () => {
  const routes = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return routes;
};

export default AllRoutes;
