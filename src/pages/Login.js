import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Checkbox,
  Card,
  Typography,
  message,
} from "antd";
import { UserOutlined, LockOutlined, LoadingOutlined } from "@ant-design/icons";

import { AuthActions } from "stores/actions";
import { _login } from "services/booksApi";
import { useEffect } from "react";
import { getAuthToken } from "services/cookiesService";

const { Title, Paragraph } = Typography;

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    remember: false,
  });
  useEffect(() => {
    if (!!getAuthToken()) {
      history.push("/");
    }
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    const target = e.target;
    const value = target.name === "remember" ? target.checked : target.value;
    setUser({
      ...user,
      [target.name]: value,
    });
  };

  const onFinish = async (user) => {
    try {
      setLoading(true);
      const res = await _login(user);
      dispatch(AuthActions.setToken(res.data.token));
      history.push("/");
    } catch (error) {
      setLoading(false);
      message.error("Username or password incorrect");
      console.log(error);
    }
  };

  return (
    <Row
      justify='center'
      align='middle'
      style={{ minHeight: "100vh", background: "#333" }}
    >
      <Col xs={18} sm={12} lg={6}>
        <Card>
          <Title level={2} align='middle'>
            Login
          </Title>
          <Form
            name='normal_login'
            className='login-form'
            initialValues={user}
            onFinish={onFinish}
          >
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
              <Checkbox
                name='remember'
                checked={user.remember}
                onChange={handleChange}
              >
                Remember me
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button block type='primary' htmlType='submit' disabled={loading}>
                {loading ? <LoadingOutlined /> : "Log in"}
              </Button>
              <Paragraph align='middle'>
                Or <Link to='/register'>register now!</Link>
              </Paragraph>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
