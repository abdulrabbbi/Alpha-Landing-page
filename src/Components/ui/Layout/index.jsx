import { Layout as AntLayout, Drawer, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons"
import React, { useState } from "react";
import { Navbar, Sidebar } from "../../ui";

const { Sider, Content } = AntLayout;

const Layout = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <AntLayout>
        <Navbar onMenuClick={() => setDrawerVisible(true)} />

        <Drawer
          placement="left"
          closable={false} 
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          bodyStyle={{ padding: 0, position: "relative" }}
          drawerStyle={{ paddingTop: 40 }} 
        >
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={() => setDrawerVisible(false)}
            style={{
              position: "absolute",
              top: 8,
              right: 8, 
              zIndex: 1000,
            }}
          />

          <Sidebar onItemClick={() => setDrawerVisible(false)} />
        </Drawer>

        <Content className="p-4 bg-white">{children}</Content>
      </AntLayout>
    </AntLayout>
  );
};

export { Layout };
