import { Heading, Img, Text } from "../../components";
import Sidebar from "../../components/Sidebar";
import ImageRowSection from "./ImageRowSection";
import OverviewSection from "./OverviewSection";
import React from "react";
export default function DashboardPage() {
  return (
    <div className="w-full bg-[#ffffff]">
      <header className="bg-[#ffffff] py-2.5 shadow-[0_5px_10px_5px_#0000003f]">
        <div className="container-xs lg:px-5 md:px-5">
          <div className="flex items-center justify-between gap-5 md:flex-col px-[40px]">
            <Text
              size="texts"
              as="p"
              className="mb-1.5 self-end font-['Maven_Pro'] text-[#F25D07] text-[30px] font-normal text-[#000000] lg:text-[25px] md:text-[24px] sm:text-[22px] text-[40px]"
            >
              Warehouse Management
            </Text>
            <div className="flex flex-1 justify-end items-center gap-5">
              <Text
                size="texts"
                as="p"
                className="mb-1.5 self-end font-['Maven_Pro'] text-[30px] font-normal text-[#000000] lg:text-[25px] md:text-[24px] sm:text-[22px]"
              >
                Hi, Admin
              </Text>
              <Img
                src="UserSquare.png"
                width={60}
                height={60}
                alt="User Icon"
                className="h-[60px] object-contain"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-1 flex-col items-start gap-6 bg-[#f8f8f8] w-[calc(100vw-252px)]">
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

        </div>
      </div>
    </div>
  );
}
