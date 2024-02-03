"use client";
import Image, { StaticImageData } from "next/image";
import { use, useState } from "react";

import { motion, useAnimation } from "framer-motion";
import AnimationTop from "@/components/newUi/home/AnimationTop";
import AnimationBottom from "@/components/newUi/home/AnimationBtm";

const PakistanFloodBannerSection = () => {
  const [docs, setDocs] = useState(0);
  const oneOffBtnList = [
    { title: "50", doc: "Could provide food supplies for Palestinians." },
    {
      title: "100",
      doc: "Could help provide a range of medical consumables to support the injured.",
    },
    {
      title: "100",
      doc: "Could provide 15 Palestinians with 2 life-saving nutritious food packs each.",
    },
    {
      title: "200",
      doc: "Could provide critical medical supplies to aid the injured.",
    },
    {
      title: "300",
      doc: "Could provide 50 Palestinians with 6 nutritious food packs each.",
    },
    {
      title: "900",
      doc: "Could provide 9 x Medical Consumables Packs of life-critical medicine to over 100 Palestinians.",
    },
    {
      title: "1500",
      doc: "Could provide 15 x Medical Consumables Packs of life-critical medicine to over 100 Palestinians.",
    },
    {
      title: "3000",
      doc: "Could provide 15 x Critical Medical Packs to provide emergency medical assistance for over 100 Palestinians.",
    },
  ];
  const monthBtnList = [
    {
      title: "9",
      doc: "Could provide 2 x life-saving Food Packs of nutritious meals to over 15 Palestinians.",
    },
    {
      title: "25",
      doc: "Could provide 6 x life-saving Food Packs of nutritious meals to over 50 Palestinians.",
    },
    {
      title: "75",
      doc: "Could provide 9 x Medical Consumables Packs of life-critical medicine to over 100 Palestinians.",
    },
    {
      title: "125",
      doc: "Could provide 15 x Medical Consumables Packs of life-critical medicine to over 100 Palestinians.",
    },
    {
      title: "250",
      doc: "Could provide 15 x Critical Medical Packs to provide emergency medical assistance for over 100 Palestinians.",
    },
  ];

  const [packeges, setPackeges] = useState(oneOffBtnList);
  const [bgColor, setBgColor] = useState(true);
  const [bgBtn, setbgBtn] = useState(0);

  return (
    <div className="pt-10 lg:pt-20">
      <div className="flex flex-col items-center max-w-[1200px] mx-auto px-3">
        <AnimationTop>
          <motion.div
            whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div
              id="box3d"
              className="border-4 border-[#85d0d0]  w-60 md:w-80 py-1 md:py-2 bg-[#6898b1] mx-auto rounded-full shadow-lg px-5"
            >
              <h2
                id=""
                className="text-xl md:text-3xl hover:text-sky-800 font-bold text-white text-center"
              >
                Our Department
              </h2>
            </div>
          </motion.div>
        </AnimationTop>
      </div>
      <div className="grid grid-cols-1 gap-8 md:gap-3 lg:gap-12 lg:grid-cols-3 pt-16 px-5">
        {/* <div className="flex flex-col gap-2">
          <h3 className=" text-2xl md:text-3xl text-gray-800">
            {" "}
            Disaster Management
          </h3>
          <span className="w-full h-[2px] bg-teal-500"></span>
          <div className="grid grid-cols-2">
            <button
              className={
                bgColor
                  ? `p-2 lg:p-3 bg-teal-500 text-white text-lg`
                  : `bg-gray-100`
              }
              onClick={() => {
                setPackeges(oneOffBtnList);
                setDocs(0);
                setbgBtn(0);
                setBgColor(true);
              }}
            >
              One Off
            </button>
            <button
              className={
                !bgColor
                  ? `p-2 lg:p-3 bg-teal-500 text-white text-lg`
                  : `bg-gray-100`
              }
              onClick={() => {
                setPackeges(monthBtnList);
                setDocs(0);
                setbgBtn(0);
                setBgColor(false);
              }}
            >
              Monthly
            </button>
          </div>
          <div className="flex flex-col shadow-2xl py-4 px-3 lg:px-5">
            <select className="focus:outline-none border-2 border-gray-400 rounded-xl px-2 py-2">
              Disaster Management
              <option className="text-md" value={"Palestine"}>
                Disaster Management
              </option>
            </select>
            <p className="text-base lg:text-lg py-4">{packeges[docs].doc}</p>
            <div className="grid grid-cols-3 gap-5 md:gap-1 lg:gap-5 pr-5 md:pr-0 lg:pr-8 pb-5">
              {packeges.map((btn, index) => (
                <button
                  key={index}
                  className={
                    index === bgBtn
                      ? `border-2 border-gray-300  text-white bg-teal-500 p-2 rounded-xl`
                      : `border-2 border-gray-300 hover:bg-gray-300 p-2 rounded-xl`
                  }
                  onClick={() => {
                    setDocs(index);
                    setbgBtn(index);
                  }}
                >
                  £{btn.title}
                </button>
              ))}
            </div>
            <input
              type="number"
              placeholder="Other Amount"
              className="focus:outline-none border-2 border-gray-400 rounded-xl p-4 py-2 "
            />
            <p className="text-base">
              Your donations will go to this appeals general fund, so your
              generosity can help where its needed most!
            </p>
            <button className="bg-teal-500 hover:opacity-90 text-white font-medium p-3 rounded-lg mt-4 mb-2">
              Add to Basket
            </button>
          </div>
        </div> */}
        <div className="border-4 border-sky-600 rounded-xl lg:col-span-2">
          <video className="h-full w-full rounded-lg" controls>
            <source src="/Videonews/4.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col items-center">
          <AnimationBottom>
            <div className="relative group overflow-hidden bg-sky-700 w-full xl:w-96 font-semibold text-xl py-3 px-5 md:px-8 md:text-2xl rounded-2xl">
              <span className="absolute w-96 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-8 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:-translate-y-40 ease"></span>
              <span className="text-white group-hover:text-white relative ">
                Pakistan Flood
              </span>
            </div>
          </AnimationBottom>
          <motion.div
            // className="box"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: "10",
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <motion.div
              whileHover={{
                scale: 0.8,
                filter: "brightness(1.5)",
                overflow: "hidden",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src={"/finalIconAssets/OurdepatmentSlider/fireHome1.png"}
                alt=""
                width={700}
                height={700}
                className="h-auto w-auto mt-24"
              />
            </motion.div>
          </motion.div>
          {/* </motion.div> */}
        </div>
      </div>
    </div>
  );
};
export default PakistanFloodBannerSection;
