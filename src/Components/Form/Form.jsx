import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
function FormComp({ handleFinish, title, renderRemeber }) {
  const [checkBox, setCheckBox] = useState(null);
  return (
    <>
      <div className="contain-form">
        <div className="inner">
          <div className="form" style={{ width: "100%" }}>
            <h1 style={{ color: "#7c55f6", textAlign: "center" }}>{title}</h1>
            <div className="form-container">
              <Form
                requiredMark={false}
                title="asd"
                style={{ maxWidth: "300px", width: "100%", margin: "auto" }}
                layout="vertical"
                onFinish={(body) => handleFinish(body)}
              >
                <Form.Item
                  className="sign-form"
                  label="Username"
                  name="username"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Username" />
                </Form.Item>
                <Form.Item
                  className="sign-form"
                  label="Password"
                  name="password"
                  rules={[{ required: true }]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
                {renderRemeber && (
                  <div
                    className="asd"
                    style={{
                      display: "flex",

                      justifyContent: "space-between",
                    }}
                  >
                    <Form.Item name="rememberMe">
                      <Checkbox
                        className="checkbox-color"
                        onChange={(e) => setCheckBox(e.target.checked)}
                      >
                        Remember me
                      </Checkbox>
                    </Form.Item>
                    {/* <a style={{ display: "inline", textAlign: "end" }}>Sign up</a> */}
                    <NavLink to={"/SignUp"} style={{ marginTop: "7px" }}>
                      Sign Up
                    </NavLink>
                  </div>
                )}
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-signIN"
                    block
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormComp;
