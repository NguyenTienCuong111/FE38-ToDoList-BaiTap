import { Button, Card, Space, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate, generatePath, Link } from "react-router-dom";
import { ROUTES } from "constants/routes";

function TaskItem({ item, handleUpdateTask, handleDeleteTask }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();
  const title = item.title;

  if (isUpdate) {
    return (
      <Card size="small" style={{ marginTop: 16 }}>
        <Form
          name="updateTask"
          layout="vertical"
          initialValues={{
            title: item.title,
            content: item.content,
          }}
          onFinish={(values) => {
            handleUpdateTask(item.id, values);
            setIsUpdate(false);
          }}
        >
          <Form.Item label="Tiêu đề" name="title">
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item label="Nội dung" name="content">
            <Input placeholder="Content" />
          </Form.Item>
          <Space style={{ marginTop: 8 }}>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button onClick={() => setIsUpdate(false)}>Cancel</Button>
            <Button
              danger
              onClick={() => {
                handleDeleteTask(item.id);
                setIsUpdate(false);
              }}
            >
              Delete
            </Button>
          </Space>
        </Form>
      </Card>
    );
  }
  return (
    <Card size="small" title={item.title} style={{ marginTop: 16 }}>
      <div>{item.content}</div>
      <Space style={{ marginTop: 8 }}>
        <Link
          to={generatePath(ROUTES.USER.TO_DO_LIST_DETAIL, { id: item.id })}
          state={{
            title: item.title,
            content: item.content,
          }}
        >
          <Button>Detail</Button>
        </Link>
        <Button type="primary" ghost onClick={() => setIsUpdate(true)}>
          Update
        </Button>
        <Button danger onClick={() => handleDeleteTask(item.id)}>
          Delete
        </Button>
      </Space>
    </Card>
  );
}

export default TaskItem;
