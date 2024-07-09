import { Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Button, Flex, Popconfirm, Select, Table } from "antd";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import {
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "../../Redux/reduxApi/Apis/todoApi";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";

function Todo() {
  const { data } = useGetTodosQuery();
  const { Title, Text } = Typography;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateTodo] = useUpdateTodoMutation();
  const userData = useSelector((state) => state.userSlice.userData);

  const [deleteTodo] = useDeleteTodoMutation();
  const [storeRecord, setStoreRecord] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const [tasks, setTasks] = useState("");

  const color = {
    active: null,
    completed: "danger",
    pending: "warning",
  };
  useEffect(() => {
    setTasks(data);
  }, [data]);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      align: "left",
      render: (_, record) => (
        <>
          <Title
            className={record.status == "completed" ? `title-complete` : ``}
            type={color[record.status]}
            style={{ margin: "0px" }}
            level={4}
          >
            {record.title}
          </Title>
        </>
      ),
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",

      render: (_, record) => (
        <Select
          onChange={(value) => updateTodo({ ...record, status: value })}
          placeholder="Select Status"
          style={{ width: 120 }}
          defaultValue={record.status}
          options={[
            {
              value: "active",
              label: "Active",
            },
            {
              value: "pending",
              label: "Pending",
            },
            {
              value: "completed",
              label: "Completed",
            },
          ]}
        />
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      dataIndex: "label",
      align: "right",
      key: "label",
      render: (_, record) => (
        <Flex justify="end" gap="middle">
          <Button ghost type="primary" onClick={() => editTodo(record)}>
            <CiEdit size={20} />
          </Button>
          <Popconfirm
            title="Delete Task"
            description="Are you sure to delete this task?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteTodo({ ...record })}
          >
            <Button ghost danger>
              <MdDeleteOutline size={20} />
            </Button>
          </Popconfirm>
        </Flex>
      ),
    },
  ];

  const editTodo = (editObj) => {
    setIsEdit(true);
    setStoreRecord(editObj);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="main">
        <Row>
          <div className="container">
            <Table
              dataSource={tasks}
              columns={columns}
              rowKey={(record) => record.id}
              style={{ overflow: "auto" }}
              expandable={{
                expandedRowRender: (record) => (
                  <>{<Text>{record.description}</Text>}</>
                ),
              }}
            />
          </div>
        </Row>

        <Modal
          title="Update Item"
          open={isModalOpen}
          setOpen={setIsModalOpen}
          isEdit={isEdit}
          storeRecord={storeRecord}
        />
      </div>
    </>
  );
}

export default Todo;
