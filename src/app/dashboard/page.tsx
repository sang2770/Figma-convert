import React from "react";
import { Metadata } from "next";
import Page from ".";
export const metadata: Metadata = {
  title: "Admin Dashboard - Overview & Statistics",
  description:
    "Access the admin dashboard to manage orders, employees, inventory, and products. Get insights with real-time statistics",
};
export default function DashboardPage() {
  return <Page />;
}
