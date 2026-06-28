import { Button, type ButtonProps } from "antd";
import React from "react";

const CustomButton = ({
  children,
  ...props
}: ButtonProps & { children: React.ReactNode }) => {
  return (
    <Button
      {...props}
      style={{
        ...props.style,
        fontWeight: 700,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
