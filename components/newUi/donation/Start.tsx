import Image from "next/image";
import React from "react";
import AnimationTop from "../home/AnimationTop";
import { motion, useAnimation } from "framer-motion";
import AnimatedComponentLeft from "../home/AnimationLeft";
import AnimatedComponentRight from "../home/AnimationRight";
interface StartSecProps {
  monthlyHandler: (data: string[]) => void;
}
const monthlyList = [
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
          <Image
            src={"/donationNew.webp"}
            alt="donationImg"
            width={500}
            height={400}
          />
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
