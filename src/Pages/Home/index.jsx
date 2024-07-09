import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../Components/Header";
import Todo from "../../Components/Todo";
import { Spin } from "antd";

function Home() {
  return (
    <>
      {/* <Header /> */}
      <Todo />
    </>
  );
}

export default Home;
