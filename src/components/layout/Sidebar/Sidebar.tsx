import { Menu } from "antd";
import React from "react";
import { menuItems } from "./menu";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Menu
      mode="inline"
      theme="dark"
      selectedKeys={[location.pathname]}
      items={menuItems.map((item) => ({
        ...item,
        icon: <item.icon />,
      }))}
      onClick={({ key }) => navigate(key)}
    />
  );
};

export default Sidebar;
