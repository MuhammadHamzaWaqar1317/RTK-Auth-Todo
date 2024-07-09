import React from "react";
import { Routes, Route } from "react-router-dom";
import Sigin from "../../Pages/SignIn";
import SignUp from "../../Pages/SignUp";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Home from "../../Pages/Home";

const AppLayout = () => {
  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="*" element={<Sigin />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppLayout;
