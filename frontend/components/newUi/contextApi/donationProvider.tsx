"use client";
import { useEffect, useState } from "react";
import { DonationContext } from "./donationContext";

export default function DonationProvider({ children }: { children: any }) {
  const [donationAmount, setDonationAmount] = useState("");
  const [donationTitle, setDonationTitle] = useState("");

  const setDonationAmountHandler = (data: any) => {
    setDonationAmount(data);
  };
  const setDonationTitleHandler = (data: any) => {
    setDonationTitle(data);
  };
  return (
    <DonationContext.Provider
      value={{
        donationAmount: donationAmount,
        donationTitle: donationTitle,
        setDonationAmountHandler,
        setDonationTitleHandler,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
}
