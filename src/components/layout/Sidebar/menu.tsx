import {
  DashboardOutlined,
  TeamOutlined,
  ApartmentOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export interface AppMenuItem {
  key: string;
  label: string;
  icon: React.ComponentType;
}

export const menuItems: AppMenuItem[] = [
  {
    key: "/dashboard",
    label: "Dashboard",
    icon: DashboardOutlined,
  },
  {
    key: "/employees",
    label: "Employees",
    icon: TeamOutlined,
  },
  {
    key: "/departments",
    label: "Departments",
    icon: ApartmentOutlined,
  },
  {
    key: "/profile",
    label: "Profile",
    icon: UserOutlined,
  },
  {
    key: "/settings",
    label: "Settings",
    icon: SettingOutlined,
  },
];
