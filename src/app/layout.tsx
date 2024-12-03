import React, { ReactNode } from "react";
import "@/styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";
import { Img, Text } from "@/components";
import SideBar from "@/components/Sidebar";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="w-full bg-[#ffffff]">
          <header className="bg-[#ffffff] py-2.5 shadow-[0_5px_10px_5px_#0000003f] sticky top-0 left-0 z-[1]">
            <div className="container-xs lg:px-5 md:px-5">
              <div className="flex items-center justify-between gap-5 md:flex-col px-[40px]">
                <Text
                  size="texts"
                  as="p"
                  className="mb-1.5 self-end font-['Maven_Pro'] text-[#F25D07] text-[30px] font-normal text-[#000000] lg:text-[40px]  md:text-[24px] sm:text-[22px] text-[40px] leading-[60px]"
                >
                  Warehouse Management
                </Text>
                <div className="flex flex-1 justify-end items-center gap-5">
                  <Text
                    size="texts"
                    as="p"
                    className="leading-[60px] mb-1.5 self-end font-['Maven_Pro'] text-[30px] font-normal text-[#000000] lg:text-[25px] md:text-[24px] sm:text-[22px]"
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
            <SideBar />
            <div className="flex flex-1 flex-col items-start gap-6 bg-[#f8f8f8] w-[calc(100vw-252px)]">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
