import React from "react";
import Header from "../Header";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // const token = localStorage.getItem("token");
  const token = sessionStorage.getItem("token");
  console.log(token);
  // if (token == "false") return <Navigate to="/login" />;
  if (!token) return <Navigate to="/login" />;

  return (
    <>
      <Header renderBtn={true} />
      <Outlet />
    </>
  );
};

export default PrivateRoute;
