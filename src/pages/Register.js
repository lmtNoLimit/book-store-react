import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Input, Button, Card, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { _register } from "services/booksApi";

const { Title, Paragraph } = Typography;

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    setUser({
      ...user,
      [target.name]: value,
    });
  };

  const onFinish = async (values) => {
    const { name, username, password } = user;
    try {
      const res = await _register({
        name,
        username,
        password,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row
      justify='center'
      align='middle'
      style={{ minHeight: "100vh", background: "#333" }}
    >
      <Col span={6}>
        <Card>
          <Title level={2} align='middle'>
            Register
          </Title>
          <Form
            name='normal_login'
            className='login-form'
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name='name'
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='Name'
                name='name'
                value={user.name}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              name='username'
              rules={[{ required: true, message: "Username is required" }]}
            >
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='Username'
                name='username'
                value={user.username}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                name='password'
                placeholder='Password'
                value={user.password}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item>
              <Button block type='primary' htmlType='submit'>
                Regsiter
              </Button>
              <Paragraph align='middle'>
                Already have an account <Link to='/login'>login here</Link>
              </Paragraph>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
