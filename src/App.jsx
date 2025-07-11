import React from "react";
import { ConfigProvider, theme } from "antd";
import { Layout } from "./Components";
import AppRoutes from "./Routes/Routef";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
     <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
