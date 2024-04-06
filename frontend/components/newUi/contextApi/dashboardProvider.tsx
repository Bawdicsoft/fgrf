"use client";
import { useEffect, useState } from "react";
import { DashboardContext } from "./dashboardContext";

export default function DashboardProvider({ children }: { children: any }) {
  const [mainSection, setMainSection] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);
  const [midSection, setMidSection] = useState("");
  const [childSection, setChildSection] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const setMainSectionHandler = (title: any) => {
    setMainSection(title);
  };
  const setMidSectionHandler = (title: any) => {
    setMidSection(title);
  };
  const setChildSectionHandler = (title: any) => {
    setChildSection(title);
  };
  const setAuthHandler = (bol: any) => {
    // let userimg =
    //   typeof window !== "undefined" ? localStorage.getItem("Auth-admin") : null;
    // const user = userimg ? JSON.parse(userimg) : null;
    // const userEmail = user?.email;
    // const userPassword = user?.email;
    // if (userEmail === "fgrfuk25@gmail.com" && userPassword === "123@fgrf") {
    //   setLoggedIn(bol);
    // } else {
    setLoggedIn(bol);
    // }
  };
  const setImageHandler = (bol: any) => {
    setUserImage(bol);
  };
  const setEmailHandler = (bol: any) => {
    setUserEmail(bol);
  };
  return (
    <DashboardContext.Provider
      value={{
        mainSection: mainSection,
        loggedIn: loggedIn,
        midSection: midSection,
        childSection: childSection,
        userEmail: userEmail,
        userImage: userImage,
        setMainSectionHandler,
        setMidSectionHandler,
        setChildSectionHandler,
        setAuthHandler,
        setImageHandler,
        setEmailHandler,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
