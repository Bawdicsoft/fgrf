"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import SliderSectionPakistanFlood from "./slider";
import AnimationTop from "@/components/newUi/home/AnimationTop";

const PakistanFloodDocs = () => {
  return (
    <div className="py-10 px-4 xl:px-0">
      <SliderSectionPakistanFlood />

      <p className="capitalize text-sm md:text-lg text-center py-3 md:py-5 font-semibold text-gray-900">
        FGRF swiftly mobilized its resources, reaching every affected area to
        provide critical aid. From distributing tent houses and cooked meals to
        delivering essential ration bags and setting up medical camps, our teams
        worked tirelessly to alleviate suffering and provide immediate relief.
      </p>
      <p className="capitalize text-sm md:text-lg text-center py-3 font-semibold text-gray-90">
        But our commitment didn&#39;t stop there. FGRF made a promise to the
        flood victims: to rebuild their lives by constructing 15,000 houses.
        Today, we&#39;re proud to report that we&#39;ve already surpassed the
        halfway mark, with over 6,000 houses completed and more underway.
      </p>
      <p className="capitalize text-sm md:text-lg text-center py-3 font-semibold text-gray-90">
        JJoin us on our journey to fulfill our promise and bring hope to those
        who have lost everything. Together, we&#39;re making a difference—one
        house, one family at a time.
      </p>
      <div className="flex justify-center">
        <AnimationTop>
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href={"/donation"}>
              <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl md:text-2xl">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                  <span className="relative group-hover:text-white">
                    Donate Now
                  </span>
                </span>
              </button>
            </Link>
          </motion.div>
        </AnimationTop>
      </div>
    </div>
  );
};
export default PakistanFloodDocs;
