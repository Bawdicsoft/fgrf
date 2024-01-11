import Link from "next/link";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import AnimationBottom from "./AnimationBtm";
import AnimationTop from "./AnimationTop";
import { FaAngleLeft } from "react-icons/fa6";
import AnimatedComponentLeft from "./galleryAnimation/AnimationLeft";
import AnimatedComponentRight from "./galleryAnimation/AnimationRight";

const gallery = [
  "./img/galleryImg2.png",
  "./img/galleryImg2.png",
  "./img/galleryImg2.png",
  "./img/galleryImg2.png",
  "./img/galleryImg2.png",
  "./img/galleryImg2.png",
];
const Gallery: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-r pb-10 bg-center bg-cover bg-no-repeat bg-blend-multiply"
      style={{
        backgroundImage: `url("./finalIconAssets/Assest/Secondpage/bgasset.png")`,
        height: "100%",
      }}
    >
      <div className="relative max-w-6xl mx-auto px-5">
        {/* <div className="mb-6 w-60 mx-auto rounded-full border-4 border-[#faf8f8] shadow-xl bg-[#efeff1] py-1">
          <h2 className="text-xl md:text-2xl font-semibold text-center">
            Gallery
          </h2>
        </div> */}
        <div className="flex justify-center ">
          <AnimationTop>
            <motion.div
              // className="box"
              whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h2 className="text-center w-40 text-white pt-10 pb-8 text-2xl md:text-3xl lg:text-5xl font-bold">
                Gallery
              </h2>
            </motion.div>
          </AnimationTop>
        </div>

        <div className="w-full mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-8 px-2 mt-5 pb-8">
            <AnimatedComponentLeft>
              <div className="flex flex-col gap-5 md:gap-6 lg:gap-10">
                {gallery.slice(0, 2).map((data, index) => (
                  <motion.div
                    key={index}
                    className="box"
                    whileHover={{ scale: 1.1, filter: "brightness(1.3)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="col-span-1 h-60 lg:h-64 bg-[#f1fcd1] relative rounded-lg border-[3px] border-[#7caec1] shadow-2xl flex flex-col justify-center items-center gap-y-3">
                      <img
                        src={data}
                        className="w-full h-full opacity-90"
                        alt=""
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedComponentLeft>

            <AnimationBottom>
              <div className="flex flex-col gap-5 md:gap-6 lg:gap-10">
                {gallery.slice(2, 4).map((data, index) => (
                  <motion.div
                    key={index}
                    className="box"
                    whileHover={{ scale: 1.1, filter: "brightness(1.3)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="col-span-1 h-60 lg:h-64 bg-[#f1fcd1] relative rounded-lg border-[3px] border-[#7caec1] shadow-2xl flex flex-col justify-center items-center gap-y-3">
                      <img
                        src={data}
                        className="w-full h-full opacity-90"
                        alt=""
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimationBottom>

            <AnimatedComponentRight>
              <div className="flex flex-col gap-5 md:gap-6 lg:gap-10">
                {gallery.slice(4, 6).map((data, index) => (
                  <motion.div
                    key={index}
                    className="box"
                    whileHover={{ scale: 1.1, filter: "brightness(1.3)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="col-span-1 h-60 lg:h-64 bg-[#f1fcd1] relative rounded-lg border-[3px] border-[#7caec1] shadow-2xl flex flex-col justify-center items-center gap-y-3">
                      <img
                        src={data}
                        className="w-full h-full opacity-90"
                        alt=""
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedComponentRight>
          </div>
          <Link
            href={"/gallery"}
            className="flex flex-col items-center max-w-[1400px] mx-auto px-3"
          >
            <AnimationBottom>
              <motion.div
                // className="box"
                whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-44 mx-auto rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
                  <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                    Show more
                  </span>
                </div>
              </motion.div>
            </AnimationBottom>
          </Link>
        </div>
        {/* <div className="absolute w-full h-full z-[1] top-1/2 -translate-y-1/2 md:flex md:items-center ">
          <img
            src="./img/new-img/gallery.png"
            className="w-full h-[70%]"
            alt=""
          />
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;
