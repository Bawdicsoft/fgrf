"use client";
import { useEffect, useState } from "react";
import { DashboardContext } from "./dashboardContext";

export default function DashboardProvider({ children }: { children: any }) {
  const [mainSection, setMainSection] = useState("");
  const [midSection, setMidSection] = useState("");
  const [childSection, setChildSection] = useState("");

  const setMainSectionHandler = (title: any) => {
    setMainSection(title);
  };
  const setMidSectionHandler = (title: any) => {
    setMidSection(title);
  };
  const setChildSectionHandler = (title: any) => {
    setChildSection(title);
  };
  return (
    <DashboardContext.Provider
      value={{
        mainSection: mainSection,
        midSection: midSection,
        childSection: childSection,
        setMainSectionHandler,
        setMidSectionHandler,
        setChildSectionHandler,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
