"use client";
import Image, { StaticImageData } from "next/image";
import { use, useState } from "react";
import AnimationTop from "../../home/AnimationTop";
import { motion, useAnimation } from "framer-motion";
import AnimationBottom from "../../home/AnimationBtm";
const DisasterBannerSection = () => {
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

  return (
    <div className="px-4 md:px-4 xl:px-0">
      <div className="flex flex-col items-center max-w-screen-lg mx-auto px-3 pt-4 md:py-10">
        <AnimationTop>
          <motion.div
            whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div
              id="box3d"
              className="border-4 border-[#85d0d0] w-[260px]  md:w-full py-1 md:py-2 bg-[#6898b1] mx-auto rounded-full shadow-lg md:px-5"
            >
              <h2
                id=""
                className="text-xl md:text-3xl hover:text-sky-800 font-bold text-white text-center"
              >
                Disaster Management
              </h2>
            </div>
          </motion.div>
        </AnimationTop>
      </div>
      {/* <div className="grid grid-cols-1 gap-8 md:gap-3 lg:gap-12  lg:grid-cols-3 pt-16 px-5">
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
                Disaster Management
              </span>
            </div>
          </AnimationBottom>
          <motion.div
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
        </div>
      </div> */}

      <div className="py-5">
        <Image
          src={"/ourDepartment/disaster/hero.jpg"}
          alt="about image"
          width={2000}
          height={2000}
          className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
        />
      </div>
    </div>
  );
};
export default DisasterBannerSection;
