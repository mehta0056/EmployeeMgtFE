// src/theme/antdTheme.ts

import type { ThemeConfig } from "antd";
import { COLORS } from "./colors";

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: COLORS.primary,
    colorSuccess: COLORS.success,
    colorWarning: COLORS.warning,
    colorError: COLORS.error,
    colorInfo: COLORS.info,

    colorBgLayout: COLORS.layoutBg,
    colorBgContainer: COLORS.cardBg,

    colorText: COLORS.textPrimary,
    colorTextSecondary: COLORS.textSecondary,

    colorBorder: COLORS.border,
    wireframe: false,
    controlHeight: 41, // Default height for controls
    controlHeightLG: 50, // Large controls
    controlHeightSM: 36, // Small controls
  },

  components: {
    Layout: {
      bodyBg: COLORS.layoutBg,
      headerBg: COLORS.headerBg,
      siderBg: COLORS.sidebarBg,
      footerBg: COLORS.footerBg,
    },

    Menu: {
      darkItemBg: COLORS.sidebarBg,
      darkItemColor: COLORS.sidebarText,
      darkItemHoverBg: COLORS.sidebarHover,
      darkItemSelectedBg: COLORS.sidebarActive,
      darkItemSelectedColor: COLORS.textWhite,
    },

    Button: {
      colorPrimary: COLORS.primary,
      colorPrimaryHover: COLORS.primaryHover,
      colorPrimaryActive: COLORS.primaryActive,
    },

    Table: {
      headerBg: COLORS.tableHeader,
      rowHoverBg: COLORS.tableHover,
    },

    Card: {
      colorBgContainer: COLORS.cardBg,
    },

    Input: {
      activeBorderColor: COLORS.primary,
      hoverBorderColor: COLORS.primaryHover,
    },

    Select: {
      activeBorderColor: COLORS.primary,
      hoverBorderColor: COLORS.primaryHover,
    },
  },
};
