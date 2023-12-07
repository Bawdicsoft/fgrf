"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";

export default function Navbar() {
  const [getValue, setGetValue] = useState("Our Partners");
  const handleClick = (event: any) => {
    const clickedVal = event.target.textContent;
    setGetValue(clickedVal);
  };

  console.log(getValue,"Value")
  const [open, setOpen] = useState(false);
  const navItem = [
    {
      name: "Our Partners",
    },
    {
      name: "Achievement",
    },
    {
      name: "Our Department",
    },
    {
      name: "Project",
    },
    {
      name: "CEO Message",
    },
  ];
  return (
    <>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-[50] lg:w-full w-[95%]">
        <div
          style={{ backgroundImage: `url(./img/new-img/Button-06.png)`}}
          className="relative rounded-xl flex items-center justify-between md:mx-auto md:max-w-[1200px] px-3 lg:px-10 h-14 w-full bg-no-repeat bg-cover bg-center"
        >
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start h-full">
            <div className="flex-shrink-0 flex items-center p-1 rounded-lg">
              <Link href="/">
                <img
                  className="w-20 lg:block md:block cursor-pointer"
                  src="/img/fgrf.png"
                  alt="tokenLauncher"
                />
              </Link>
              <div></div>
            </div>
            <div className="hidden h-full absolute inset-y-0 right-0 lg:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="h-full">
                <div
                  className={`flex items-center font-raleway-font text-black h-full gap-x-2`}
                >
                  {navItem.map((data, index) => (
                    <div
                      onClick={handleClick}
                      className={`w-36 rounded-full h-10 border-4 border-[#faf8f8] shadow-inner bg-[#efeff1] flex justify-center items-center ${
                        data.name == getValue && "bg-teal-200 bg-opacity-30"
                      }`}
                      key={index}
                    >
                      <Link
                        href="/"
                        className="cursor-pointer hover:text-light-blue px-3 py-2 rounded-md text-sm font-semibold"
                      >
                        {data.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-36 font-bold h-10 border-4 border-[#faf8f8] shadow-inner bg-[#efeff1] hidden text-black rounded-full lg:flex lg:justify-center lg:gap-2 lg:items-center">
            Donation
            {/* <img src="/img/donate.png" alt="" /> */}
          </div>
          <div className="lg:hidden block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={`w-6 h-6 text-black`}
              onClick={() => setOpen(true)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <div className="w-full lg:block hidden h-16">
          <div
            style={{ backgroundImage: `url(./img/new-img/VUyGCc.png)` }}
            className="max-w-4xl mx-auto h-full bg-no-repeat bg-center bg-contain flex justify-around gap-x-16 items-center"
          >
            <div className="flex gap-x-2">
              <div className="w-36 h-10 bg-[#edeef0] shadow-inner border-4 border-[#faf9f9] rounded flex justify-center items-center">
                <a
                  href="/"
                  className="cursor-pointer hover:text-light-blue rounded-md text-sm font-semibold text-black"
                >
                  Donation
                </a>
              </div>
              <div className="w-12 h-10 bg-[#edeef0] shadow-inner border-4 border-[#faf9f9] rounded flex justify-center items-center">
                <a
                  href="/"
                  className="cursor-pointer hover:text-light-blue px-3 py-2 rounded-md text-lg font-semibold text-black"
                >
                  &
                </a>
              </div>
              <div className="w-36 h-10 bg-[#edeef0] shadow-inner border-4 border-[#faf9f9] rounded flex justify-around items-center">
                <a
                  href="/"
                  className="cursor-pointer hover:text-light-blue rounded-md text-sm font-semibold text-black"
                >
                  Donation
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className="w-36 h-10 bg-[#edeef0] shadow-inner border-4 border-[#faf9f9] rounded flex justify-around items-center">
                <a
                  href="/"
                  className="cursor-pointer hover:text-light-blue px-3 py-2 rounded-md text-sm font-semibold text-black"
                >
                  Single
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="w-36 h-10 bg-[#edeef0] shadow-inner border-4 border-[#faf9f9] rounded flex justify-center items-center">
                <a
                  href="/"
                  className="cursor-pointer hover:text-light-blue px-3 py-2 rounded-md text-sm text-black font-bold"
                >
                  DONATE NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
}