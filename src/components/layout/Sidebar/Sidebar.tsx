import { Menu } from "antd";
import { menuItems } from "./menu";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const getSelectedKey = () => {
    if (location.pathname.startsWith("/employee")) {
      return "/employees";
    }

    if (location.pathname.startsWith("/department")) {
      return "/department";
    }

    return location.pathname;
  };
  return (
    <Menu
      mode="inline"
      theme="dark"
      selectedKeys={[getSelectedKey()]}
      items={menuItems.map((item) => ({
        ...item,
        icon: <item.icon />,
      }))}
      onClick={({ key }) => navigate(key)}
    />
  );
};

export default Sidebar;
