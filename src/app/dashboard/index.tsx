import { Heading, Img, Text } from "../../components";
import Sidebar2 from "../../components/Sidebar2";
import ImageRowSection from "./ImageRowSection";
import OverviewSection from "./OverviewSection";
import React from "react";
export default function DashboardPage() {
  return (
    <div className="w-full bg-[#ffffff]">
      <header className="bg-[#ffffff] py-2.5 shadow-[0_5px_10px_5px_#0000003f]">
        <div className="container-xs lg:px-5 md:px-5">
          <div className="flex items-center justify-between gap-5 md:flex-col">
            <Img
              src="img_header_logo.png"
              width={462}
              height={46}
              alt="Header Logo"
              className="h-[46px] w-[462px] object-contain"
            />
            <div className="flex items-center gap-5">
              <Text
                size="texts"
                as="p"
                className="mb-1.5 self-end font-['Maven_Pro'] text-[30px] font-normal text-[#000000] lg:text-[25px] md:text-[24px] sm:text-[22px]"
              >
                Hi, Admin
              </Text>
              <Img
                src="img_user_square.svg"
                width={60}
                height={60}
                alt="User Icon"
                className="h-[60px] w-[30%] object-contain"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="flex gap-5">
        <Sidebar2 />
        <div className="flex flex-1 flex-col items-start gap-6 bg-[#f8f8f8]">
          {/* overview section */}
          <OverviewSection />

          <Heading
            size="headingmd"
            as="h2"
            className="m1-5 font-['Maven_Pro'] text-[40px] font-bold text-[#000000] lg:text-[34px] md:ml-0 md:text-[34px] sm:text-[32px]"
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
