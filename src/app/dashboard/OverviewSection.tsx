import React, { Suspense } from "react";
import { Heading } from "../../components";
import TotalOrderSummary from "../../components/TotalOrderSummary";

const dashboardStatsGrid = [
  {
    orderImage: "img_box_svgrepo_com.svg",
    orderText: "Total order",
    orderCount: "10",
  },
  { orderImage: "img_clock.svg", orderText: "Pending", orderCount: "5" },
  {
    orderImage: "img_box_check_svgrepo_com.svg",
    orderText: "Confirmed",
    orderCount: "3",
  },
  {
    orderImage: "img_fail_error_aler.svg",
    orderText: "Cancelled",
    orderCount: "2",
  },
  {
    orderImage: "img_delivery_truck.svg",
    orderText: "On going",
    orderCount: "1",
  },
  {
    orderImage: "img_tick_svgrepo_com.svg",
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
