import Link from "next/link";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import AnimationBottom from "./AnimationBtm";
import AnimationTop from "./AnimationTop";
import { FaAngleLeft } from "react-icons/fa6";
import AnimatedComponentLeft from "./galleryAnimation/AnimationLeft";
import AnimatedComponentRight from "./galleryAnimation/AnimationRight";

const gallery = [
  { id: 1, img: "./GalleryNew/55.jpg" },
  { id: 2, img: "./GalleryNew/20.jpg" },
  { id: 3, img: "./GalleryNew/34.jpg" },
  { id: 4, img: "./GalleryNew/58.jpg" },
  { id: 5, img: "./GalleryNew/16.jpg" },
  { id: 6, img: "./GalleryNew/15.jpg" },
];

const Gallery: React.FC = () => {
  const controls = useAnimation();
  const [border, setBorder] = useState<Boolean>(true);
  const [picIndex, setPicIndex] = useState<number>();
  const [btnIndex, setBtnIndex] = useState(false);

  const borderHandler = () => {
    // console.log(picIndex);
    setTimeout(() => {
      setBorder(false);
    }, 600);
  };
  // const borderHandler1 = (index: number) => {
  //   setPicIndex(index);
  //   console.log(picIndex);
  // };
  // const handleHover = () => {
  //   controls.start({
  //     scale: 1.1,
  //     filter: "brightness(1.3)",
  //   });
  // };

  // const handleHoverExit = () => {
  //   controls.start({
  //     scale: 1,
  //     filter: "brightness(1)",
  //   });
  // };

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
        <Link
          href={"/gallery"}
          className="flex flex-col items-center max-w-[1200px] py-5 md:py-8 mx-auto px-3"
        >
          <AnimationTop>
            <motion.div
              whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div
                id="box3d"
                className="border-4 border-[#85d0d0]  w-60 md:w-80 py-1 bg-[#6898b1] mx-auto rounded-full shadow-lg"
              >
                <h2
                  id=""
                  className="text-2xl md:text-3xl hover:text-sky-800 font-bold text-white text-center"
                >
                  Gallery
                </h2>
              </div>
            </motion.div>
          </AnimationTop>
        </Link>

        <div className="w-full mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-8 px-2 mt-5 pb-8">
            <AnimatedComponentLeft>
              <div className="flex flex-col items-center gap-5 md:gap-6 lg:gap-10">
                {gallery.slice(0, 2).map((data, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => {
                      setPicIndex(data.id);
                      setBorder(!border);
                      setBtnIndex(true);
                      // setBtnIndex(index)
                      console.log(picIndex);
                    }}
                    onMouseLeave={() => {
                      borderHandler();
                      setBtnIndex(false);
                    }}
                    className={`card1 relative group w-full h-full rounded-lg  border-[#7caec1]  shadow-2xl flex flex-col justify-center items-center gap-y-3 ${
                      picIndex === data.id
                        ? border
                          ? "border-0"
                          : "border-[3px]"
                        : "border-[3px]"
                    }`}
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        src={data.img}
                        className="w-full h-full opacity-90 rounded-lg"
                        alt=""
                      />
                    </div>{" "}
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      {" "}
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {" "}
                        <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>{" "}
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.{" "}
                          </p>{" "}
                        </div>{" "}
                        {btnIndex && picIndex === data.id && (
                          <motion.div
                            // className="box"
                            whileHover={{ scale: 1.2 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            <Link href={"/donation"}>
                              <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                  <span className="relative group-hover:text-white">
                                    Donate Now
                                  </span>
                                </span>
                              </button>
                            </Link>
                          </motion.div>
                        )}
                      </div>{" "}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedComponentLeft>

            <AnimationBottom>
              <div className="flex flex-col items-center gap-5 md:gap-6 lg:gap-10">
                {gallery.slice(2, 4).map((data, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => {
                      setPicIndex(data.id);
                      setBorder(!border);
                      setBtnIndex(true);
                      console.log(picIndex);
                    }}
                    onMouseLeave={() => {
                      borderHandler();
                      setBtnIndex(false);
                    }}
                    className={`card1 relative group w-full h-full rounded-lg  border-[#7caec1]  shadow-2xl flex flex-col justify-center items-center gap-y-3 ${
                      picIndex === data.id
                        ? border
                          ? "border-0"
                          : "border-[3px]"
                        : "border-[3px]"
                    }`}
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        src={data.img}
                        className="w-full h-full opacity-90 rounded-lg"
                        alt=""
                      />
                    </div>{" "}
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      {" "}
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {" "}
                        <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>{" "}
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.{" "}
                          </p>{" "}
                        </div>{" "}
                        {btnIndex && picIndex === data.id && (
                          <motion.div
                            // className="box"
                            whileHover={{ scale: 1.2 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            <Link href={"/donation"}>
                              <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                  <span className="relative group-hover:text-white">
                                    Donate Now
                                  </span>
                                </span>
                              </button>
                            </Link>
                          </motion.div>
                        )}
                      </div>{" "}
                    </div>
                  </div>
                ))}
              </div>
            </AnimationBottom>

            <AnimatedComponentRight>
              <div className="flex flex-col items-center gap-5 md:gap-6 lg:gap-10">
                {gallery.slice(4, 6).map((data, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => {
                      setPicIndex(data.id);
                      setBorder(!border);
                      setBtnIndex(true);
                      console.log(picIndex);
                    }}
                    onMouseLeave={() => {
                      borderHandler();
                      setBtnIndex(false);
                    }}
                    className={`card1 relative group w-full h-full rounded-lg  border-[#7caec1]  shadow-2xl flex flex-col justify-center items-center gap-y-3 ${
                      picIndex === data.id
                        ? border
                          ? "border-0"
                          : "border-[3px]"
                        : "border-[3px]"
                    }`}
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        src={data.img}
                        className="w-full h-full opacity-90 rounded-lg"
                        alt=""
                      />
                    </div>{" "}
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      {" "}
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {" "}
                        <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>{" "}
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.{" "}
                          </p>{" "}
                        </div>{" "}
                        {btnIndex && picIndex === data.id && (
                          <motion.div
                            // className="box"
                            whileHover={{ scale: 1.2 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            <Link href={"/donation"}>
                              <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                  <span className="relative group-hover:text-white">
                                    Donate Now
                                  </span>
                                </span>
                              </button>
                            </Link>
                          </motion.div>
                        )}
                      </div>{" "}
                    </div>
                  </div>
                  // </motion.div>
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
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-44 mx-auto relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                    <span className="relative group-hover:text-white">
                      Show more
                    </span>
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
