import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { antdTheme } from "./theme/antdTheme.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={antdTheme}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ConfigProvider>,
);
