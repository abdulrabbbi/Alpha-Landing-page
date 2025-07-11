import React from "react";
import { Typography, Button, Image } from "antd";

const { Title, Text } = Typography;

const VerifyEmailBanner = () => {
  return (
    <div className="bg-[#f1f4fb] px-8 py-6 rounded-md">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left section */}
        <div className="flex items-start gap-4">
          <div className="min-w-[48px]">
            <Image
              src="/assets/images/Frame 568.png"
              alt="Email Icon"
              width={200}
              height={200}
            />
          </div>
          <div style={{margin: "auto 0"}}>
            <Title
              level={4}
              className="!mb-2 text-gray-900 !text-base md:!text-lg"
            >
              Remember to verify your email
            </Title>
            <Text className="text-gray-600 text-sm leading-relaxed">
              Verify yourbb email address now to receive the alpha.com seller
              playbook, full of <br />
              step-by-step instructions and insider tips
            </Text>
          </div>
        </div>

        {/* Right section */}
        <div>
          <Button
            type="default"
            size="large"
            className="text-blue-600 border-blue-600 hover:bg-blue-50 font-medium px-8"
            style={{
              borderRadius: "24px",
              height: "40px",
              backgroundColor: "white",
            }}
          >
            Verify now
          </Button>
        </div>
      </div>
    </div>
  );
};

export { VerifyEmailBanner };
