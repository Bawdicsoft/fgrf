import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import AnimationTop from "./AnimationTop";
import AnimationBottom from "./AnimationBtm";
const ContactUs: React.FC = () => {
  return (
    <section className="py-10 ">
      <div className="flex flex-col justify-center items-center px-5 bg-white rounded-lg">
        <AnimationTop>
          <motion.div
            // className="box"
            whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
              <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                Contact Us
              </span>
            </div>
          </motion.div>
        </AnimationTop>
        <div className="bg-white grid grid-cols-1 lg:grid-cols-2  gap-5 p-5 rounded-lg">
          <div className=" grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="">
                <AnimationTop>
                  <label className="font-bold text-sky-800 pl-2">Name</label>
                </AnimationTop>
                <AnimationBottom>
                  <motion.div
                    // className="box"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-2">
                      <input
                        type="text"
                        className="bg-[#19afaf] outline-none text-white font-extrabold p-0.5 text-2xl w-full"
                      />
                    </div>
                  </motion.div>
                </AnimationBottom>
              </div>

              <div className="">
                <AnimationTop>
                  <label className="font-bold text-sky-800 pl-2">
                    Phone No
                  </label>
                </AnimationTop>
                <AnimationBottom>
                  <motion.div
                    // className="box"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-2">
                      <input
                        type="text"
                        className="bg-[#19afaf] text-white outline-none font-extrabold p-0.5 text-2xl w-full"
                      />
                    </div>
                  </motion.div>
                </AnimationBottom>
              </div>
            </div>
            <div>
              <div className="">
                <AnimationTop>
                  <label className="font-bold text-sky-800 pl-2">Email</label>
                </AnimationTop>
                <AnimationBottom>
                  <motion.div
                    // className="box"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-2">
                      <input
                        type="text"
                        className="bg-[#19afaf] outline-none text-white font-extrabold p-0.5 text-2xl w-full"
                      />
                    </div>
                  </motion.div>
                </AnimationBottom>
              </div>
              {/* <div className="">
                <AnimationTop>
                  <label className="font-bold text-sky-800 pl-2">
                    Full Name
                  </label>
                </AnimationTop>
                <AnimationBottom>
                  <motion.div
                    // className="box"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
                      <input
                        type="text"
                        className="bg-[#19afaf] text-white font-extrabold p-0.5 text-2xl max-w-[190px]"
                      />
                    </div>
                  </motion.div>
                </AnimationBottom>
              </div> */}
            </div>
          </div>
          <div>
            <div className="">
              <AnimationTop>
                <label className="font-bold text-sky-800 pl-2">Message</label>
              </AnimationTop>
              <AnimationBottom>
                <motion.div
                  // className="box"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0">
                    <textarea
                      rows={4}
                      className="bg-[#19afaf] outline-none text-white font-extrabold p-0.5 text-2xl resize-none w-full"
                    ></textarea>
                  </div>
                </motion.div>
              </AnimationBottom>
            </div>
          </div>
        </div>
        <AnimationTop>
          <motion.div
            // className="box"
            whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
              <span className="bg-white px-2 text-sky-900 font-extrabold p-0.5 text-2xl">
                Send
              </span>
            </div>
          </motion.div>
        </AnimationTop>
      </div>
    </section>
  );
};
export default ContactUs;
