import { Heading } from "../../components";
import ImageRowSection from "./ImageRowSection";
import OverviewSection from "./OverviewSection";
import React from "react";
export default function DashboardPage() {
  return (
    <>
      {/* overview section */}
      <OverviewSection />

      <Heading
        size="headingmd"
        as="h2"
        className="px-5 m1-5 font-['Maven_Pro'] text-[40px] font-bold text-[#000000] lg:text-[34px] md:ml-0 md:text-[34px] sm:text-[32px]"
      >
        Statistics
      </Heading>
      {/* image row section */}
      <ImageRowSection />
    </>
  );
}
