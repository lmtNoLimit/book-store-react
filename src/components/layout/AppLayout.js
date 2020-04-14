import React, { useState } from "react";
import { Layout, Typography, message, Badge, Modal } from "antd";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { AuthActions } from "stores/actions";
import { _logout } from "services/booksApi";
import { getAuthToken } from "services/cookiesService";
import {
  ShoppingCartOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const { Header, Content } = Layout;
const { Paragraph, Text } = Typography;
const { confirm } = Modal;

const AppLayout = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const bookState = useSelector((state) => state.bookReducers, shallowEqual);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await _logout();
      dispatch(AuthActions.logout());
      setLoading(false);
      history.push("/login");
    } catch (error) {
      setLoading(false);
      message.error("Failed to logout. Please try again.");
    }
  };

  const isAuthenticated = !!getAuthToken();

  return (
    <Layout className='layout'>
      <Header className='bg-white flex justify-between shadow z-20'>
        <Paragraph className='logo'>BOOK STORE</Paragraph>
        <div className='flex items-center'>
          {!isAuthenticated && (
            <Link to='/login'>
              <Text>Login</Text>
            </Link>
          )}
          {isAuthenticated && (
            <>
              <Badge dot={bookState.cart.length > 0}>
                <Link to='/cart'>
                  <ShoppingCartOutlined className='text-lg' />
                </Link>
              </Badge>
              <Text
                onClick={() =>
                  confirm({
                    title: "Ready to leave",
                    icon: <ExclamationCircleOutlined />,
                    content: "This action will log you out",
                    okText: "Yes",
                    okType: "primary",
                    visible: loading,
                    confirmLoading: loading,
                    onOk: handleLogout,
                    onCancel: () => {
                      console.log(`Canceled`);
                    },
                  })
                }
                className='ml-3 cursor-pointer'
              >
                Logout
              </Text>
            </>
          )}
        </div>
      </Header>
      <Content className='w-screen min-h-screen px-12 py-5'>
        {props.children}
      </Content>
    </Layout>
  );
};

export default AppLayout;
