"use client";

import Image from "next/image";
import { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
// interface DonationSectionPageProps {

// }

const orphansList = [
  "Higher Education Scholarship Fund - $30",
  "Orphan Medical Care - $30",
  "Orphan Sponsorship Programme - $70",
  "Family Sponsorship - $205",
];
const orphansList2 = [
  "Higher Education Scholarship Fund - $25",
  "Orphan Medical Care - $25",
  "Orphan Sponsorship Programme - $60",
  "Family Sponsorship - $170",
];
const orphansList3 = [
  "Higher Education Scholarship Fund - $25",
  "Orphan Medical Care - $25",
  "Orphan Sponsorship Programme - $65",
  "Family Sponsorship - $195",
];
const monthaly1List = [
  "Orphans",
  "Sadaqah",
  "Water For Life",
  "Global Emergencies",
];
const oneOffList = [
  "Palestine Emergency Appeal",
  "Winter Appeal",
  "Afghanistan Emergency Appeal",
  "Zakat",
  "Sadaqah",
  "Wherever Needed Most",
  "Sudan Emergency Appeal",
  "Turkey/Syria Earthquake Emergency",
  "Syria Crisis Appeal",
  "Yemen Appeal",
  "Water For Life",
  "Orphans And Children",
  "Sadaqah Jariyah",
  "People In Debt",
  "Waqf",
  "Interest (RIBA)",
  "Capacity Building For Humanitarians",
  "Global Emergencies",
];

export const DonationSectionPage = () => {
  const [monthly1, setMonthly1] = useState(true);
  const [oneOff1, setOneOff1] = useState(true);
  const [bgMonthly, setBgMonthly] = useState(false);
  const [bgOneOff, setBgOneOff] = useState(false);
  const [line1, setLine1] = useState(false);
  const [bgTwo, setBgTwo] = useState(false);
  const [list, setList] = useState<any[]>([]);
  const [orphan, setOrphan] = useState<any[]>([]);
  const [orphanHandle, setorphanHandle] = useState(false);
  return (
    <div className="max-w-3xl mx-auto">
      {/* first container */}
      <div className="flex h-40 justify-center ml-20">
        <div className="w-40 md:w-60 relative flex items-center">
          <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
            <span
              className={`border-2 border-[#19afaf] font-bold p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 text-gray-500 ${
                line1 ? "!bg-[#19afaf] text-white" : ""
              }`}
            >
              1
            </span>
            <span className="text-gray-500 ">Start</span>
          </div>
          <span
            className={`bg-gray-100 h-[6px] w-full ${
              line1 ? "!bg-[#19afaf]" : ""
            }`}
          ></span>
        </div>
        <div className="w-40 md:w-60 relative flex items-center">
          <span className="relative bg-gray-100 h-[6px] w-full"></span>
          <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
            <span
              className={`font-bold p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 text-gray-500 ${
                bgTwo
                  ? "!bg-[#19afaf] text-white border-4 border-[#19afaf]"
                  : "border-4 border-gray-100"
              } ${line1 ? "border-2 border-[#19afaf]" : ""}`}
            >
              2
            </span>
            <span className="text-gray-500">Donation</span>
          </div>
        </div>
        <div className="w-40 md:w-60 relative flex items-center">
          <span className="relative bg-gray-100 h-[6px] w-full"></span>
          <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
            <span className="border-4 border-gray-100 p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 text-gray-500">
              3
            </span>
            <span className="text-gray-500">Details</span>
          </div>
        </div>
        <div className="w-40 md:w-60 relative flex items-center">
          {/* <span className="bg-red-600 h-[6px] w-full"></span> */}
          <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
            <span className="border-4 border-gray-100 p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 text-gray-500">
              4
            </span>
            <span className="text-gray-500">Payment</span>
          </div>
        </div>
      </div>
      {/* Second container */}
      <div className="bg-gray-100 p-8">
        {monthly1 ? (
          <div className="flex flex-col items-center justify-center ">
            <h2 className="text-sky-800 font-bold text-3xl py-5">
              MAKE YOUR DONATION
            </h2>
            <div>
              <Image
                src={"/donationNew.webp"}
                alt="donationImg"
                width={500}
                height={400}
              />
            </div>
            <div className="py-10">
              <button
                onClick={() => {
                  setList(monthaly1List);
                  setMonthly1(!monthly1);
                  setOneOff1(!oneOff1);
                  setBgMonthly(true);
                  setBgOneOff(false);
                  setLine1(true);
                  setBgTwo(false);
                  setorphanHandle(false);
                }}
                className={`border-2 hover:bg-gray-200 border-[#19afaf] py-2 px-4 text-2xl font-bold text-gray-400 bg-white ${
                  bgMonthly ? "!bg-[#19afaf] text-white" : ""
                } `}
              >
                MONTHLY
              </button>
              <button
                onClick={() => {
                  setList(oneOffList);
                  setOneOff1(!oneOff1);
                  setMonthly1(!monthly1);
                  setBgMonthly(false);
                  setBgOneOff(true);
                  setLine1(true);
                  setBgTwo(false);
                }}
                className={`border-2 hover:bg-gray-200 border-[#19afaf] py-2 px-4 text-2xl font-bold text-gray-400 bg-white ${
                  bgOneOff ? "!bg-[#19afaf] text-white" : ""
                } `}
              >
                ONE-OFF
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center">
            <h2 className="text-sky-800 font-bold text-xl py-5 uppercase self-start">
              Select Your Fund
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {list.map((title, index) =>
                title === "Orphans" ? (
                  <button
                    key={index}
                    onClick={() => {
                      setOrphan(orphansList);
                      setorphanHandle(true);
                    }}
                    className="bg-white py-4 px-4 hover:bg-[#19afaf] hover:text-white"
                  >
                    {title}
                  </button>
                ) : (
                  <button
                    key={index}
                    className="bg-white py-4 px-4 hover:bg-[#19afaf] hover:text-white"
                  >
                    {title}
                  </button>
                )
              )}
            </div>
            {orphanHandle && (
              <div className="grid grid-cols-1  gap-5">
                <span className="text-sky-800 font-bold text-xl p-8 uppercase self-start">
                  DONATION AMOUNT
                </span>
                <span className="flex justify-center gap-3">
                  <button
                    className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400"
                    onClick={() => setOrphan(orphansList)}
                  >
                    USD
                  </button>
                  <button
                    onClick={() => setOrphan(orphansList2)}
                    className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400"
                  >
                    GBP
                  </button>
                  <button
                    onClick={() => setOrphan(orphansList3)}
                    className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400"
                  >
                    {" "}
                    EUR
                  </button>
                </span>

                {orphan.map((title, index) => (
                  <div
                    key={index}
                    className="flex  border p-4 gap-16 justify-between"
                  >
                    <span className="text-lg  font-semibold">{title}</span>
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-8">
                        <p>Quantity</p>
                        <input
                          type="number"
                          className="h-8 focus:ring-2  rounded  focus:outline-none focus:ring-[#19afaf]"
                        />
                      </div>
                      <div className="flex gap-8">
                        <p>SubTotal</p>
                        <input
                          type="number"
                          className="h-8 focus:ring-2 rounded bg-gray-200 focus:outline-none focus:ring-[#19afaf] focus:shadow-2xl shadow-[#19afaf]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <p className="text-red-600 font-bold text-3xl">Total: $0.00</p>
              </div>
            )}
            <div className="py-10 flex justify-between">
              <button
                onClick={() => {
                  setMonthly1(true);
                  setBgTwo(true);
                  setLine1(false);
                  setorphanHandle(false);
                }}
                className="uppercase hover:bg-gray-300  py-2 px-4 text-2xl font-bold text-gray-400 bg-gray-200 flex gap-2 items-center justify-center"
              >
                <FaRegArrowAltCircleLeft className="w-6 h-6" />
                <span> Back</span>
              </button>
              <button className=" uppercase hover:bg-[#19cfcf]  py-2 px-4 text-2xl font-bold text-white bg-[#19afaf] flex gap-2 items-center justify-center">
                <span> Next </span>
                <FaRegArrowAltCircleRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
