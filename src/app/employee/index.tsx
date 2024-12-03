"use client";

import { Button, Img, Text, Heading } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import Sidebar from "../../components/Sidebar";
import EmployeeSection from "./EmployeeSection";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const tableData = [
  {
    rowid: "01",
    rowname: "John Doe",
    rowdate: "Male",
    rowquantity: "12/12/1998",
    rowvalue: "0987654321",
    rowstatus: "New York",
  },
];

type TableRowType = {
  rowid: string;
  rowname: string;
  rowdate: string;
  rowquantity: string;
  rowvalue: string;
  rowstatus: string;
};

export default function EmployeePage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("rowid", {
        cell: (info) => (
          <div className="flex justify-center px-1">
            <Text
              as="p"
              className="w-full text-center text-[20px] font-normal leading-9 text-[#000000] lg:text-[17px]"
            >
              {info.getValue<string>()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex px-1">
            <Heading
              as="h2"
              className="w-full text-center text-[25px] font-bold leading-[45px] text-[#ffffff] lg:text-[21px]"
            >
              ID
            </Heading>
          </div>
        ),
        meta: { width: "270px" },
      }),

      tableColumnHelper.accessor("rowname", {
        cell: (info) => (
          <div className="ml-4 flex justify-center">
            <Text
              as="p"
              className="w-full text-[20px] font-normal leading-9 text-[#000000] lg:text-[17px]"
            >
              {info.getValue<string>()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="ml-4 flex">
            <Heading
              as="h3"
              className="w-full text-center text-[25px] font-bold leading-[45px] text-[#ffffff] lg:text-[21px]"
            >
              Name
            </Heading>
          </div>
        ),
        meta: { width: "332px" },
      }),

      tableColumnHelper.accessor("rowdate", {
        cell: (info) => (
          <div className="ml-2.5 flex justify-center">
            <Text
              as="p"
              className="w-full text-center text-[20px] font-normal leading-9 text-[#000000] lg:text-[17px]"
            >
              {info.getValue<string>()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="ml-4 flex">
            <Heading
              as="h3"
              className="w-full text-center text-[25px] font-bold leading-[45px] text-[#ffffff] lg:text-[21px]"
            >
              Gender
            </Heading>
          </div>
        ),
        meta: { width: "110px" },
      }),
      tableColumnHelper.accessor("rowquantity", {
        cell: (info) => (
          <div className="ml-3 flex justify-center">
            <Text
              as="p"
              className="w-full text-center text-[20px] font-normal leading-9 text-[#000000] lg:text-[17px]"
            >
              {info.getValue<string>()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="ml-3 flex">
            <Heading
              as="h5"
              className="w-full text-center text-[25px] font-bold leading-[45px] text-[#ffffff] lg:text-[21px]"
            >
              Date of Birth
            </Heading>
          </div>
        ),
        meta: { width: "226px" },
      }),

      tableColumnHelper.accessor("rowvalue", {
        cell: (info) => (
          <div className="ml-2.5 flex justify-center">
            <Text
              as="p"
              className="w-full text-center text-[20px] font-normal leading-9 text-[#000000] lg:text-[17px]"
            >
              {info.getValue<string>()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="ml-2.5 flex">
            <Heading
              as="h6"
              className="w-full text-center text-[25px] font-bold leading-[45px] text-[#ffffff] lg:text-[21px]"
            >
              Phone
            </Heading>
          </div>
        ),
        meta: { width: "222px" },
      }),

      tableColumnHelper.accessor("rowstatus", {
        cell: (info) => (
          <div className="ml-2.5 flex justify-center">
            <Text
              as="p"
              className="w-full text-center text-[20px] font-normal leading-9 text-[#000000] lg:text-[17px]"
            >
              {info.getValue<string>()}
            </Text>
            <Img
              src="img_edit.svg"
              width={49}
              height={40}
              alt="Edit"
              className="h-[40px]"
            />
            <Img
              src="img_thumbs_up.svg"
              width={49}
              height={48}
              alt="Thumbsup"
              className="mr-2.5 h-[48px]"
            />
          </div>
        ),
        header: (info) => (
          <div className="ml-6 flex flex-1">
            <Heading
              as="h4"
              className="w-[54%] text-center text-[25px] font-bold leading-[45px] text-[#ffffff] lg:text-[21px]"
            >
              Address
            </Heading>
          </div>
        ),
        meta: { width: "364px" },
      }),
    ];
  }, []);
  return (
    <div className="flex flex-col gap-[30px] bg-[#f8f8f8] py-6 sm:py-4">
    {/* employee section */}
    <EmployeeSection />
    <ReactTable
      variant="simple"
      bodyProps={{
        className:
          "before: content-['-'] before: opacity-0 before:leading-[60px]",
      }}
      headerCellProps={{ className: "bg-[#f25d07]" }}
      rowDataProps={{ className: "bg-[#ffffff]" }}
      cellProps={{
        className: "border- [#000000] border-t border-b border-solid",
      }}
      className="mx-5 border border-solid border- [#000000] bg-[#ffffff] shadow-[5px_5px_7px_0_#f25d07] md:mx-0 md:block md: overflow-x-auto md:whitespace-nowrap"
      columns={tableColumns}
      data={tableData}
    />

    <div className="mx-10 mb-1.5 flex justify-end gap-[11px] md:mx-0 sm:flex-col">
      <Button
        shape="round"
        className="min-w-[116px] rounded-[10px] px-2 font-['Nunito_Sans'] sm: px-5"
      >
        Previous
      </Button>
      <Button
        shape="round"
        className="min-w-[44px] rounded-[10px] px-3.5 font-['Nunito_Sans'] sm:px-5"
      >
        1
      </Button>
      <Button
        shape="round"
        className="min-w-[44px] rounded-[10px] px-3.5 font-['Nunito_Sans'] sm: px-5"
      >
        2
      </Button>
      <Button
        shape="round"
        className="min-w-[74px] rounded-[10px] px-2 font-['Nunito_Sans'] sm:px-5"
      >
        Next
      </Button>
    </div>
  </div>
  );
}
