import Image from "next/image";
import React from "react";
import AnimationTop from "../home/AnimationTop";
import { motion, useAnimation } from "framer-motion";
import AnimatedComponentLeft from "../home/AnimationLeft";
import AnimatedComponentRight from "../home/AnimationRight";
interface StartSecProps {
  monthlyHandler: (data: string[]) => void;
}
const monthlyList = ["Sadaqah", "water", "food", "emergency"];
const oneOffList = [
  " Zakat ",
  "Palestine appeal ",
  "Winter Appeal ",
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
const StartSec: React.FC<StartSecProps> = ({ monthlyHandler }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <AnimationTop>
        <motion.div
          whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div
            id="box3d"
            className="border-4 mb-4 border-[#85d0d0]  max-w-2xl py-1 md:py-3 bg-[#6898b1] mx-auto rounded-full shadow-lg"
          >
            <h2
              id=""
              className="text-xl px-3 md:px-5 md:text-3xl uppercase hover:text-sky-800 font-bold text-white text-center"
            >
              Make your donation
            </h2>
          </div>
        </motion.div>
      </AnimationTop>
      <div>
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
          {/* <Image
            src={"/donationNew.webp"}
            alt="donationImg"
            width={500}
            height={400}
          /> */}

          {/* new images */}
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
      </div>
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
