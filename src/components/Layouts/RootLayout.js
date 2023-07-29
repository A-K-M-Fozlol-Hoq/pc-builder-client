import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  DesktopOutlined,
  ProfileOutlined,
  UserOutlined,
  MobileOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#404040",
          color: "white",
        }}
      >
        <div className="brand-logo">
          <h1 style={{ margin: 0 }}>
            <Link href="/">
              <span
                style={{
                  color: "white",
                  cursor: "pointer",
                }}
              >
                PC BUILDER
              </span>
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link href="/">
              <span className="menu-item">Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link href="/pc-builder">
              <span className="menu-item">PC Builder</span>
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            key="3"
            icon={<ProfileOutlined />}
            // title="Categories"
            title={<span className="menu-item">Categories</span>}
            popupOffset={[0, 10]}
          >
            <Menu.Item key="3-1">
              <Link href="/category/cpu_processor">CPU / Processor</Link>
            </Menu.Item>
            <Menu.Item key="3-2">
              <Link href="/category/motherboard">Motherboard</Link>
            </Menu.Item>
            <Menu.Item key="3-3">
              <Link href="/category/ram">RAM</Link>
            </Menu.Item>
            <Menu.Item key="3-4">
              <Link href="/category/power_supply_unit">Power Supply Unit</Link>
            </Menu.Item>
            <Menu.Item key="3-5">
              <Link href="/category/storage_device">Storage Device</Link>
            </Menu.Item>
            <Menu.Item key="3-6">
              <Link href="/category/monitor">Monitor</Link>
            </Menu.Item>
            <Menu.Item key="3-7">
              <Link href="/category/others">Others</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Header>

      <Content
        style={{ padding: "0 24px", minHeight: "100vh", marginBottom: "120px" }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
          background: "#f0f0f0",
          padding: "16px 0",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <h2 style={{ fontSize: "28px" }}>PC BUILDER</h2>
        <p style={{ marginBottom: 0 }}>
          <Link href="https://web.facebook.com">
            <FacebookFilled
              style={{
                fontSize: "24px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
          </Link>
          <Link href="https://twitter.com">
            <TwitterSquareFilled
              style={{
                fontSize: "24px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
          </Link>
          <Link href="https://google.com">
            <GoogleSquareFilled
              style={{
                fontSize: "24px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
          </Link>
          <Link href="https://www.linkedin.com/">
            <LinkedinFilled
              style={{
                fontSize: "24px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
          </Link>
        </p>
        <p>PC Builder © {new Date().getFullYear()} Created by Fozlol Hoq</p>
      </Footer>

      <style jsx>{`
        @media (max-width: 768px) {
          .brand-logo {
            flex: 1;
            display: flex;
            justify-content: center;
          }

          .brand-logo h1 {
            font-size: 16px;
          }

          .menu-item {
            display: none;
          }
        }
      `}</style>
    </Layout>
  );
};

export default RootLayout;
