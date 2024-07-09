import { Alert } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../../AxiosApi/endpoint/endpoint";
import Form from "../../Components/Form/Form";
import { setUserData } from "../../Redux/Slice/userSlice";

function index() {
  const userData = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleFinish = async (body) => {
    delete body["rememberMe"];

    console.log(body);
    try {
      const res = await signIn(body);
      dispatch(setUserData(res.data));
      sessionStorage.setItem("token", res.data.token);
      console.log(userData);
      navigate("/home");
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      {error && (
        <Alert
          message="Incorrect Username or Password"
          closable={true}
          afterClose={() => setError(false)}
          type="error"
          style={{ position: "fixed", right: "0" }}
        />
      )}

      <Form handleFinish={handleFinish} title="Sign In" renderRemeber={true} />
    </>
  );
}

export default index;
