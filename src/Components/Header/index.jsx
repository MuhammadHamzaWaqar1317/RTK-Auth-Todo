import { Button, Col, Row, Avatar, Dropdown, Typography, Spin } from "antd";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { icons } from "antd/es/image/PreviewGroup";
import { UserSwitchOutlined } from "@ant-design/icons";
import { setUserData } from "../../Redux/Slice/userSlice";

function SpinComp() {
  console.log("SPIN COMP");

  const [percent, setPercent] = useState(0);

  return <></>;
}

function Header({ renderBtn }) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const userData = useSelector((state) => state.userSlice.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showLoader = () => {
    console.log("loader");
    setSpinning(true);
    let ptg = -10;

    const interval = setInterval(() => {
      ptg += 25;

      if (ptg > 100) {
        clearInterval(interval);
        setSpinning(false);
      }
    }, 500);
  };

  const handleSignOut = () => {
    sessionStorage.setItem("token", "");
    dispatch(setUserData({}));

    showLoader();
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  const items = [
    {
      label: (
        <div className="dropdown-logo">
          <Avatar size={40} src={userData.image} />
          <div className="dropDown-text">
            <h5>{`${userData.firstName} ${userData.lastName}`}</h5>
            <p style={{ fontSize: "12px" }}>{userData.email}</p>
          </div>
        </div>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <p onClick={handleSignOut}>Sign Out</p>,
      key: "3",

      icon: <UserSwitchOutlined size={20} />,
    },
  ];

  return (
    <header className="header">
      <h4 className="logo">
        to
        <span className="do">do</span>
      </h4>

      {renderBtn && (
        <div>
          <Button className="AddTodo" onClick={() => setisModalOpen(true)}>
            Add Task
          </Button>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <Avatar size={32} src={userData.image} />
          </Dropdown>
          {/* <Avatar size={32} src={"https://dummyjson.com/icon/emilys/128"} /> */}
        </div>
      )}

      <Modal title="Add item" open={isModalOpen} setOpen={setisModalOpen} />
      <Spin spinning={spinning} percent={false} fullscreen />
    </header>
  );
}

export default Header;
