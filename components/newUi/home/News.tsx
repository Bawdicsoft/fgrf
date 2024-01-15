import Link from "next/link";
import React from "react";
import NewsSlider from "./NewsSlider";
import ContactUs from "./Contactus";
import { motion, useAnimation } from "framer-motion";
import AnimationTop from "./AnimationTop";

const NewsSection: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-r py-20 bg-center bg-cover bg-no-repeat bg-blend-multiply"
      style={{
        backgroundImage: `url("./finalIconAssets/Assest/Secondpage/bgasset.png")`,
        height: "100%",
      }}
    >
      <div className="flex flex-col  items-center px-5">
        <div className="flex flex-col items-center max-w-[400px] py-5 md:py-8 mx-auto px-3">
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
                  News
                </h2>
              </div>
            </motion.div>
          </AnimationTop>
        </div>
        <div className="bg-white grid grid-cols-1 lg:grid-cols-4 max-w-5xl gap-5 p-5 rounded-lg">
          <div className="flex flex-col gap-4 justify-evenly">
            <div>
              <video className="h-full w-full" controls>
                <source src="/video/v2.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <video className="h-full w-full" controls>
                <source src="/video/v2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="md:col-span-2 md:h-[350px]">
            <video className="h-full w-full object-cover outline-none" controls>
              <source src="/video/v2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col gap-4 justify-evenly">
            <div>
              <video className="h-full w-full" controls>
                <source src="/video/v2.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <video className="h-full w-full" controls>
                <source src="/video/v2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* slider */}

      <div className="max-w-5xl mx-auto px-5 pt-2">
        <NewsSlider />
      </div>

      {/* contact us */}
      <div className="flex justify-center items-center">
        <div className="max-w-5xl ">
          <ContactUs />
        </div>
      </div>
    </section>
  );
};
export default NewsSection;
