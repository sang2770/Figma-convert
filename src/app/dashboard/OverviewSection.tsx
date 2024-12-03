import React, { Suspense } from "react";
import { Heading } from "../../components";
import TotalOrderSummary from "../../components/TotalOrderSummary";

const dashboardStatsGrid = [
  {
    orderImage: "box_svgrepo.com.png",
    orderText: "Total order",
    orderCount: "10",
  },
  { orderImage: "clock-seven_svgrepo.com.png", orderText: "Pending", orderCount: "5" },
  {
    orderImage: "Vector (2).png",
    orderText: "Confirmed",
    orderCount: "3",
  },
  {
    orderImage: "Vector (3).png",
    orderText: "Cancelled",
    orderCount: "2",
  },
  {
    orderImage: "Layer_2.png",
    orderText: "On going",
    orderCount: "1",
  },
  {
    orderImage: "tick_svgrepo.com.png",
    orderText: "Delivered",
    orderCount: "2",
  },
];

export default function OverviewSection() {
  return (
    <>
      {/* Overview section */}
      <div className="mt-6 flex flex-col items-start gap-6 self-stretch px-5">
        <Heading
          size="headingmd"
          as="h1"
          className="font-['Maven_Pro'] text-[40px] font-bold text-[#000000] lg:text-[34px] md:text-[34px] sm:text-[32px]"
        >
          Overview
        </Heading>
        <div className="grid grid-cols-3 gap-[50px] gap-y-6 self-stretch px-[50px] py-2.5 lg:grid-cols-3 md:grid-cols-2 md:px-5 sm:grid-cols-1 sm:px-4">
          <Suspense fallback={<div>Loading feed...</div>}>
            {dashboardStatsGrid.map((d, index) => (
              <TotalOrderSummary {...d} key={"ordersGrid" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}
