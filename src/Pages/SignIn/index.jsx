import { Alert } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../../AxiosApi/endpoint/endpoint";
import Form from "../../Components/Form/Form";
import { setUserData } from "../../Redux/Slice/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import showError from "../../Components/Toaster/toaster";

function index() {
  const userData = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFinish = async (body) => {
    delete body["rememberMe"];

    console.log(body);
    try {
      const res = await signIn(body);
      dispatch(setUserData(res.data));
      sessionStorage.setItem("token", res.data.token);
      console.log(userData);
      navigate("/home");
    } catch (error) {
      console.log(error);
      showError();
    }
  };

  return (
    <>
      <Form handleFinish={handleFinish} title="Sign In" renderRemeber={true} />
      <ToastContainer />
    </>
  );
}

export default index;
