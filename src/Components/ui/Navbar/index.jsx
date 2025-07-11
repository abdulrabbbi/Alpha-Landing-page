import React from "react";
import { Button, Tooltip } from "antd";
import {
  MenuOutlined,
  UserOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const Navbar = ({ onMenuClick }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-black text-white border-b border-gray-700">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="text-white text-2xl p-1 font-bold hover:bg-white/10 rounded-md"
        >
          <MenuOutlined />
        </button>

        <div className="flex items-center gap-2">
          <img src="/assets/icon/Logo.png" alt="Alpha" className="h-12 w-16 " />
          <span className="text-white text-lg font-semibold border-r-2 border-white pr-3">
            Alpha.com
          </span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-300 ">My Alpha</span>

            <Button
              color="default"
              variant="filled"
              size="small"
              className="custom-white-btn"
            >
              Switch to buyer site
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          color="default"
          variant="filled"
          size="small"
          className="custom-white-btn"
        >
          Start selling
        </Button>

        <div className="flex items-center gap-2">
          <Tooltip title="Help">
            <Button
              type="text"
              icon={<QuestionCircleOutlined className="text-white text-2xl" />}
              className="!text-white !hover:bg-gray-700 !border-none p-0"
              style={{ fontSize: "30px" }}
            />
          </Tooltip>

          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
            <UserOutlined className="text-white text-base" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
