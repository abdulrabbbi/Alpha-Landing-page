// import React from "react";
// import {
//   HomeFilled,
//   DollarCircleOutlined,
//   InboxOutlined,
//   AppstoreOutlined,
//   ToolOutlined,
//   ShopOutlined,
// } from "@ant-design/icons";
// import { Menu } from "antd";
// import { NavLink } from "react-router-dom";

// const Sidebar = ({ onItemClick }) => {
//   return (
//     <Menu
//       mode="inline"
//       selectable={false}
//       onClick={onItemClick}
//       style={{ height: "90%", borderRight: 0, background: "#f0f2f5" }}
//     >
//       <Menu.Item key="home" icon={<HomeFilled />}>
//         <NavLink to="/">Home</NavLink>
//       </Menu.Item>
//       <Menu.Item key="rfq" icon={<DollarCircleOutlined />}>
//         <NavLink to="/request-quotation">Request for Quotation</NavLink>
//       </Menu.Item>
//       <Menu.Item key="my-quotes" icon={<InboxOutlined />}>
//         <NavLink to="/my-quotes">My Quotes</NavLink>
//       </Menu.Item>
//       <Menu.Item key="products" icon={<AppstoreOutlined />}>
//         <NavLink to="/products">Products</NavLink>
//       </Menu.Item>
//       <Menu.Item key="tools" icon={<ToolOutlined />}>
//         <NavLink to="/tools">Tools</NavLink>
//       </Menu.Item>
//       <Menu.Item key="store" icon={<ShopOutlined />}>
//         <NavLink to="/store">Store</NavLink>
//       </Menu.Item>
//     </Menu>
//   );
// };

// export { Sidebar };


import React from "react";
import {
  HomeFilled,
  DollarCircleOutlined,
  InboxOutlined,
  AppstoreOutlined,
  ToolOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

const Sidebar = ({ onItemClick }) => {
  return (
    <div className="h-full bg-gray-100 border-r border-gray-300">
      <Menu
        mode="inline"
        selectable={true}
        onClick={onItemClick}
        style={{ 
          height: "100%", 
          borderRight: 0, 
          background: "transparent",
          fontSize: "14px"
        }}
        className="sidebar-menu"
      >
        <Menu.Item 
          key="home" 
          icon={<HomeFilled style={{ fontSize: "16px" }} />}
          className="sidebar-item"
        >
          <NavLink to="/" className="sidebar-link">
            Home
          </NavLink>
        </Menu.Item>
        
        <Menu.Item 
          key="rfq" 
          icon={<DollarCircleOutlined style={{ fontSize: "16px" }} />}
          className="sidebar-item"
        >
          <NavLink to="/request-quotation" className="sidebar-link">
            Request for Quotation
          </NavLink>
        </Menu.Item>
        
        <Menu.Item 
          key="my-quotes" 
          className="sidebar-item"
        >
          <NavLink to="/my-quotes" className="sidebar-link pl-6">
            My quotes
          </NavLink>
        </Menu.Item>
        
        <Menu.Item 
          key="products" 
          icon={<AppstoreOutlined style={{ fontSize: "16px" }} />}
          className="sidebar-item"
        >
          <NavLink to="/products" className="sidebar-link">
            Products
          </NavLink>
        </Menu.Item>
        
        <Menu.Item 
          key="tools" 
          className="sidebar-item"
        >
          <NavLink to="/tools" className="sidebar-link pl-6">
            Tools
          </NavLink>
        </Menu.Item>
        
        <Menu.Item 
          key="store" 
          icon={<ShopOutlined style={{ fontSize: "16px" }} />}
          className="sidebar-item"
        >
          <NavLink to="/store" className="sidebar-link">
            Store
          </NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export { Sidebar };