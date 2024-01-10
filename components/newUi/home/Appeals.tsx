"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Link from "next/link";
import ImageModal from "@/components/modal/ImageModal";
import DonationSlider from "@/components/home/donationSlider";
import AnimatedComponentRight from "./AnimationRight";
import AnimatedComponentLeft from "./AnimationLeft";
import AnimationTop from "./AnimationTop";
import AnimationBottom from "./AnimationBtm";

const Appeals = () => {
  const data = [
    {
      img: "/img/index1.jpeg",
    },
    {
      img: "/img/index2.jpg",
    },
    {
      img: "/img/index3.jpeg",
    },
    {
      img: "/img/index4.jpeg",
    },
    {
      img: "/img/index5.jpg",
    },
  ];
  const [open, setOpen] = useState(false);
  const [certicateImage, setCertificateImage] = useState("");
  const controls = useAnimation();
  const [showButton, setShowButton] = useState(false);

  const handleOpenAndCerticate = (imagePath: string) => {
    setCertificateImage(imagePath);
    setOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 550;

      if (scrollY > triggerPoint && !showButton) {
        setShowButton(true);
        controls.start({ opacity: 1, y: 0 });
      } else if (scrollY <= triggerPoint && showButton) {
        setShowButton(false);
        controls.start({ opacity: 0, y: 50 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, showButton]);

  return (
    <section
      className=" py-6 bg-center bg-cover bg-no-repeat bg-blend-multiply"
      style={{
        backgroundImage: `url("./finalIconAssets/Assest/Secondpage/bgasset.png")`,
        height: "100%",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center max-w-[1200px] mx-auto px-3">
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          > */}
          <AnimationTop>
            <motion.div
              className="box"
              whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div
                id="box3d"
                className="border-4 border-[#85d0d0]  w-60 py-1 bg-[#6898b1] mx-auto rounded-full shadow-lg"
              >
                <h2
                  id=""
                  className="text-2xl md:text-3xl hover:text-sky-800 font-bold text-white text-center"
                >
                  Appeals
                </h2>
              </div>
            </motion.div>
          </AnimationTop>
          {/* </motion.div> */}
        </div>
        <div className="w-2/3 mx-auto py-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <div className="col-span-1 text-center">
            <AnimatedComponentLeft>
              {" "}
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <DonationSlider />
              </motion.div>
            </AnimatedComponentLeft>

            <AnimationTop>
              <motion.div
                // className="box"
                whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <button className="rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                  <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                    Donate Now
                  </span>
                </button>
              </motion.div>
            </AnimationTop>
          </div>
          <div className="col-span-1 text-center">
            <AnimationBottom>
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <DonationSlider />
              </motion.div>
            </AnimationBottom>

            <AnimationTop>
              <motion.div
                // className="box"
                whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <button className="rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                  <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                    Donate Now
                  </span>
                </button>
              </motion.div>
            </AnimationTop>
          </div>
          <div className="col-span-1 text-center">
            <AnimatedComponentRight>
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <DonationSlider />
              </motion.div>
            </AnimatedComponentRight>

            <AnimationTop>
              <motion.div
                // className="box"
                whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <button className="rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                  <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                    Donate Now
                  </span>
                </button>
              </motion.div>
            </AnimationTop>
          </div>
          <div className="col-span-1 text-center">
            <AnimatedComponentLeft>
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <DonationSlider />
              </motion.div>
            </AnimatedComponentLeft>

            <AnimationTop>
              <motion.div
                // className="box"
                whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <button className="rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                  <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                    Donate Now
                  </span>
                </button>
              </motion.div>
            </AnimationTop>
          </div>
          <div className="col-span-1 text-center">
            <AnimationBottom>
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <DonationSlider />
              </motion.div>
            </AnimationBottom>

            <AnimationTop>
              <motion.div
                // className="box"
                whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <button className="rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                  <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                    Donate Now
                  </span>
                </button>
              </motion.div>
            </AnimationTop>
          </div>
          <div className="col-span-1 text-center">
            <AnimatedComponentRight>
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <DonationSlider />
              </motion.div>
            </AnimatedComponentRight>

            <AnimationTop>
              <motion.div
                // className="box"
                whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <button className="rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                  <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                    Donate Now
                  </span>
                </button>
              </motion.div>
            </AnimationTop>
          </div>
          <div className="col-span-1 text-center">
            <AnimatedComponentLeft>
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <DonationSlider />
              </motion.div>
            </AnimatedComponentLeft>

            <AnimationTop>
              <motion.div
                // className="box"
                whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <button className="rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                  <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                    Donate Now
                  </span>
                </button>
              </motion.div>
            </AnimationTop>
          </div>
          <div className="col-span-1 text-center">
            <AnimationBottom>
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <DonationSlider />
              </motion.div>
            </AnimationBottom>

            <AnimationTop>
              <motion.div
                // className="box"
                whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <button className="rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                  <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                    Donate Now
                  </span>
                </button>
              </motion.div>
            </AnimationTop>
          </div>
          <div className="col-span-1 text-center">
            <AnimatedComponentRight>
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <DonationSlider />
              </motion.div>
            </AnimatedComponentRight>

            <AnimationTop>
              <motion.div
                // className="box"
                whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <button className="rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                  <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                    Donate Now
                  </span>
                </button>
              </motion.div>
            </AnimationTop>
          </div>
        </div>
        <div className="w-full absolute top-0 right-0 z-[-1]">
          <img src="./img/new-img/map.png" className="w-full h-full" alt="" />
        </div>
        <ImageModal open={open} setOpen={setOpen} imagePath={certicateImage} />
      </div>
    </section>
  );
};

export default Appeals;
