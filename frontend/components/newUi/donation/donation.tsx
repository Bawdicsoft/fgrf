"use client";

import Image from "next/image";
import { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import StartSec from "./Start";
import DonationSec from "./Donation1";
interface DonationProps {
  image: string;
  title: string;
  desc: string;
}
// New Code
const orphansOthersList = ["150", "100", "50", "others"];
const onOffList = ["200", "150", "100", "others"];
const plestinDollarList = ["210", "180", "95", "others"];
const winterDollarList = ["195", "140", "100", "others"];
const whereDollarList = ["150", "100", "50", "others"];
const TukSyriaDollarList = ["195", "100", "65", "others"];
const ribaDollarList = ["50", "20", "10", "others"];

export const DonationSectionPage: React.FC<DonationProps> = ({
  image,
  title,
  desc,
}) => {
  // New Code
  const [donationTitleArray, setDonationTitleArray] = useState<any[]>();
  const [donationDollarArray, setDonationDollarArray] = useState<any[]>([]);

  const [monthly, setMonthly] = useState(false);
  const titleDonate = donationDollarArray[0];
  const dollarDonate = donationDollarArray[1];

  const monthlyHandler = (data: any[]) => {
    console.log(data);
    if (monthly) {
      setMonthly(false);
    } else {
      setMonthly(true);
    }
    setDonationDollarArray(data);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* container-01 */}
      <div className="flex h-40 justify-center ml-10 md:ml-40">
        <div className="w-40 md:w-60 relative flex items-center">
          <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
            <span className="cursor-pointer relative group overflow-hidden border-2 group-hover:border-4  group-hover:border-gray-100 border-[#19afaf] p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 text-gray-500">
              <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-20 group-hover:-translate-y-16 ease"></span>
              <span className="relative text-gray-500 group-hover:text-white  ">
                1
              </span>
            </span>
            <span className="text-gray-500 text-sm md:text-base">Start</span>
          </div>
          <span className={`bg-gray-100 h-[6px] w-full`}></span>
        </div>
        <div className="w-40 md:w-60 relative flex items-center">
          <span className="relative bg-gray-100 h-[6px] w-full"></span>
          <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
            <span className="cursor-pointer relative group overflow-hidden border-4 border-gray-100 p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 text-gray-500">
              <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-20 group-hover:-translate-y-16 ease"></span>
              <span className="relative text-gray-500 group-hover:text-white">
                2
              </span>
            </span>
            <span className="text-gray-500 text-sm md:text-base">Donation</span>
          </div>
        </div>
        <div className="w-40 md:w-60 relative flex items-center">
          <span className="relative bg-gray-100 h-[6px] w-full"></span>
          <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
            <span className="cursor-pointer relative group overflow-hidden border-4 border-gray-100 p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 text-gray-500">
              <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-20 group-hover:-translate-y-16 ease"></span>
              <span className="relative text-gray-500 group-hover:text-white">
                3
              </span>
            </span>
            <span className="text-gray-500 text-sm md:text-base">Details</span>
          </div>
        </div>
        <div className="w-40 md:w-60 relative flex items-center">
          <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
            <span className="cursor-pointer relative group overflow-hidden border-4 border-gray-100 p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 ">
              <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-20 group-hover:-translate-y-16 ease"></span>
              <span className="relative text-gray-500 group-hover:text-white">
                4
              </span>
            </span>
            <span className="text-gray-500 text-sm md:text-base">Payment</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-8">
        {monthly ? (
          <DonationSec
            donationTitleArray={donationTitleArray}
            monthlyHandler={monthlyHandler}
            titleDonate={titleDonate}
            dollarDonate={dollarDonate}
          />
        ) : (
          <StartSec
            monthlyHandler={monthlyHandler}
            image={image}
            title={title}
            desc={desc}
          />
        )}
      </div>
    </div>
  );
};
