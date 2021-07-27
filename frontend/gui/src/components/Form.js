import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
//버전 달라짐 :https://ant.design/components/form/v3
const CustomForm = ({ requestType, articleID, btnText }) => {
  const [form] = Form.useForm();

  const formLayout = "horizontal";

  const onFinish = (values) => {
    if (requestType === "post") {
      return axios
        .post("http://127.0.0.1:8000/api/", {
          title: values.title,
          content: values.content,
        })
        .then((res) => console.log(res))
        .catch((err) => console.err(err));
    }
    if (requestType === "put") {
      return axios
        .put(`http://127.0.0.1:8000/api/${articleID}/`, {
          title: values.title,
          content: values.content,
        })
        .then((res) => console.log(res))
        .catch((err) => console.err(err));
    }
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item name="title" label="Title">
          <Input placeholder="Put a title here" />
        </Form.Item>
        <Form.Item name="content" label="Content">
          <Input placeholder="Enter some content" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">
            {btnText}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CustomForm;
