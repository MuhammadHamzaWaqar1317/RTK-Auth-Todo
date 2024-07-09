import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const PublicRoute = () => {
  return (
    <>
      <Header renderBtn={false} />
      <Outlet />
    </>
  );
};

export default PublicRoute;
