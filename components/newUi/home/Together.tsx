"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Form from "@/components/home/Form";
import Image from "next/image";
import AnimationTop from "./AnimationTop";
import AnimationBottom from "./AnimationBtm";
import AnimatedComponentRight from "./AnimationRight";
import AnimatedComponentLeft from "./AnimationLeft";

const Together = () => {
  const [index, setIndex] = useState(0);
  const items = [
    {
      id: 1,
      content: "3,24,000",
      data: "Planted",
    },
    {
      id: 2,
      content: "3,04,000",
      data: "Trees",
    },
    {
      id: 3,
      content: "3,00,000",
      data: "You",
    },
  ];
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section>
      <div className=" h-[500px] relative " id="main">
        <div className="max-w-7xl mx-auto px-3 h-full">
          <div className="w-full mx-auto flex flex-col justify-center gap-4 pt-10 lg:pt-20">
            <div className="flex justify-center">
              <h2 className="max-w-5xl text-center lg:text-5xl leading-none font-normal md:text-3xl text-2xl text-white py-2">
                Changing the world is a big job. Lets do it together.
              </h2>
            </div>
            <div className="flex justify-center pt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <motion.div
                  whileHover={{ scale: 1.6, filter: "brightness(1.5)" }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <div className="flex">
                    <div className="relative w-32 lg:w-40 xl:w-60">
                      <AnimationTop>
                        <Image
                          src={"/blood.png"}
                          alt=""
                          width={200}
                          height={200}
                          className="w-full h-full"
                        />
                      </AnimationTop>
                      <AnimatedComponentLeft>
                        <div className="absolute top-5 -right-12 lg:top-6 xl:top-12 lg:-right-12 xl:-right-5 flex flex-col lg:gap-3">
                          <span className="text-white font-semibold lg:text-lg">
                            54000
                          </span>
                          <span className="text-white font-semibold lg:text-lg">
                            Blood Bags
                          </span>
                        </div>
                      </AnimatedComponentLeft>
                    </div>
                  </div>
                </motion.div>
                <div className="flex">
                  <motion.div
                    // className="box"
                    whileHover={{
                      scale: 1.6,
                      filter: "brightness(1.5)",
                      rotate: 360,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}
                  >
                    <div className="relative w-32 lg:w-40 xl:w-60">
                      <AnimationBottom>
                        <Image
                          src={"/tree.png"}
                          alt=""
                          width={200}
                          height={200}
                          className="w-full h-full"
                        />
                      </AnimationBottom>
                      <AnimatedComponentRight>
                        <div className="absolute top-5 -right-12 lg:top-6 xl:top-12 lg:-right-12 xl:-right-5 flex flex-col  lg:gap-3">
                          <span className="text-white font-semibold lg:text-lg">
                            54000
                          </span>
                          <span className="text-white font-semibold lg:text-lg">
                            Blood Bags
                          </span>
                        </div>
                      </AnimatedComponentRight>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            {/* <div className="flex justify-center gap-4 flex-col items-center md:flex-row mt-3 md:mt-8">
              {items.map((data: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="w-48 h-[70px] font-bold relative py-2 flex justify-center  border-4 border-[#faf8f8] shadow-inner bg-[#efeff1] text-black rounded-full border-y-4 border-x-8 lg:flex lg:items-center lg:flex-col"
                  >
                    <AnimatePresence>
                      <motion.div
                        key={items[index].id}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ ease: 'easeInOut' }}
                        style={{ position: 'absolute' }}
                      >
                        <p className="text-center">{data.content}</p>
                        <p className="text-center">{data.data}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                );
              })}
            </div> */}
          </div>
          <div
            className="absolute animate-pulse opacity-30 maskAnimation bottom-0 right-0 w-full h-[400px] bg-no-repeat bg-center bg-cover "
            style={{ backgroundImage: `url(/img/mask1.svg)` }}
          ></div>
          <div
            className="absolute animate-pulse opacity-40 maskAnimation2 bottom-0 right-0 w-full h-[400px] bg-no-repeat bg-center bg-cover "
            style={{ backgroundImage: `url(/img/mask2.svg)` }}
          ></div>
          <div
            className="absolute animate-pulse opacity-5 bottom-0 right-0 w-full h-[400px] bg-no-repeat bg-center bg-cover "
            style={{ backgroundImage: `url(/img/mask3.svg)` }}
          ></div>
        </div>
      </div>
    </section>
  );
};
export default Together;
