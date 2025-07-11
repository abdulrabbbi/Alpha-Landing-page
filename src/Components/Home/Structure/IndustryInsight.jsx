import React, { useState } from "react";
import { Button, Select, Row, Col, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Option } = Select;

const IndustryInsight = () => {
  const industries = [
    "Agriculture",
    "Foods & Beverage",
    "Fabric and textile",
    "Electrical Equipments",
    "Leather Product",
    "Yarn",
    "Fiber",
  ];

  return (
    <div >
      <div className="bg-[#2d4778] text-white p-6 rounded-xl">
        <Row align="middle" justify="space-between">
          <Col>
            <Space align="center" size="middle">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <UserOutlined style={{ fontSize: 20, color: "white" }} />
              </div>
              <span className="text-base font-medium ml-4">
                Add your industry and view the according industry report
              </span>
            </Space>
          </Col>

          <Col>
            <Space size="middle" className="gap-4">
              <Select
                placeholder="Please select industry"
                style={{ width: 200, height: 32 }}
                dropdownStyle={{
                  backgroundColor: "white",
                  border: "1px solid #d9d9d9",
                  borderRadius: "6px",
                }}
              >
                {industries.map((industry) => (
                  <Option key={industry} value={industry}>
                    {industry}
                  </Option>
                ))}
              </Select>

              <Button
                type="primary"
                style={{
                  backgroundColor: "white",
                  color: "#4f46e5",
                  border: "none",
                  fontWeight: "600",
                  height: 32,
                  paddingLeft: 16,
                  paddingRight: 16,
                }}
              >
                Save
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export { IndustryInsight };
