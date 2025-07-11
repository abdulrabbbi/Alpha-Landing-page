import React from "react";
import {
  Seller,
  IndustryInsight,
  IndustryInsightChart,
  EmailSection,
  VerifyEmailBanner,
} from "../../Components";

const Home = () => {
  return (
    <div style={{ padding: "24px" }}>
      <Seller />
      <IndustryInsight />
      <IndustryInsightChart />
      <VerifyEmailBanner />
      <EmailSection />
    </div>
  );
};

export { Home };
