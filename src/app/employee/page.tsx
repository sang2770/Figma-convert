import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Employee Directory - Manage Your Team",
  description:
    "Browse the employee directory to manage your team. Filter, search, and add employees with ease. Keep track of your workforce efficiently.",
  //ogTitle:'...'
};

export default function EmployeePage() {
  return <Page />;
}

