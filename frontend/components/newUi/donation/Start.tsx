import Image from "next/image";
import React, { useState } from "react";
import AnimationTop from "../home/AnimationTop";
import { motion, useAnimation } from "framer-motion";
import AnimatedComponentLeft from "../home/AnimationLeft";
import AnimatedComponentRight from "../home/AnimationRight";
interface StartSecProps {
  monthlyHandler: (data: string[]) => void;
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
const StartSec: React.FC<StartSecProps> = ({ monthlyHandler }) => {
  // const [otherBtnDollar, seOtherBtnDollar] = useState<any[]>();
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
  return (
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
              className="text-lg px-3  md:px-5 md:text-3xl uppercase hover:text-sky-800 font-bold text-white text-center"
            >
              Make your donation
            </h2>
          </div>
        </motion.div>
      </AnimationTop>
      {/* <div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: "20",
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2 lg:gap-1  mx-auto">
            <Image
              src={"/donationImg/1.jpeg"}
              alt="donation img"
              width={300}
              height={300}
              className="h-60 md:h-40"
            />
            <Image
              src={"/donationImg/2.jpeg"}
              alt="donation img"
              width={300}
              height={300}
              className="h-60 md:h-40"
            />
            <Image
              src={"/donationImg/3.jpeg"}
              alt="donation img"
              width={300}
              height={300}
              className="h-60 md:h-40"
            />
            <Image
              src={"/donationImg/4.jpeg"}
              alt="donation img"
              width={300}
              height={300}
              className="h-60 md:h-40"
            />
          </div>
        </motion.div>
      </div> */}

      {/* new Code today 29-1-2024 */}
      <div className="flex flex-col gap-4 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
          {orphansOthersList?.map((title, index) =>
            title === "others" ? (
              <button
                key={index}
                onClick={() => {
                  setInput(true);
                  setBgBtnIndex(index);
                }}
                className={`relative group overflow-hidden text-3xl text-gray-500 focus:bg-[#19afaf] bg-white focus:text-white font-semibold py-3 px-5  hover:text-white `}
              >
                <span className="absolute w-80 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-36 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:-translate-y-36 ease"></span>
                <span className="relative ">{title}</span>
              </button>
            ) : (
              <button
                key={index}
                onClick={() => {
                  setDollar(title);
                  setDollarDonate(title);
                  setInput(false);
                  setBgBtnIndex(index);
                }}
                className={`relative group overflow-hidden text-3xl text-gray-500 focus:bg-[#19afaf]  focus:text-white font-semibold py-3 px-5  hover:text-white ${
                  bgBtnIndex === index ? "bg-[#19afaf] text-white" : "bg-white"
                } `}
              >
                <span className="absolute w-80 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-36 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:-translate-y-36 ease"></span>
                <span className="relative ">{title}</span>
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
        <p className="text-gray-400 text-lg font-medium text-center">
          Making a donation of {dollar} will help save lives
        </p>
      </div>

      {/* monthly one-off */}
      <div className="py-10 flex">
        <AnimatedComponentLeft>
          <button
            onClick={() => monthlyHandler(monthlyList)}
            className={`border-2 hover:bg-gray-200 relative group overflow-hidden border-[#19afaf] py-2 px-4 md:text-2xl font-bold text-gray-400 bg-white `}
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

            <span className="relative group-hover:text-white">MONTHLY</span>
          </button>
        </AnimatedComponentLeft>
        <AnimatedComponentRight>
          <button
            onClick={() => monthlyHandler(oneOffList)}
            className={`border-2 hover:bg-gray-200 relative group overflow-hidden border-[#19afaf] py-2 px-4 md:text-2xl font-bold text-gray-400 bg-white `}
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

            <span className="relative group-hover:text-white"> ONE-OFF</span>
          </button>
        </AnimatedComponentRight>
      </div>
    </div>
  );
};
export default StartSec;
