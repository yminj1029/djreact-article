import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";

//버전 달라짐 :https://ant.design/components/form/v3
const CustomForm = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFinish = (event) => {
    console.log(event);
    console.log(form);
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
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
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="title" label="Title">
          <Input placeholder="Put a title here" />
        </Form.Item>
        <Form.Item name="content" label="Content">
          <Input placeholder="Enter some content" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CustomForm;
