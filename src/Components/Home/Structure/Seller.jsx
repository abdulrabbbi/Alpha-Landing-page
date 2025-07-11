import React from "react";
import { Button, Row, Col, Card, Typography, Space, Image } from "antd";
import {
  ShopOutlined,
  AppstoreAddOutlined,
  RiseOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { InfoCard } from "../../../Components";

const { Title, Text, Paragraph } = Typography;

const cardData = [
  {
    icon: <ShopOutlined style={{ fontSize: 24, color: "#1f2937" }} />,
    title: "Set up storefront",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis dapibus sapien, sed lacinia ligula pulvinar et.",
  },
  {
    icon: <AppstoreAddOutlined style={{ fontSize: 24, color: "#1f2937" }} />,
    title: "Post products",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis dapibus sapien, sed lacinia ligula pulvinar et.",
  },
  {
    icon: <RiseOutlined style={{ fontSize: 24, color: "#1f2937" }} />,
    title: "Get traffic",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis dapibus sapien, sed lacinia ligula pulvinar et.",
  },
  {
    icon: <TeamOutlined style={{ fontSize: 24, color: "#1f2937" }} />,
    title: "Find new business",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis dapibus sapien, sed lacinia ligula pulvinar et.",
  },
];
const Seller = () => {
  return (
    <div >
      <Card
        style={{
          backgroundColor: "#2a60c5",
          border: "none",
          borderRadius: "16px",
          marginBottom: "32px",
          minHeight: "300px",
          position: "relative",
          overflow: "hidden",
        }}
        bodyStyle={{ padding: "48px" }}
      >
        <Row align="middle" gutter={[48, 24]}>
          <Col xs={24} md={14}>
            <Space direction="vertical" size="large">
              <Title
                level={1}
                style={{
                  color: "white",
                  margin: 0,
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  lineHeight: 1.2,
                }}
              >
                Start your worldwide business journey with Alpha selling
              </Title>

              <Paragraph
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "16px",
                  lineHeight: 1.3,
                  margin: 0,
                  marginBottom: "4rem",
                }}
              >
                Alpha eCommerce is a global eCommerce platform designed to
                empower entrepreneurs and businesses to sell products worldwide
                with ease. Leveraging integrations with global marketplaces like
                Alibaba, Alpha connects sellers with millions of suppliers and
                customers around the world.
              </Paragraph>

              <Button
                type="primary"
                size="large"
                style={{
                  backgroundColor: "white",
                  color: "#4f46e5",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "600",
                  height: "48px",
                  paddingLeft: "32px",
                  paddingRight: "32px",
                  fontSize: "16px",
                }}
              >
                Become a seller now
              </Button>
            </Space>
          </Col>

          <Col xs={24} md={10}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "60%",
                  height: "90%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Image src="\assets\images\undraw_the-world-is-mine_wnib 1.png" />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "40px",
                  left: "10px",
                  width: "12px",
                  height: "12px",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "30px",
                  width: "16px",
                  height: "16px",
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  borderRadius: "50%",
                }}
              />
            </div>
          </Col>
        </Row>
      </Card>

      <div
        style={{
          marginBottom: "24px",
          padding: "24px",
          backgroundColor: "#fffefe",
        }}
      >
        <Title level={2} style={{ color: "#1f2937", marginBottom: "32px" }}>
          Grow your margins with a suite of toolsbuild for B2B sales
        </Title>

        {/* <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} lg={6}>
            <Card
              hoverable
              style={{
                height: "100%",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
              }}
              bodyStyle={{ padding: "24px" }}
            >
              <Space
                direction="vertical"
                size="medium"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <ShopOutlined
                    style={{ fontSize: "24px", color: "#1f2937" }}
                  />
                  <Title level={4} style={{ margin: 0, color: "#1f2937" }}>
                    Set up storefront
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
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus facilisis dapibus sapien, sed lacinia ligula pulvinar
                  et.
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
          </Col>

          <Col xs={24} sm={12} lg={6}>
            <Card
              hoverable
              style={{
                height: "100%",
                borderRadius: "12px",
                // border: "1px solid #e5e7eb",
              }}
              bodyStyle={{ padding: "24px" }}
            >
              <Space
                direction="vertical"
                size="medium"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <AppstoreAddOutlined
                    style={{ fontSize: "24px", color: "#1f2937" }}
                  />
                  <Title level={4} style={{ margin: 0, color: "#1f2937" }}>
                    Post products
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
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus facilisis dapibus sapien, sed lacinia ligula pulvinar
                  et.
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
          </Col>

          <Col xs={24} sm={12} lg={6}>
            <Card
              hoverable
              style={{
                height: "100%",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
              }}
              bodyStyle={{ padding: "24px" }}
            >
              <Space
                direction="vertical"
                size="medium"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <RiseOutlined
                    style={{ fontSize: "24px", color: "#1f2937" }}
                  />
                  <Title level={4} style={{ margin: 0, color: "#1f2937" }}>
                    Get traffic
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
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus facilisis dapibus sapien, sed lacinia ligula pulvinar
                  et.
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
          </Col>

          <Col xs={24} sm={12} lg={6}>
            <Card
              hoverable
              style={{
                height: "100%",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
              }}
              bodyStyle={{ padding: "24px" }}
            >
              <Space
                direction="vertical"
                size="medium"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <TeamOutlined
                    style={{ fontSize: "24px", color: "#1f2937" }}
                  />
                  <Title level={4} style={{ margin: 0, color: "#1f2937" }}>
                    Find new business
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
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus facilisis dapibus sapien, sed lacinia ligula pulvinar
                  et.
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
          </Col>
        </Row> */}
        <Row gutter={[24, 24]}>
          {cardData.map((item, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <InfoCard {...item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export { Seller };
