import React from "react";
import { Img } from "../../components";

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
            <Img
              src="piechart.png"
              width={400}
              height={400}
              alt="Thumbsup"
              className=""
            />
          </div>
          <div className="legend ml-[100px]">
            <div className="legend-item items-center mb-[10px] flex gap-[10px]">
              <span className="block w-[100px] h-[40px] bg-[#FEF6E6]"></span>
              <span>Pending</span>
            </div>
            <div className="legend-item items-center mb-[10px] flex gap-[10px]">
              <span className="block w-[100px] h-[40px] bg-[#E5F2FC]"></span>
              <span>Ongoing</span>
            </div>
            <div className="legend-item items-center mb-[10px] flex gap-[10px]">
              <span className="block w-[100px] h-[40px] bg-[#F0ECFF]"></span>
              <span>Delivered</span>
            </div>
            <div className="legend-item items-center mb-[10px] flex gap-[10px]">
              <span className="block w-[100px] h-[40px] bg-[#FFEDED]"></span>
              <span>Cancelled</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
