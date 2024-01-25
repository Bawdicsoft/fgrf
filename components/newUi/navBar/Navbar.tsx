"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { BsStopwatch } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { TfiTimer } from "react-icons/tfi";
import { IoMail } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { LiaDonateSolid } from "react-icons/lia";
import { useState } from "react";
import AnalogWatch from "./AnalogWatch";
export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const data = new Date();
  let gethour = Math.round(data.getHours());
  const mint = Math.round(data.getMinutes());
  let amPm = "AM";
  if (gethour >= 12) {
    amPm = "PM";
  }
  if (gethour > 12) {
    gethour -= 12;
  } else {
    gethour = gethour;
  }
  const day = days[data.getDay()];

  // hide and Show Machinasim
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [moveRight, setmoveRight] = useState(false);

  const resetFilter = { filter: "none" };

  const [toggel, setToggel] = useState<boolean>(false);
  const [logo, setLogo] = useState(false);
  return (
    <>
      <div className="max-w-screen-2xl md:grid flex justify-between py-2 md:py-0  px-3 md:px-0  md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 mx-auto">
        <button
          onMouseMove={() => setLogo(true)}
          onMouseLeave={() => setLogo(false)}
          className="flex relative group overflow-hidden items-center bg-white justify-start md:justify-center"
        >
          <span className="absolute w-full h-0 transition-all duration-500 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-80 group-hover:w-96 group-hover:-translate-y-40 ease"></span>

          <Link href="/">
            <Image
              width={150}
              height={150}
              className="w-24 h-full relative  lg:w-32 lg:h-14 lg:block md:block cursor-pointer"
              src={!logo ? `/img/fgrf.png` : "/img/white-logo.png"}
              alt="tokenLauncher"
            />
          </Link>
        </button>

        {/* new yha */}
        {/* <div className="w-44 mx-auto relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

            <span className="relative group-hover:text-white">Show more</span>
          </span>
        </div> */}
        {/* yha tk */}
        <div className="col-span-3 hidden lg:hidden md:grid grid-cols-1 md:grid-cols-4 px-3 place-items-center  place-content-center ">
          <span className="hover:text-light-blue rounded-md lg:text-xs xl:text-xs font-semibold text-white">
            DONATE TO FUND
          </span>
          <div className="w-24 bg-green-600 shadow-inner  border-[#faf9f9] rounded-md flex justify-center items-center">
            <span className="hover:text-light-blue px-3 rounded-md text-xs font-semibold text-black">
              <strong>&#163;</strong>
            </span>
            <div className="py-1 bg-green-600 shadow-inner  border-[#faf9f9] rounded-md flex justify-around items-center">
              <input
                type="number"
                id="small-input"
                placeholder="Amount"
                className="block w-full font-semibold bg-transparent sm:text-xs outline-none focus:border-transparent focus:ring-0 focus:outline-none"
                required
              />
            </div>
          </div>

          <select
            id="countries"
            className="bg-sky-600 p-1 text-white rounded-lg  font-semibold text-xs block  outline-none"
            required
          >
            <option value="single">Single</option>
            <option value="monthly">Monthly</option>
          </select>
          <button className="cursor-pointer hover:text-light-blue px-3 py-2 rounded-md lg:text-xs xl:text-xs text-white font-extrabold">
            DONATE NOW
          </button>
        </div>
        <div className="hidden md:col-span-5 lg:col-span-4 xl:col-span-5 md:flex flex-col bg-white">
          {/* containter-1 */}
          <div className="grid grid-col-1 md:grid-cols-4 lg:grid-cols-7">
            <div className="grid grid-cols-2 md:grid-cols-5 place-content-center place-items-center md:py-4  border-r border-black ">
              <div className="bg-black text-white  rounded-full w-5 h-5 flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.6,
                    // filter: "brightness(1.8)",
                    // rotate: 50,
                    filter: "drop-shadow(0px 0px 10px rgba(256, 0, 0, 0.9))",
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  style={isHovered ? resetFilter : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <CgFacebook className="w-4 h-4" />
                </motion.div>
              </div>
              <div className="bg-black text-white  rounded-full w-5 h-5 flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.6,
                    // filter: "brightness(1.8)",
                    // rotate: 50,
                    filter: "drop-shadow(0px 0px 10px rgba(256, 0, 0, 0.9))",
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  style={isHovered ? resetFilter : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <IoLogoInstagram className="w-4 h-4" />
                </motion.div>
              </div>
              <div className="bg-black text-white rounded-full w-5 h-5 flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.6,
                    // filter: "brightness(1.8)",
                    // rotate: 50,
                    filter: "drop-shadow(0px 0px 10px rgba(0, 0, 256, 0.9))",
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  style={isHovered ? resetFilter : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <FaTwitter className="w-3 h-3" />
                </motion.div>
              </div>
              <div className="bg-black text-white rounded-full w-5 h-5 flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.6,
                    // filter: "brightness(1.8)",
                    // rotate: 50,
                    filter: "drop-shadow(0px 0px 10px rgba(0, 25, 256, 0.9))",
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  style={isHovered ? resetFilter : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <IoLogoTiktok className="w-3 h-3" />
                </motion.div>
              </div>
              <div className="bg-black text-white w-5 h-5  rounded-full flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.6,
                    // filter: "brightness(1.8)",
                    // rotate: 50,
                    filter: "drop-shadow(0px 0px 10px rgba(0, 256, 0, 0.9))",
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  style={isHovered ? resetFilter : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <svg
                    className="text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                </motion.div>
              </div>
            </div>

            <div className="lg:col-span-5  hidden lg:grid grid-cols-1 md:grid-cols-4 px-3 place-items-center  place-content-center border-r border-black">
              <Link
                href={"/donation"}
                className="relative group overflow-hidden bg-sky-900 text-white px-5 py-1 text-sm"
              >
                <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-14 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:w-96 group-hover:-translate-y-32 ease"></span>
                <span className="relative"> DONATE TO FUND</span>
              </Link>
              <div className="w-full  bg-[#ddd] shadow-inner  border-[#faf9f9] rounded-sm flex justify-center items-center">
                <span className="hover:text-light-blue px-3 rounded-sm text-s font-semibold text-sky-700">
                  <strong>&#163;</strong>
                </span>
                <div className="py-1 bg-[#eee] shadow-inner  border-[#faf9f9] rounded-sm flex justify-around items-center">
                  <input
                    type="number"
                    id="small-input"
                    placeholder="Amount"
                    className="block pl-2 w-full font-semibold bg-transparent sm:text-xs outline-none focus:border-transparent focus:ring-0 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <select
                id="countries"
                className="bg-gray-200 py-1 px-2 rounded-md xl:w-36  text-black font-medium text-xs block  outline-none"
                required
              >
                <option value="single">Single</option>
                <option value="monthly">Monthly</option>
                <option value="Others">Others</option>
              </select>
              <Link
                href={"/donation"}
                className="relative group overflow-hidden bg-sky-900 text-white py-1 px-3 text-sm"
              >
                <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-14 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:w-96 group-hover:-translate-y-32 ease"></span>
                <span className="relative"> DONATE NOW</span>
              </Link>
            </div>
            <div className=" border-r border-black flex justify-center items-center">
              <div className="flex items-center justify-evenly ">
                {/* <BsStopwatch className="w-5 h-5 lg:w-3.5 lg:h-3.5" />
                 */}
                {/* <AnalogWatch></AnalogWatch> */}
                <p className="text-[14px] lg:text-[12px] pl-1 text-gray-700 font-semibold">
                  {day} At {gethour < 10 ? `0${gethour}` : gethour}:
                  {mint < 10 ? "0" + mint : mint} {amPm}
                </p>
              </div>

              {/* <motion.div
                whileHover={{
                  scale: 1.6,
                  x: -50,
                }}
                onHoverStart={() => setShow1(true)}
                onHoverEnd={() => setShow1(false)}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <div
                  className={`flex items-center  ${
                    show2 ? `hidden` : "hover:text-red-400 hover:font-bold"
                  }`}
                >
                  <IoMail className=" w-5 h-5 lg:w-3.5 lg:h-3.5" />
                  <p className="text-[14px] lg:text-[11px] pl-1 text-gray-700">
                    www.FGRF UK.com
                  </p>
                </div>
              </motion.div> */}
            </div>
          </div>
          {/* containter-2 */}
          <div className="grid grid-cols-3 border-b-0 border-t border-black">
            <div className="md:col-span-2 grid grid-cols-3 place-content-center place-items-center lg:grid-cols-3 border-b-0 border-r border-black">
              <a
                href="#ourDepartment"
                className="text-xl font-bold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400"
              >
                Our Department
              </a>
              <Link
                href={"/appeal"}
                className="text-xl font-bold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400"
              >
                Appeal
              </Link>
              <Link
                href={"/donation"}
                className="text-xl font-bold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400"
              >
                Donation
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 place-content-center">
              <div className="md:col-span-2 flex justify-center items-center px-3">
                {/* <h1
                  className={`
                  text-base font-bold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 ${
                show3 ? "hidden" : ""
              }`}
                >
                  Call now
                </h1> */}
                <motion.div
                  whileHover={{
                    scale: 1.3,
                  }}
                  onHoverStart={() => setShow3(true)}
                  onHoverEnd={() => setShow3(false)}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <div
                    className={`flex items-center font-semibold text-gray-500 hover:text-red-400 hover:font-bold`}
                    //  ${
                    //   show3 ? "lg:ml-5" : ""
                    // }
                  >
                    <FiPhoneCall className="w-4.5 h-4.5" />
                    <span className="text-lg pl-1">+44 7300 559919</span>
                  </div>
                </motion.div>
              </div>

              {/* yeha sy */}
              {/* <a
                href="#_"
                className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white"
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                  Button Text
                </span>
              </a> */}

              {/* yeha tk */}

              <Link
                href={"/donation"}
                className="bg-sky-800 p-2 text-white flex flex-col justify-center items-center px-3.5 py-2 overflow-hidden relative group cursor-pointer font-medium"
              >
                {/* <motion.div
                  whileHover={{
                    scale: 1.4,
                    rotate: 50,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                > */}{" "}
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <LiaDonateSolid className="w-10 h-10 relative transition duration-300 group-hover:text-red-600 ease" />
                <span className="relative text-xs font-semibold text-white text-center group-hover:text-red-600">
                  Donate Now
                </span>
                {/* </motion.div> */}
              </Link>
            </div>
          </div>
        </div>
        {/* onClick={() => setToggel(!toggel)} */}
        {/* className="md:hidden self-center text-gray-200 ml-32" */}
        <button
          onClick={() => setToggel(!toggel)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  text-gray-400 border border-gray-400  focus:outline-none focus:ring-1 focus:ring-gray-400"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      {/* handle Toggel Container */}
      {toggel && (
        <div className="absolute top-12 z-50 w-full">
          <ul className="flex flex-col p-4 mt-4 font-medium border border-green-200 rounded-lg bg-sky-800">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white font-semibold "
                aria-current="page"
              >
                Our Department
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white font-semibold ">
                Appeal
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white font-semibold ">
                Donation
              </a>
            </li>
            <li>
              <hr className="my-2 h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-green-200 to-transparent opacity-25" />
              <div className="flex justify-between items-center py-2 px-3">
                <h1 className="text-white font-semibold ">Call now</h1>
                <div className="flex justify-start items-center">
                  <FiPhoneCall className="w-3.5 h-3.5 text-gray-200" />
                  <span className="text-sm pl-1 text-gray-300">
                    +44 7300 559919
                  </span>
                </div>
              </div>
            </li>
            <li className="flex justify-between py-2 px-3">
              <button className="cursor-pointer text-white">DONATE NOW</button>
              {/* <div className="bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-0"> */}
              <select
                id="countries"
                className="bg-sky-700 text-white p-1 rounded-lg font-semibold text-xs block  outline-none"
                required
              >
                <option value="single">Single</option>
                <option value="monthly">Monthly</option>
              </select>
              {/* </div> */}
            </li>
            <li className="flex justify-between py-2 px-3">
              <span className=" text-white">DONATE TO FUND</span>
              {/* <div className="bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-0"> */}
              <div className="w-24 bg-green-600  shadow-inner  border-[#faf9f9] rounded-md flex justify-center items-center">
                <span className="px-2 rounded-md text-xs font-semibold">
                  <strong>&#163;</strong>
                </span>
                <div className="py-1 bg-green-600 shadow-inner  border-[#faf9f9] rounded-md flex justify-around items-center">
                  <input
                    type="number"
                    id="small-input"
                    placeholder="Amount"
                    className="block w-full bg-green-600 font-semibold  sm:text-xs outline-none focus:border-transparent focus:ring-0 focus:outline-none"
                    required
                  />
                </div>
                {/* </div> */}
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
