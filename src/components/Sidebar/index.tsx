"use client";

import Link from "next/link";
import { Img } from "./..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function SideBar({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}
  return (
    <Sidebar
      {...props}
      width="252px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className={`${props.className} flex flex-col h-screen pt-[50px] top-0 px-2.5 md:pt-5 sm:pt-4 !border-[#f25d07] !border-r-[10px] !border-solid bg-[#ffffff] !sticky overflow-auto md:hidden`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "10px 10px 10px 20px",
            color: "#000000",
            fontWeight: 700,
            fontSize: "25px",
            gap: "10px",
            borderRadius: "35px",
            [`&:hover, &.ps-active`]: {
              color: "#ffffff",
              backgroundColor: "#f25d07 !important",
            },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "30px" } }}
        className="flex w-full flex-col self-stretch"
      >
        <MenuItem
          icon={
            <Img
              src="dashboard 1.svg"
              width={40}
              height={40}
              alt="Dashboard Icon"
              className="h-[40px] w-[40px]"
            />
          }
          component={<Link href="/dashboard" />}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="delivery 1.svg"
              width={50}
              height={50}
              alt="Orders Icon"
              className="h-[50px] w-[50px]"
            />
          }
          component={<Link href="/ordermanagement" />}
        >
          Order
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="briefcase 1.svg"
              width={40}
              height={40}
              alt="Employees Icon"
              className="h-[40px] w-[40px]"
            />
          }
          component={<Link href="/employee" />}
        >
          Employee
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="package-box 1.svg"
              width={50}
              height={50}
              alt="Inventory Icon"
              className="h-[50px] w-[50px]"
            />
          }
          component={<Link href="/inventory" />}
        >
          Inventory
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="package-box 1.svg"
              width={50}
              height={50}
              alt="Products Icon"
              className="h-[50px] w-[50px]"
            />
          }
        >
          Product
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="package-box 1.svg"
              width={50}
              height={50}
              alt="Categories Icon"
              className="h-[50px] w-[50px]"
            />
          }
        >
          Category
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="package-box 1.svg"
              width={50}
              height={50}
              alt="Import Icon"
              className="h-[50px] w-[50px]"
            />
          }
        >
          Import
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="package-box 1.svg"
              width={50}
              height={50}
              alt="Export Icon"
              className="h-[50px] w-[50px]"
            />
          }
        >
          Export
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="settings 1.svg"
              width={40}
              height={40}
              alt="Settings Icon"
              className="h-[40px] w-[40px]"
            />
          }
        >
          Setting
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
