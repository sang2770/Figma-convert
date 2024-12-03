"use client";

import React, { useState, useMemo } from "react";
import { Button, Img, Text, Heading, SelectBox, Input } from "../../components";
import Header from "../../components/Header";
import { CloseSVG } from "../../components/Input/close";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { OptionProps } from "react-select";
import SideBar from "@/components/Sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const table1Data = [
  {
    rowid: "01",
    rowcustomer: "ABC",
    rowdateorder: "01/11/2024",
    rowvalue: "200,000 VNÐ",
    rowstatus: "Pending",
  },
];

type Table1RowType = {
  rowid: string;
  rowcustomer: string;
  rowdateorder: string;
  rowvalue: string;
  rowstatus: string;
};

export default function OrderManagementPage() {
  const [searchBarValue2, setSearchBarValue2] = useState("");

  const table1Columns = useMemo(() => {
    const table1ColumnHelper = createColumnHelper<Table1RowType>();

    return [
      table1ColumnHelper.accessor("rowid", {
        cell: (info) => (
          <div className="flex justify-center px-1">
            <Text
              as="p"
              className="w-full text-center text-[20px] font-normal leading-9 text-[#000000] lg:text-[17px]"
            >
              {info.getValue()}
            </Text>
          </div>
        ),
        header: () => (
          <div className="flex px-1">
            <Heading
              as="h2"
              className="w-full text-center text-[25px] font-bold leading-[45px] text-[#ffffff] lg:text-[21px]"
            >
              ID
            </Heading>
          </div>
        ),
        meta: { width: "110px" },
      }),
      table1ColumnHelper.accessor("rowcustomer", {
        cell: (info) => (
          <div className="ml-[38px] flex justify-center">
            <Text
              as="p"
              className="w-[88%] text-[20px] font-normal leading-9 text-[#000000] lg:text-[17px]"
            >
              {info.getValue()}
            </Text>
          </div>
        ),
        header: () => (
          <div className="ml-[38px] flex">
            <Heading
              as="h3"
              className="flex-1 text-center text-[25px] font-bold leading-[45px] text-[#ffffff] lg:text-[21px]"
            >
              Customer
            </Heading>
          </div>
        ),
        meta: { width: "378px" },
      }),
      table1ColumnHelper.accessor("rowdateorder", {
        cell: (info) => (
          <div className="ml-[22px] flex justify-center">
            <Text
              as="p"
              className="w-full text-center text-[28px] font-normal leading-9 text-[#0eeeee] lg:text-[17px]"
            >
              {info.getValue()}
            </Text>
          </div>
        ),
        header: () => (
          <div className="ml-[22px] flex">
            <Heading
              as="h4"
              className="w-full text-center text-[25px] font-bold leading-[45px] text-[#ffffff] lg:text-[21px]"
            >
              Date Order
            </Heading>
          </div>
        ),
        meta: { width: "294px" },
      }),
      table1ColumnHelper.accessor("rowvalue", {
        cell: (info) => (
          <div className="ml-[30px] flex justify-center">
            <Text
              as="p"
              className="w-full text-center text-[20px] font-normal leading-9 text-[#000000] lg:text-[17px]"
            >
              {info.getValue()}
            </Text>
          </div>
        ),
        header: () => (
          <div className="ml-[30px] flex">
            <Heading
              as="h5"
              className="w-full text-center text-[25px] font-bold leading-[45px] text-[#ffffff] lg:text-[21px]"
            >
              Value
            </Heading>
          </div>
        ),
        meta: { width: "262px" },
      }),
      table1ColumnHelper.accessor("rowstatus", {
        cell: (info) => (
          <div className="ml-[52px] flex flex-1 items-center justify-center sm:flex-col">
            <Text
              as="p"
              className="text-center text-[28px] font-normal leading-9 text-[#000000] lg:text-[17px] sm:px-5"
            >
              {info.getValue()}
            </Text>
            <Img
              src="img_edit.svg"
              width={40}
              height={40}
              alt="Edit"
              className="ml-[84px] h-[40px] sm:ml-0 sm:w-full"
            />
            <Img
              src="img_thumbs_up.svg"
              width={40}
              height={40}
              alt="Thumbs Up"
              className="ml-9 h-[40px] sm:ml-0 sm:w-full"
            />
          </div>
        ),
        header: () => (
          <div className="ml-[52px] flex flex-1">
            <Heading
              as="h6"
              className="w-[48%] text-center text-[25px] font-bold leading-[45px] text-[#ffffff] lg:text-[21px]"
            >
              Status
            </Heading>
          </div>
        ),
        meta: { width: "410px" },
      }),
    ];
  }, []);

  return (
    <div className="w-full bg-[#ffffff]">
      <Header />
      <div className="flex items-start gap-10">
        <SideBar />
        <div className="flex flex-1 flex-col gap-[30px]">
          <div className="mr-5 flex items-center justify-center md:mr-0 md:flex-col">
            <Heading
              size="headingmd"
              as="h1"
              className="font-['Maven_Pro'] text-[40px] font-bold text-[#000000] lg:text-[34px] md:px-5 md:text-[34px] sm:text-[32px]"
            >
              Order
            </Heading>
            <div className="flex flex-1 justify-end md:flex-col md:self-stretch md:px-5">
              <Input
                color="white_A700"
                size="xs"
                variant="fill"
                name="Search Field"
                placeholder={"Search"}
                value={searchBarValue2}
                onChange={(e) => setSearchBarValue2(e.target.value)}
                prefix={
                  <div className="flex h-[20px] w-[20px] items-center justify-center">
                    <Img
                      src="img_rewind.svg"
                      width={20}
                      height={20}
                      alt="Rewind"
                      className="h-[20px] w-[20px] object-contain"
                    />
                  </div>
                }
                suffix={
                  searchBarValue2.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue2("")} />
                  ) : null
                }
                className="w-[20%] gap-2.5 rounded-[5px] border border-[#f25d07] font-['Nunito_Sans'] text-[#f25d07] md:w-full"
              />
              <SelectBox
                shape="round"
                indicator={
                  <Img
                    src="img_arrowdown.svg"
                    width={24}
                    height={20}
                    alt="Arrow Down"
                  />
                }
                getOptionLabel={(e: OptionProps) => (
                  <div className="flex items-center">
                    <Img
                      src="img_pluscircle.svg"
                      width={20}
                      height={20}
                      alt="Plus-circle"
                    />
                    <span>{e.label}</span>
                  </div>
                )}
                name="Filter Dropdown"
                placeholder={`Filter`}
                options={dropDownOptions}
                className="ml-5 w-[8%] gap-2.5 rounded-[5px] border border-solid border-[#f25d87] font-['Nunito_Sans'] md:ml-0 md:w-full"
              />
              <Button
                color="orange_800"
                size="xs"
                leftIcon={
                  <Img
                    src="img_pluscircle_white_a700.svg"
                    width={20}
                    height={20}
                  />
                }
                className="ml-5 min-w-[136px] gap-1 rounded-[5px] px-2 font-['Nunito_Sans'] md:ml-0"
              >
                Add Order
              </Button>
            </div>
          </div>
          <ReactTable
            variant="simple"
            bodyProps={{
              className:
                "before:content-['-'] before:opacity-0 before:leading-[60px]",
            }}
            headerCellProps={{ className: "bg-[#f25d07]" }}
            rowDataProps={{ className: "bg-[#ffffff]" }}
            cellProps={{
              className: "border-[#000000] border-t border-b border-solid",
            }}
            className="self-stretch"
            columns={table1Columns}
            data={table1Data}
          />
        </div>
        {/* Pagination Controls */}
        <div className="mr-5 flex justify-end gap-[11px] px-5 md:mr-8">
          <Button
            shape="round"
            className="min-w-[116px] rounded-[10px] px-2 font-['Nunito_Sans']"
          >
            Previous
          </Button>
          <Button
            shape="round"
            className="min-w-[44px] rounded-[10px] px-3.5 font-['Nunito_Sans']"
          >
            1
          </Button>
          <Button
            shape="round"
            className="min-w-[44px] rounded-[18px] px-3.5 font-['Nunito_Sans']"
          >
            2
          </Button>
          <Button
            shape="round"
            className="min-w-[74px] rounded-[10px] px-2 font-['Nunito_Sans']"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
