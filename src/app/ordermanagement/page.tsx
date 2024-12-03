import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Order Management Dashboard - Track and Manage Orders Efficiently",
  description:
    "Manage your orders with ease using our Order Management Dashboard. Track order status, manage inventory, and streamline your business operations for better efficiency.",
  //ogTitle:'...'
};

export default function OrderManagementPage() {
  return <Page />;
}

