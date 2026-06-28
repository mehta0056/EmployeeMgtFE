import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  SettingOutlined,
  MoonOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Flex,
  Input,
  Space,
  Typography,
} from "antd";

const { Title } = Typography;

interface HeaderProps {
  collapsed: boolean;
  onToggle: () => void;
  title?: string;
}

const Header = ({ collapsed, onToggle, title = "Dashboard" }: HeaderProps) => {
  const items = [
    {
      key: "profile",
      label: "Profile",
    },
    {
      key: "settings",
      label: "Settings",
    },
    {
      type: "divider" as const,
    },
    {
      key: "logout",
      danger: true,
      label: "Logout",
    },
  ];

  return (
    <header
      style={{
        background: "#FFFFFF",
        padding: "0 24px",
        height: 70,
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Flex justify="space-between" align="center" style={{ height: "100%" }}>
        {/* Left */}

        <Flex align="center" gap={16}>
          <Button
            type="text"
            onClick={onToggle}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />

          <Title
            level={4}
            style={{
              margin: 0,
            }}
          >
            {title}
          </Title>
        </Flex>

        {/* Right */}

        <Space size={18}>
          <Input
            placeholder="Search..."
            prefix={<SearchOutlined />}
            style={{
              width: 260,
            }}
          />

          <Badge count={5}>
            <Button type="text" icon={<BellOutlined />} />
          </Badge>

          <Button type="text" icon={<MoonOutlined />} />

          <Button type="text" icon={<SettingOutlined />} />

          <Dropdown menu={{ items }} trigger={["click"]}>
            <Space
              style={{
                cursor: "pointer",
              }}
            >
              <Avatar
                style={{
                  background: "#F97316",
                }}
                icon={<UserOutlined />}
              />

              <div>
                <div
                  style={{
                    fontWeight: 600,
                  }}
                >
                  Naresh
                </div>

                <div
                  style={{
                    color: "#999",
                    fontSize: 12,
                  }}
                >
                  Administrator
                </div>
              </div>
            </Space>
          </Dropdown>
        </Space>
      </Flex>
    </header>
  );
};

export default Header;
