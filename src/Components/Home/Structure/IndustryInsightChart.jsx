import React from "react";
import { Card, Row, Col, Typography, Progress } from "antd";
import { AreaChart, Area, XAxis, ResponsiveContainer } from "recharts";

const { Title, Text } = Typography;

const trendData = [
  { date: "2025-12-12", value: 200 },
  { date: "2025-05-20", value: 230 },
  { date: "2025-11-05", value: 180 },
  { date: "2025-04-23", value: 260 },
];

const keywordData = [
  { keyword: "Laptop", popularity: 2430 },
  { keyword: "Tablet", popularity: 1130 },
  { keyword: "Laptops", popularity: 300 },
  { keyword: "Telegram premium", popularity: 508 },
  { keyword: "monitor", popularity: 324 },
];

const IndustryInsightChart = () => {
  const maxPopularity = Math.max(...keywordData.map((item) => item.popularity));

  return (
    <div style={{ padding: "24px", backgroundColor: "#f9f9fb" }}>
      <Title level={4} style={{ color: "#1f2937", marginBottom: "24px" }}>
        Industry Insight
      </Title>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <Card
            style={{
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              height: "280px",
            }}
            bodyStyle={{ padding: "20px" }}
          >
            <div
              style={{
                marginBottom: "16px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#374151",
                }}
              >
                Buyer demand trend
              </Text>
              <Text
                style={{
                  fontSize: "15px",
                  color: "#46454a",
                }}
              >
                Buyer demand trend in past 2 years
              </Text>
            </div>

            <div style={{ height: "180px", width: "100%" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={trendData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#c4b5fd"
                        stopOpacity={0.3}
                      />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    fill="url(#colorTrend)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card
            style={{
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              height: "280px",
              paddingBottom: "5px"
            }}
            bodyStyle={{ padding: "20px" }}
          >
            <div style={{ marginBottom: "16px" }}>
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Hot keyword search
              </Text>
            </div>

            <div
              style={{
                backgroundColor: "#2a60c5",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              <span>Hot searches</span>
              <span>Popularity</span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {keywordData.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div style={{ width: "50%", paddingRight: "1rem" }}>
                    <Text
                      style={{
                        fontSize: "13px",
                        color: "#374151",
                        textAlign: "left",
                      }}
                    >
                      {item.keyword}
                    </Text>
                  </div>

                  <div
                    style={{
                      width: "1px",
                      height: "100%",
                      backgroundColor: "#e5e7eb",
                      margin: "0 0.5rem",
                    }}
                  />

                  <div
                    style={{
                      width: "50%",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "13px",
                        color: "#374151",
                        width: "40px",
                        textAlign: "right",
                      }}
                    >
                      {item.popularity}
                    </Text>

                    <div style={{ flex: 1 }}>
                      <Progress
                        percent={(item.popularity / maxPopularity) * 100}
                        showInfo={false}
                        strokeColor="#a78bfa"
                        trailColor="#e5e7eb"
                        size="small"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>

      <div style={{ textAlign: "right", marginTop: "24px" }}>
        <a
          href="#"
          style={{
            color: "#4f46e5",
            fontSize: "14px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          View the full industry report &nbsp; &gt;
        </a>
      </div>
    </div>
  );
};

export { IndustryInsightChart };
