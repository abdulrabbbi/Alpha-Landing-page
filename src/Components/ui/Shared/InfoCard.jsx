import React from "react";
import { Card, Space, Typography, Button } from "antd";
const { Title, Paragraph } = Typography;

const InfoCard = ({ icon, title, description }) => {
  return (
    <Card
      hoverable
      style={{
        height: "100%",
      }}
      bodyStyle={{ padding: "24px" }}
    >
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          {icon}
          <Title level={4} style={{ margin: 0, color: "#1f2937" }}>
            {title}
          </Title>
        </div>

        <Paragraph
          style={{
            color: "#6b7280",
            fontSize: "14px",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {description}
        </Paragraph>

        <Button
          type="link"
          style={{
            padding: 0,
            color: "#4f46e5",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          Learn more
        </Button>
      </Space>
    </Card>
  );
};

export { InfoCard };
