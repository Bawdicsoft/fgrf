"use client";

import Image from "next/image";
import { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import StartSec from "./Start";
import DonationSec from "./Donation1";

// const orphansList = [
//   "Higher Education Scholarship Fund - $30",
//   "Orphan Medical Care - $30",
//   "Orphan Sponsorship Programme - $70",
//   "Family Sponsorship - $205",
// ];
// const orphansOthersList = ["150", "100", "50", "others"];
// const onOffList = ["200", "150", "100", "others"];
// const plestinDollarList = ["210", "180", "95", "others"];
// const winterDollarList = ["195", "140", "100", "others"];
// const whereDollarList = ["150", "100", "50", "others"];
// const TukSyriaDollarList = ["195", "100", "65", "others"];
// const ribaDollarList = ["50", "20", "10", "others"];
// const orphansList2 = [
//   "Higher Education Scholarship Fund - $25",
//   "Orphan Medical Care - $25",
//   "Orphan Sponsorship Programme - $60",
//   "Family Sponsorship - $170",
// ];
// const orphansList3 = [
//   "Higher Education Scholarship Fund - $25",
//   "Orphan Medical Care - $25",
//   "Orphan Sponsorship Programme - $65",
//   "Family Sponsorship - $195",
// ];
// const monthaly1List = [
//   "Orphans",
//   "Sadaqah",
//   "Water For Life",
//   "Global Emergencies",
// ];
// const oneOffList = [
//   "Palestine Emergency Appeal",
//   "Winter Appeal",
//   "Afghanistan Emergency Appeal",
//   "Zakat",
//   "Sadaqah",
//   "Wherever Needed Most",
//   "Sudan Emergency Appeal",
//   "Turkey/Syria Earthquake Emergency",
//   "Syria Crisis Appeal",
//   "Yemen Appeal",
//   "Water For Life",
//   "Orphans And Children",
//   "Sadaqah Jariyah",
//   "People In Debt",
//   "Waqf",
//   "Interest (RIBA)",
//   "Capacity Building For Humanitarians",
//   "Global Emergencies",
// ];

// New Code

const orphansOthersList = ["150", "100", "50", "others"];
const onOffList = ["200", "150", "100", "others"];
const plestinDollarList = ["210", "180", "95", "others"];
const winterDollarList = ["195", "140", "100", "others"];
const whereDollarList = ["150", "100", "50", "others"];
const TukSyriaDollarList = ["195", "100", "65", "others"];
const ribaDollarList = ["50", "20", "10", "others"];

export const DonationSectionPage = () => {
  // const [monthly1, setMonthly1] = useState(true);
  // const [oneOff1, setOneOff1] = useState(true);
  // const [bgMonthly, setBgMonthly] = useState(false);
  // const [bgOneOff, setBgOneOff] = useState(false);
  // const [line1, setLine1] = useState(false);
  // const [bgTwo, setBgTwo] = useState(false);
  // const [orphanOtherData, setorphanOtherData] = useState(true);
  // const [list, setList] = useState<any[]>([]);
  // const [orphan, setOrphan] = useState<any[]>([]);
  // const [orphanHandle, setorphanHandle] = useState(false);
  // const [dollar, setDollar] = useState(100);
  // const [donateText, setDonateText] = useState(true);
  // const [input, setInput] = useState(false);
  // const [addToCartBtn, setAddToCartBtn] = useState(false);
  // const [detailsPage, setdetailsPage] = useState(false);
  // const [twoBtns, setTwoBtns] = useState(false);
  // const [selectFound, setSelectFound] = useState(true);
  // const [donationName, setDonationName] = useState<any>();
  // const [donationDollar, setDonationDollar] = useState<any>(100);
  // const [redText, setRedText] = useState(false);
  // const [showdet, setShowdet] = useState(true);
  // const [bgBtn, setbgBtn] = useState(1);

  // const donationHandlerf = () => {
  //   if (!donationName) {
  //     setSelectFound(true);
  //   }
  // };
  // const detailPageHandler = () => {
  //   if (donationName) {
  //     setShowdet(false);
  //   }
  // };
  // const detailPageHandler1 = () => {
  //   if (donationName) {
  //     setdetailsPage(true);
  //   }
  // };

  // New Code

  const [donationTitleArray, setDonationTitleArray] = useState<any[]>();
  const [donationDollarArray, setDonationDollarArray] = useState<any[]>();

  const [monthly, setMonthly] = useState(false);

  const monthlyHandler = (data: any[]) => {
    if (monthly) {
      setMonthly(false);
    } else {
      setMonthly(true);
    }
    setDonationTitleArray(data);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* first container */}
      {/* <div className="flex h-40 justify-center ml-20">
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
          <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
            <span className="border-4 border-gray-100 p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 text-gray-500">
              4
            </span>
            <span className="text-gray-500">Payment</span>
          </div>
        </div>
      </div> */}
      {/* Second container */}
      {/* <div className="bg-gray-100 p-8"> */}

      {/* {monthly1 ? (
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
                  setTwoBtns(true);
                  setSelectFound(true);
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
                  setTwoBtns(true);
                  setSelectFound(true);
                  setorphanHandle(false);
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
          showdet &&
          selectFound && (
            <div className="flex flex-col justify-center">
              <h2 className="text-sky-800 font-bold text-xl py-5 uppercase self-start">
                Select Your Fund
              </h2>
              {redText
                ? !donationName && (
                    <p className="text-red-600 text-md text-center py-2">
                      You must select a fund and specify an amount.
                    </p>
                  )
                : ""}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {list.map((title, index) =>
                  title === "Orphans" && index === 0 ? (
                    <button
                      key={index}
                      onClick={() => {
                        setOrphan(orphansList);
                        setorphanHandle(true);
                        setorphanOtherData(true);
                        setDonateText(true);
                        setInput(false);
                        setDonationName(title);
                      }}
                      className="bg-white py-3 font-medium text-gray-800 focus:bg-[#19afaf] focus:text-white px-4 hover:bg-[#19afaf] hover:text-white"
                    >
                      {title}
                    </button>
                  ) : (title === "Sadaqah" && index === 1) ||
                    (title === "Water For Life" && index === 2) ||
                    (title === "Global Emergencies" && index === 3) ? (
                    <button
                      key={index}
                      onClick={() => {
                        setOrphan(orphansOthersList);
                        setorphanHandle(true);
                        setorphanOtherData(false);
                        setDonateText(true);
                        setInput(false);
                        setDonationName(title);
                      }}
                      className="bg-white py-3 font-medium text-gray-800 focus:bg-[#19afaf] focus:text-white px-4 hover:bg-[#19afaf] hover:text-white"
                    >
                      {title}
                    </button>
                  ) : (
                    <button
                      key={index}
                      onClick={() => {
                        setOrphan(onOffList);
                        setorphanHandle(true);
                        setorphanOtherData(false);
                        setDonateText(false);
                        setInput(false);
                        setAddToCartBtn(true);
                        setDonationName(title);
                      }}
                      className="bg-white py-3 font-medium text-gray-800 focus:bg-[#19afaf] focus:text-white px-4 hover:bg-[#19afaf] hover:text-white"
                    >
                      {title}
                    </button>
                  )
                )}
              </div>
              {orphanHandle && (
                <div className="grid grid-cols-1  gap-5">
                  {donateText ? (
                    <span className="text-sky-800 font-bold text-xl pt-8 px-8 uppercase self-start">
                      DONATION AMOUNT
                    </span>
                  ) : (
                    ""
                  )}
                  {orphanOtherData ? (
                    <span
                      className={`flex justify-center gap-3 ${
                        donateText ? "" : "pt-8"
                      }`}
                    >
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
                  ) : (
                    <span
                      className={`flex justify-center gap-3 ${
                        donateText ? "" : "pt-8"
                      }`}
                    >
                      <button className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400">
                        USD
                      </button>
                      <button className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400">
                        GBP
                      </button>
                      <button className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400">
                        {" "}
                        EUR
                      </button>
                    </span>
                  )}
                  <div
                    className={`${
                      !orphanOtherData ? "grid grid-cols-4 gap-2" : ""
                    }`}
                  >
                    {orphan.map((title, index) =>
                      orphanOtherData ? (
                        <div key={index}>
                          <div
                          
                            className="flex  border p-4 gap-16 justify-between"
                          >
                            <span className="text-lg  font-semibold">
                              {title}
                            </span>
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
                        </div>
                      ) : title === "others" ? (
                        <button
                          key={index}
                          onClick={() => {
                            setInput(true), setDonationDollar(title);
                          }}
                          className="uppercase text-3xl text-gray-500 focus:bg-[#19afaf] focus:text-white font-semibold py-3 px-5 bg-white hover:bg-[#19afaf] hover:text-white"
                        >
                          {title}
                        </button>
                      ) : (
                        <button
                          key={index}
                          onClick={() => {
                            setDollar(title);
                            setDonationDollar(title);
                            setInput(false);
                            setbgBtn(index);
                          }}
                          className={`text-3xl text-gray-500 focus:bg-[#19afaf] focus:text-white font-semibold py-3 px-5  hover:bg-[#19afaf] hover:text-white ${
                            index === bgBtn
                              ? "text-white bg-[#19afaf] focus:bg-[#19afaf]"
                              : "bg-white"
                          }`}
                        >
                          {title}
                        </button>
                      )
                    )}
                  </div>
                  {input && (
                    <input
                      type="text"
                      className="h-10 focus:ring-2  rounded  focus:outline-none ring-[#19afaf] focus:ring-[#19afaf]"
                    />
                  )}
                  {orphanOtherData ? (
                    <p className="text-red-600 font-bold text-3xl">
                      Total: $0.00
                    </p>
                  ) : (
                    <div className="flex items-center flex-col">
                      <p className="text-gray-400 text-lg font-medium text-center">
                        Making a donation of {dollar} will help save lives
                      </p>
                      {addToCartBtn && (
                        <button className="max-w-[200px] rounded hover:bg-[#2dc2c2] uppercase py-2 px-5 mt-1 bg-[#19afaf] text-white font-bold text-xl">
                          Add to cart
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        )} */}
      {/* 
        {donationName && detailsPage && (
          <div>
            <h2 className="text-3xl font-bold text-[#19afaf] text-center">
              YOUR DETAILS
            </h2>
            <p className="text-gray-700 text-base py-4 text-center">
              Your Monthly Donation : ${donationDollar}.00
            </p>
            <p className="bg-gray-300 h-[2px] w-full"></p>
            <div className="py-2 flex justify-between">
              <p className="text-gray-700 text-base">{donationName}</p>
              <p className="text-gray-700 text-base">{donationDollar}</p>
            </div>
            <p className="bg-gray-300 h-[2px]  w-full"></p>

            <div>
              <form className="max-w-2xl mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="mb-5">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Title
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                    >
                      <option>Title</option>
                      <option>Mr</option>
                      <option>Ms</option>
                      <option>Msr</option>
                      <option>Dr</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 mb-5">
                    <label
                      htmlFor="FirstName"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      First Name
                    </label>
                    <input
                      type="FirstName"
                      id="FirstName"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="md:col-span-2 mb-5">
                    <label
                      htmlFor="LastName"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Last Name
                    </label>
                    <input
                      type="LastName"
                      id="LastName"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="ContactNumber"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Contact Number
                    </label>
                    <input
                      type="ContactNumber"
                      id="ContactNumber"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                      placeholder="0237278327"
                      required
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="Address"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Address
                  </label>
                  <input
                    type="Address"
                    id="Address"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                    placeholder="123 High Street"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="Address"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Address 2
                  </label>
                  <input
                    type="Address"
                    id="Address"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                    placeholder="123 High Street"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-5">
                    <label
                      htmlFor="Address"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Town City
                    </label>
                    <input
                      type="Address"
                      id="Address"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                      placeholder="Enter City"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Country
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 outline-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                    >
                      <option className="">Select Your Country</option>
                      <option>Canada</option>
                      <option>France</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                      <option>Germany</option>
                    </select>
                  </div>
                </div>
                <h2 className="text-3xl font-bold py-4 text-[#19afaf] text-center">
                  KEEP IN TOUCH
                </h2>
                <div className="flex justify-center items-center mb-5">
                  <input
                    id="terms"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#19afaf] focus:border-0 "
                    required
                  />
                  <label
                    htmlFor="terms"
                    className="ms-2 text-lg font-medium text-gray-600"
                  >
                    Yes, I would like to hear from IRW{" "}
                  </label>
                </div>
                <p className="text-gray-500 text-sm text-center ">
                  We would like to keep in touch with you to share the latest
                  info on our work as well as how your donations have helped,
                  via email. We will always treat your personal information with
                  the utmost care and will keep it private.
                </p>
              </form>
            </div>
          </div>
        )}
        {twoBtns && (
          <div className="py-10 flex justify-between">
            <button
              onClick={() => {
                setMonthly1(true);
                setBgTwo(true);
                setLine1(false);
                setorphanHandle(true);
                setTwoBtns(false);
                setAddToCartBtn(false);
                setdetailsPage(false);
                setDonationDollar(100);
                setDonationName("");
                setShowdet(true);
                setRedText(false);
              }}
              className="uppercase hover:bg-gray-200  py-2 px-4 text-2xl font-bold text-gray-400 bg-white flex gap-2 items-center justify-center"
            >
              <FaRegArrowAltCircleLeft className="w-6 h-6" />
              <span> Back</span>
            </button>
            <button
              onClick={() => {
                detailPageHandler1();
                setMonthly1(false);
                setorphanHandle(false);
                setRedText(true);
                donationHandlerf();
                detailPageHandler();
              }}
              className=" uppercase hover:bg-[#2dc2c2]  py-2 px-4 text-2xl font-bold text-white bg-[#19afaf] flex gap-2 items-center justify-center"
            >
              <span> Next </span>
              <FaRegArrowAltCircleRight className="w-6 h-6" />
            </button>
          </div>
        )} */}

      {/* </div> */}

      {/* New Code */}
      {/* container-01 */}
      <div className="flex h-40 justify-center ml-20">
        <div className="w-40 md:w-60 relative flex items-center">
          <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
            <span
              className={`border-2 border-[#19afaf] font-bold p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 text-gray-500 `}
            >
              1
            </span>
            <span className="text-gray-500 ">Start</span>
          </div>
          <span className={`bg-gray-100 h-[6px] w-full`}></span>
        </div>
        <div className="w-40 md:w-60 relative flex items-center">
          <span className="relative bg-gray-100 h-[6px] w-full"></span>
          <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
            <span
              className={`border-4 border-gray-100 p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 text-gray-500`}
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
          <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
            <span className="border-4 border-gray-100 p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 text-gray-500">
              4
            </span>
            <span className="text-gray-500">Payment</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-8">
        {monthly ? (
          <DonationSec
            donationTitleArray={donationTitleArray}
            monthlyHandler={monthlyHandler}
          />
        ) : (
          <StartSec monthlyHandler={monthlyHandler} />
        )}
      </div>
    </div>
  );
};
