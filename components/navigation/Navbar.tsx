"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";

export default function Navbar() {
  // const [colorChange, setColorChange] = useState(false);
  const [open, setOpen] = useState(false);
  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 150) {
  //     setColorChange(true);
  //   } else {
  //     setColorChange(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", changeNavbarColor);
  //   return () => {
  //     window.removeEventListener("scroll", changeNavbarColor);
  //   };
  // }, []);
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
      <div
        className="py-3 w-full px-3 lg:px-10 bg-no-repeat bg-cover bg-center shadow-[0_5px_#c0c7c5]"
        style={{ backgroundImage: `url(./img/new-img/Button-06.png)` }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="relative flex items-center justify-between h-10 w-full">
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start h-full">
              <div className="flex-shrink-0 flex items-center p-1 rounded-lg">
                <Link href="/">
                  <img
                    className="w-20 lg:block md:block cursor-pointer"
                    src="/img/fgrf.png"
                    alt="tokenLauncher"
                  />
                </Link>
              </div>
              <div className="hidden h-full absolute inset-y-0 right-0 lg:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="h-full">
                  <div
                    className={`flex items-center font-raleway-font text-black h-full gap-x-2`}
                  >
                    {navItem.map((data, index) => (
                      <div
                        className="w-36 rounded-full h-10 bg-no-repeat bg-center bg-cover flex justify-center items-center"
                        style={{
                          backgroundImage: `url(./img/new-img/Button-04.png)`,
                        }}
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
            <div
              className="w-36 font-bold h-10 bg-center bg-cover bg-no-repeat hidden text-black rounded-full lg:flex lg:justify-center lg:gap-2 lg:items-center"
              style={{
                backgroundImage: `url(./img/new-img/Button-04.png)`,
              }}
            >
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
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
}
