import { nanoid } from "@reduxjs/toolkit";
import { Modal as AntdModal, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import {
  useAddTodoMutation,
  useUpdateTodoMutation,
} from "../../Redux/reduxApi/Apis/todoApi";
import { date } from "../../Utils/date";

function Modal({ title, open, isEdit, setOpen, storeRecord }) {
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [form] = useForm();

  if (isEdit && open) {
    const { title, description } = storeRecord;
    form.setFieldsValue({
      title,
      description,
    });
  }

  const resetForm = () => {
    form.resetFields();
    setOpen(false);
  };

  const appendTodo = (body) => {
    addTodo({ ...body, id: nanoid(), date: date(), status: "active" });
    resetForm();
  };

  const editTodo = (body) => {
    const { id, status } = storeRecord;
    updateTodo({ ...body, id, status });
    resetForm();
  };

  const formSubmit = (body) => {
    if (!isEdit) {
      appendTodo(body);
    } else {
      editTodo(body);
    }
  };

  return (
    <AntdModal
      title={title}
      open={open}
      onOk={() => form.submit()}
      onCancel={() => resetForm()}
      className="modal"
      okText="Submit"
    >
      <Form
        requiredMark={false}
        form={form}
        onFinish={formSubmit}
        layout="vertical"
      >
        <Form.Item
          className="label-title"
          label="Title"
          name={"title"}
          rules={[{ required: true, message: "Enter Title" }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Description"
          name={"description"}
          rules={[{ required: true, message: "Enter Description" }]}
        >
          <Input size="large" />
        </Form.Item>
      </Form>
    </AntdModal>
  );
}

export default Modal;
