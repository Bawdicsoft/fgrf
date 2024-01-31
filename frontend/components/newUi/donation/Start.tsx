"use client";
import Image from "next/image";
import React, { useState } from "react";
import AnimationTop from "../home/AnimationTop";
import { motion, useAnimation } from "framer-motion";
import AnimatedComponentLeft from "../home/AnimationLeft";
import AnimatedComponentRight from "../home/AnimationRight";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";
interface StartSecProps {
  // monthlyHandler: (data: string[]) => void;
  monthlyHandler: (data: string[]) => void;
  image: string;
  title: string;
  desc: string;
}
const monthlyList = ["Sadaqah", "water", "food", "emergency"];
const oneOffList = [
  "Zakat",
  "Palestine appeal ",
  "Winter Appeal ",
  "Iftar Appeal",
  "Sadaqah",
  "Food packs ",
  "Ration Distribution ",
  "Turkey / Syria  Appeal ",
  "Earthquake Appeal ",
  "Flood Appeal ",
  "Hand pump Appeal ",
  "Water well Appeal ",
  "Masjid Appeal",
  "Orphan House Appeal ",
  "Childern Rehabilitation Appeal ",
  "Medical Camp Appeal",
  "Global warming Appeal",
];
const orphansOthersList = ["150", "100", "50", "others"];
const StartSec: React.FC<StartSecProps> = ({
  monthlyHandler,
  image,
  title,
  desc,
}) => {
  const [btnDollar, setBtnDollar] = useState<Boolean>(false);
  const [input, setInput] = useState<Boolean>(false);
  const [dollar, setDollar] = useState<string>("100");
  const [dollarDonate, setDollarDonate] = useState<string>("1");
  const [titleDonate, setTitleDonate] = useState<string>("");
  const [orphanData, setOrphanData] = useState<Boolean>(true);
  const [donateAmountText, setDonateAmountText] = useState<Boolean>(false);
  const [nextStep, setNextStep] = useState<Boolean>(false);
  const [alertText, setAlertText] = useState<Boolean>(false);
  const [bgBtnIndex, setBgBtnIndex] = useState<number>(1);
  const [bgFundIndex, setbgFundIndex] = useState<number>();
  const [nextDet, setNextDet] = useState(false);
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [showFormText, setShowFormText] = useState(false);
  const [zakatCalc, setZakatCalc] = useState<Boolean>(false);
  const arr = [titleDonate, dollarDonate];
  return (
    <div>
      {/* Zakat calculator Form */}
      {zakatCalc ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <p className="text-base font-semibold text-gray-500 py-1 md:py-2">
                Calculate and Pay Your Zakat Using the Latest Nisab Values.
              </p>
              <p className="text-sm text-gray-600 py-1">
                Enter all assets that have been in your possession over a lunar
                year in the boxes below
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col w-full">
                  <label className="text-base font-semibold text-gray-500 py-1 md:py-2">
                    Base Nisab on value of
                  </label>
                  <select className="outline-none focus:ring-2 ring-teal-500 rounded-lg w-full p-2 font-medium text-teal-500">
                    <option>Silver</option>
                    <option>Gold</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-base font-semibold text-gray-500 py-1 md:py-2">
                    Gold & Silver
                  </label>
                  <div className="flex">
                    <span className="bg-teal-500 text-white font-bold px-4 py-2 rounded-l-lg">
                      &#163;
                    </span>
                    <input
                      className="outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 py-2 text-teal-500 text-base w-full  md:px-4"
                      type="text"
                      placeholder="Value of silver and gold you possess"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-base font-semibold text-gray-500 py-1 md:py-2">
                    Cash
                  </label>
                  <div className="flex flex-col w-full gap-2">
                    <div className="flex">
                      <span className="bg-teal-500 text-white font-bold px-4 py-2 rounded-l-lg">
                        &#163;
                      </span>
                      <input
                        className="outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 py-2 text-teal-500 text-base w-full  md:px-4"
                        type="text"
                        placeholder="In hand and  in bank accounts"
                      />
                    </div>
                    <div className="flex">
                      <span className="bg-teal-500 text-white font-bold px-4 py-2 rounded-l-lg">
                        &#163;
                      </span>
                      <input
                        className="outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 py-2 text-teal-500 text-base w-full  md:px-4"
                        type="text"
                        placeholder="Saving for the future"
                      />
                    </div>
                    <div className="flex">
                      <span className="bg-teal-500 text-white font-bold px-4 py-2 rounded-l-lg">
                        &#163;
                      </span>
                      <input
                        className="outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 py-2 text-teal-500 text-base w-full  md:px-4"
                        type="text"
                        placeholder="Money You have loaned"
                      />
                    </div>
                    <div className="flex">
                      <span className="bg-teal-500 text-white font-bold px-4 py-2 rounded-l-lg">
                        &#163;
                      </span>
                      <input
                        className=" outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 py-2 text-teal-500 text-base w-full  md:px-4"
                        type="text"
                        placeholder="Business investments"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-base font-semibold text-gray-500 py-1 md:py-2">
                    Business Assests
                  </label>
                  <div className="flex">
                    <span className="bg-teal-500 text-white font-bold px-4 py-2 rounded-l-lg">
                      &#163;
                    </span>
                    <input
                      className="outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 py-2 text-teal-500 text-base w-full  md:px-4"
                      type="text"
                      placeholder="Stock Value"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-base font-semibold text-gray-500 py-1 md:py-2">
                    Liabilities
                  </label>
                  <div className="flex flex-col w-full gap-2">
                    <div className="flex">
                      <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-l-lg">
                        &#163;
                      </span>
                      <input
                        className="outline-none focus:ring-2 ring-red-500 rounded-r-lg px-2 py-2 text-red-500 text-base w-full  md:px-4"
                        type="text"
                        placeholder="Money owed (borrowed or credit"
                      />
                    </div>
                    <div className="flex">
                      <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-l-lg">
                        &#163;
                      </span>
                      <input
                        className="outline-none focus:ring-2 ring-red-500 rounded-r-lg px-2 py-2 text-red-500 text-base w-full  md:px-4"
                        type="text"
                        placeholder="Employee salaries"
                      />
                    </div>
                    <div className="flex">
                      <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-l-lg">
                        &#163;
                      </span>
                      <input
                        className="outline-none focus:ring-2 ring-red-500 rounded-r-lg px-2 py-2 text-red-500 text-base w-full  md:px-4"
                        type="text"
                        placeholder="Other outgoings due (tax, rent, utilities)"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-base font-semibold text-gray-500 py-1 md:py-2">
                    Total Assests
                  </label>
                  <div className="flex">
                    <span className="bg-teal-500 text-white font-bold px-4 py-2 rounded-l-lg">
                      &#163;
                    </span>
                    <input
                      className="outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 py-2 bg-gray-200 text-teal-500 text-base w-full  md:px-4"
                      type="text"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <div className="flex gap-2">
                    <button className="bg-teal-500 hover:bg-teal-600 rounded-lg text-white font-medium px-5 py-2">
                      Reset
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg px-5 py-2">
                      Calculate
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto lg:px-8">
              <p className="text-base font-semibold text-gray-500 py-1 md:py-2 uppercase">
                Donation Hotlines
              </p>
              <p className="text-xl text-gray-600 py-1">+44 7300 559919</p>
              <hr className="bg-teal-500 h-[1px] w-full my-2" />
              <hr className="bg-teal-500 h-[1px] w-full mt-4 mb-2" />
              <div className="flex flex-col">
                <div>
                  <p className="text-lg font-semibold text-gray-500 py-1 md:py-2">
                    Guidance on weight:
                  </p>
                  <div className="text-sm text-gray-500 py-1 md:py-2">
                    <span>Nisab in Gold =</span>{" "}
                    <span className="font-black text-gray-600">
                      7.5 tola(87.48 gm)
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 py-1 md:py-2">
                    <span> Nisab in Silver =</span>{" "}
                    <span className="font-black text-gray-600">
                      52.2 tola(612.36 gm)
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 py-1 md:py-2">
                    ,
                    <span>
                      Read more about tola in our{" "}
                      <Link
                        href={"/donation/zakat-donation"}
                        className="text-teal-500"
                      >
                        About Zakat
                      </Link>{" "}
                      section.{" "}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center items-center md:h-40 lg:h-60">
                  <div className="text-lg text-center font-semibold text-gray-500 py-1 md:py-2">
                    You have no Zakat due, please support our Zakat appeal
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 flex justify-between">
            <button
              onClick={() => {
                setZakatCalc(false);
                // backHandler();
              }}
              className="relative group overflow-hidden uppercase  py-2 px-4 text-2xl font-bold text-gray-400 bg-white flex gap-2 items-center justify-center"
            >
              <span className="absolute w-40 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

              <FaRegArrowAltCircleLeft className="w-6 h-6 relative group-hover:text-white text-gray-400" />
              <span className="relative group-hover:text-white text-gray-400">
                {" "}
                Back
              </span>
            </button>
            <button
              onClick={() => {
                setZakatCalc(false);
              }}
              className="relative group overflow-hidden  uppercase  py-2 px-4 text-2xl font-bold  bg-[#19afaf] flex gap-2 items-center justify-center"
            >
              <span className="absolute w-40 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-5 bg-gray-200 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

              <span className="relative group-hover:text-gray-400 text-white">
                {" "}
                Next{" "}
              </span>
              <FaRegArrowAltCircleRight className="w-6 h-6 relative text-white group-hover:text-gray-400" />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center ">
          <AnimationTop>
            <motion.div
              whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div
                id="box3d"
                className="border-4 mb-2 md:mb-4 border-[#85d0d0]  max-w-2xl py-1 md:py-3 bg-[#6898b1] mx-auto rounded-full shadow-lg"
              >
                <h2
                  id=""
                  className="text-lg px-3  md:px-5 md:text-2xl lg:text-3xl uppercase hover:text-sky-800 font-bold text-white text-center"
                >
                  Make your donation
                </h2>
              </div>
            </motion.div>
          </AnimationTop>
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: "20",
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 lg:gap-1 pt-2 md:py-8 mx-auto">
                <div>
                  <h2 className="text-center text-2xl md:text-3xl lg:text-7xl uppercase font-semibold md:font-bold lg:font-extrabold md:py-2 text-teal-500">
                    {title}
                  </h2>
                  <p className="text-sm md:text-lg text-teal-500 text-center pb-2 md:py-3 ">
                    {desc}
                  </p>
                  {title === "zakat" ? (
                    <div className="flex justify-center pt-2 md:pt-5 lg:pt-8">
                      <button
                        onClick={() => setZakatCalc(true)}
                        className="bg-teal-500 rounded-lg text-white font-semibold text-lg md:text-xl lg:text-2xl py-2 px-4"
                      >
                        Go to Zakat Calculator
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4 lg:pt-8 md:px-3 lg:px-0">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-3">
                        {orphansOthersList?.map((data, index) =>
                          data === "others" ? (
                            <button
                              key={index}
                              onClick={() => {
                                setInput(true);
                                setBgBtnIndex(index);
                              }}
                              className={`relative group overflow-hidden md:text-xl lg:text-2xl text-gray-500 focus:bg-[#19afaf] bg-white focus:text-white font-semibold py-2 lg:py-3  hover:text-white `}
                            >
                              <span className="absolute w-80 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-36 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:-translate-y-36 ease"></span>
                              <span className="relative ">{data}</span>
                            </button>
                          ) : (
                            <button
                              key={index}
                              onClick={() => {
                                setDollar(data);
                                setDollarDonate(data);
                                setInput(false);
                                setBgBtnIndex(index);
                                setTitleDonate(title);
                                setDollarDonate(data);
                              }}
                              className={`relative group overflow-hidden py-2 lg:py-3 md:text-xl lg:text-2xl text-gray-500 focus:bg-[#19afaf]  focus:text-white font-semibold  hover:text-white ${
                                bgBtnIndex === index
                                  ? "bg-[#19afaf] text-white"
                                  : "bg-white"
                              } `}
                            >
                              <span className="absolute w-80 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-36 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:-translate-y-36 ease"></span>
                              <span className="relative ">{data}</span>
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
                      <p className="text-gray-400 text-sm md:text-md font-medium text-center">
                        Making a donation of {dollar} will help save lives
                      </p>
                    </div>
                  )}
                </div>
                <div className="lg:pl-16">
                  <Image
                    src={image}
                    alt="donation img"
                    width={300}
                    height={300}
                    className="h-60 md:h-72 lg:h-96 w-full shadow-gray-400 shadow-2xl rounded-xl border-4 border-teal-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          {/* monthly one-off */}
          <div className="py-5 md:py-0 lg:py-10 flex">
            <AnimatedComponentLeft>
              <button
                onClick={() => monthlyHandler(monthlyList)}
                className={`border-2 hover:bg-gray-200 relative group overflow-hidden border-[#19afaf] py-2 px-4 md:text-xl lg:text-2xl font-bold text-gray-400 bg-white `}
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                <span className="relative group-hover:text-white">MONTHLY</span>
              </button>
            </AnimatedComponentLeft>
            <AnimatedComponentRight>
              <button
                onClick={() => monthlyHandler(oneOffList)}
                className={`border-2 hover:bg-gray-200 relative group overflow-hidden border-[#19afaf] py-2 px-4 md:text-xl lg:text-2xl font-bold text-gray-400 bg-white `}
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                <span className="relative group-hover:text-white">
                  {" "}
                  ONE-OFF
                </span>
              </button>
            </AnimatedComponentRight>
          </div>
        </div>
      )}
    </div>
  );
};
export default StartSec;
