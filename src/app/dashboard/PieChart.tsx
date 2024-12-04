"use client"; // Dành cho Next.js app directory

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Khởi tạo biểu đồ
    const chart = echarts.init(chartRef.current);

    // Cấu hình biểu đồ
    const option = {
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: "Status",
          type: "pie",
          radius: "50%",
          data: [
            { value: 40, name: "Pending", itemStyle: { color: "#FEF6E6" } },
            { value: 30, name: "Ongoing", itemStyle: { color: "#E5F2FC" } },
            { value: 20, name: "Delivered", itemStyle: { color: "#F0ECFF" } },
            { value: 10, name: "Cancelled", itemStyle: { color: "#FFEDED" } },
          ],
          labelLine: {
            show: false, // Ẩn đường gạch nối
          },
          label: {
            show: false, // Ẩn nhãn trên biểu đồ
          },
        },
      ],
    };

    // Render biểu đồ với option
    chart.setOption(option);

    // Cleanup khi component bị unmount
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <div ref={chartRef} style={{ width: "500px", height: "500px" }} />
      {/* Custom legend */}
      <div className="legend ml-[100px] mt-[20px]">
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
  );
};

export default PieChart;
