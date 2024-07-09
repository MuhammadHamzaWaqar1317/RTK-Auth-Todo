import React from "react";
import FormComp from "../../Components/Form/Form";

function index() {
  const handleFinish = (body) => {};
  return (
    <>
      <FormComp
        handleFinish={handleFinish}
        title="Sign Up"
        renderRemeber={false}
      />
    </>
  );
}

export default index;
