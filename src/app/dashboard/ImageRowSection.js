import React from "react";
import PieChart from "./PieChart";

export default function ImageRowSection() {
  return (
    <>
      {/* Orders Summary section */}
      <div className="flex flex-col justify-center self-stretch p-10 md:px-5 sm:px-4 bg-white rounded-[10px] mx-[80px]">
        <div className="flex justify-between">
          {" "}
          <h2 className="text-2xl font-bold mb-4">Orders Summary</h2>
          <div className="flex items-center border border-1 border-gray-300 p-2 rounded-lg">
            <input type="date" className="" placeholder="Pick a date" />
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="pie-chart">
            <PieChart />
          </div>
        </div>
      </div>
    </>
  );
}
