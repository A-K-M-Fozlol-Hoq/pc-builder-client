// DashboareLayout.js
import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  HomeOutlined,
  ProfileOutlined,
  CommentOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

const DashboareLayout = ({ children }) => {
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  // For demonstration purposes, using a dummy email
  const userEmail = "example@example.com";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={200}
        theme="light"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div style={{ height: "32px", margin: "16px", textAlign: "center" }}>
          <div style={{ fontWeight: "bold", fontSize: "18px" }}>Fozlol</div>
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[selectedButton]}
          onClick={({ key }) => handleButtonClick(key)}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="Products" icon={<ProfileOutlined />}>
            Products
          </Menu.Item>
          <Menu.Item key="Categories" icon={<CommentOutlined />}>
            Categories
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header
          style={{
            background: "#fff",
            padding: 0,
            boxShadow: "0 1px 4px rgba(0,21,41,.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: "24px",
          }}
        >
          <span style={{ marginRight: "10px" }}>{userEmail}</span>
          <div>
            <Button type="primary" style={{ marginRight: "10px" }}>
              Login
            </Button>
            <Button>Logout</Button>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
            padding: 24,
            minHeight: "calc(100vh - 72px)",
            backgroundColor: "#fff",
            boxShadow: "0 2px 8px rgba(0,21,41,.08)",
          }}
        >
          {React.cloneElement(children, { selectedButton })}
        </Content>
        <footer
          style={{
            textAlign: "center",
            padding: "8px 0",
            background: "#f0f2f5",
          }}
        >
          © {new Date().getFullYear()} Assignment 6
        </footer>
      </Layout>
    </Layout>
  );
};

export default DashboareLayout;
