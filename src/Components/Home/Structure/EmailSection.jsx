import React from "react";
import { Card, Button, Row, Col, Typography, Tag, Space, Image } from "antd";
import { MailOutlined, CrownOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const EmailSection = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Card
        className="mb-8 shadow-sm"
        style={{
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          overflow: "hidden",
        }}
        bodyStyle={{ padding: 0 }}
      >
        <div className="flex items-center">{/* Content Section */}</div>
      </Card>

      {/* RFQ Section */}
      <Card
        className="shadow-sm"
        style={{
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
        }}
        bodyStyle={{ padding: "24px" }}
      >
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <Title level={4} className="mb-0 text-gray-900">
              Request for quotations (RFQ)
            </Title>
            <Text className="text-gray-600 text-sm">
              Seize your opportunities and reach millions of buyers
            </Text>
          </div>
        </div>

        <Row gutter={[24, 24]}>
          {/* First RFQ Card */}
          <Col xs={24} lg={12}>
            <Card
              className="h-full"
              style={{
                borderRadius: "8px",
                border: "1px solid #d1d5db",
              }}
              bodyStyle={{ padding: "20px" }}
            >
              <Title level={5} className="mb-4 text-gray-900">
                Custom stainless pendant
              </Title>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <Text className="text-gray-600 text-sm">Destination:</Text>
                  <Text className="text-gray-900 text-sm font-medium">
                    America
                  </Text>
                </div>
                <div className="flex justify-between">
                  <Text className="text-gray-600 text-sm">Quantity:</Text>
                  <Text className="text-gray-900 text-sm font-medium">
                    piece/pieces
                  </Text>
                </div>
                <div className="flex justify-between">
                  <Text className="text-gray-600 text-sm">Time left:</Text>
                  <Text className="text-gray-900 text-sm font-medium">
                    1 day
                  </Text>
                </div>
              </div>

              <Paragraph className="text-gray-600 text-xs leading-relaxed mb-4">
                Through our powerful integration with Alibaba, Alpha gives you
                direct access to thousands of verified manufacturers and
                suppliers around the world
              </Paragraph>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  width: 100,
                }}
              >
                <Tag
                  icon={<CrownOutlined />}
                  color="#ba9633"
                  className="px-3 py-1 text-xs font-medium"
                >
                  Gold medal
                </Tag>
                <Button
                  color="primary"
                  variant="outlined"
                  style={{ width: 200 }}
                >
                  Upgrade and Quote now
                </Button>
              </div>
            </Card>
          </Col>

          {/* Second RFQ Card */}
          <Col xs={24} lg={12}>
            <Card
              className="h-full"
              style={{
                borderRadius: "8px",
                border: "1px solid #d1d5db",
              }}
              bodyStyle={{ padding: "20px" }}
            >
              <Title level={5} className="mb-4 text-gray-900">
                Custom stainless pendant
              </Title>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <Text className="text-gray-600 text-sm">Destination:</Text>
                  <Text className="text-gray-900 text-sm font-medium">
                    America
                  </Text>
                </div>
                <div className="flex justify-between">
                  <Text className="text-gray-600 text-sm">Quantity:</Text>
                  <Text className="text-gray-900 text-sm font-medium">
                    piece/pieces
                  </Text>
                </div>
                <div className="flex justify-between">
                  <Text className="text-gray-600 text-sm">Time left:</Text>
                  <Text className="text-gray-900 text-sm font-medium">
                    1 day
                  </Text>
                </div>
              </div>

              <Paragraph className="text-gray-600 text-xs leading-relaxed mb-4">
                Through our powerful integration with Alibaba, Alpha gives you
                direct access to thousands of verified manufacturers and
                suppliers around the world
              </Paragraph>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  width: 100,
                }}
              >
                <Tag
                  icon={<CrownOutlined />}
                  color="#ba9633"
                  className="px-3 py-1 text-xs font-medium"
                >
                  Gold medal
                </Tag>
                <Button
                  color="primary"
                  variant="outlined"
                  style={{ width: 200 }}
                >
                  Upgrade and Quote now
                </Button>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Bottom Button */}
        <div className="flex justify-center mt-8">
          <Button
            type="primary"
            size="large"
            className="bg-blue-600 hover:bg-blue-700 border-blue-600 font-medium px-8"
            style={{
              borderRadius: "24px",
              height: "44px",
            }}
          >
            Upgrade your industry now
          </Button>
        </div>
      </Card>
    </div>
  );
};

export { EmailSection };
