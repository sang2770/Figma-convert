
import React from "react";
import PropTypes from "prop-types";
import { Img } from "../Img";
import { Heading } from "../Heading";
function TotalOrderSummary({
  className = "",
  orderImage = "img_box_svgrepo_com.svg",
  orderText = "Total order",
  orderCount = "10",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${className} flex justify-center items-center w-full p-5 bg-[#ffffff] shadow-[5px_5px_10px_2px_#f25d07] rounded-[10px]`}
    >
      <div className="flex flex-1 items-center gap-2.5">
        <Img src={orderImage} width={60} height={60} alt="Order Image" className="h-[60px] w-[16%] object-contain" />
        <Heading size="headings" as="h3" className="font-['Maven_Pro'] text-[30px] font-bold text-[#000000]">
          {orderText}
        </Heading>
      </div>
      <Heading size="headinglg" as="h1" className="font-['Maven_Pro'] text-[50px] font-bold text-[#f25d07]">
        {orderCount}
      </Heading>
    </div>
  );
}

TotalOrderSummary.propTypes = {
  className: PropTypes.string,
  orderImage: PropTypes.string,
  orderText: PropTypes.node,
  orderCount: PropTypes.node,
};

export default TotalOrderSummary;
