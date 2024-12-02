import React from "react";
import { Img } from "../../components";

export default function ImageRowSection() {
  return (
    <>
      {/* Image row section */}
      <div className="flex justify-center self-stretch px-14 md:px-5 sm:px-4">
        <Img
          src="img_image_7.png"
          width={1420}
          height={540}
          alt="First Image"
          className="h-[540px] w-[92%] object-contain"
        />
      </div>
    </>
  );
}
