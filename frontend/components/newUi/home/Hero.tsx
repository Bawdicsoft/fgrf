"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useContentContext } from "../contextApi/contentContext";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Main Page" === title.content.sec
  );
  const mainSlider = foodBoxData[0]?.content?.mainSlider;
  const heroImage = mainSlider;
  const handleUpdate = (newIndex: any) => {
    if (newIndex < 0 || newIndex > 11) {
      newIndex = 0;
    } else if (newIndex >= heroImage.length) {
      newIndex = heroImage.length - 1;
    }
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleUpdate(currentIndex + 1);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex, heroImage]);

  return (
    <div className="md:h-[370px] lg:h-[500px] h-[170px] w-full max-w-screen-2xl mx-auto flex items-center text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <div className="overflow-hidden w-full h-full flex flex-col justify-center">
          <div
            className="transform duration-1000 whitespace-nowrap h-full"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
          >
            {heroImage?.map((data: any, index: any) => (
              <div
                className="inline-flex w-full relative items-center justify-center h-full bg-white"
                key={index}
              >
                <Image
                  className="w-full h-full md:object-fill object-fill"
                  src={data}
                  alt=""
                  width={1200}
                  height={1200}
                />
              </div>
            ))}
          </div>
          {/* <div className="bg-lime-800 absolute top-0 md:h-[500px] w-full opacity-40"></div> */}
        </div>
      </div>
      <div className="w-full h-20 absolute left-0 transform -translate-y-1/2 z-40">
        <div className="max-w-[1200px] mx-auto px-2 h-full flex justify-between items-end mt-6 lg:mt-0">
          <div
            className="md:w-12 md:h-12 w-6 h-6 cursor-pointer relative flex items-center justify-center"
            onClick={() => {
              handleUpdate(currentIndex - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="md:w-12 md:h-12 w-6 h-6 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <div className="bg-sky-800  shadow-inner md:w-16 md:h-16 w-12 h-12 z-[-1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-tr rounded-br xl:rounded"></div>
          </div>
          <div
            className="md:w-12 md:h-12 w-6 h-6 cursor-pointer relative flex items-center"
            onClick={() => {
              handleUpdate(currentIndex + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="md:w-12 md:h-12 w-6 h-6 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <div className="bg-sky-800   shadow-inner md:w-16 md:h-16 w-12 h-12 z-[-1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-tl rounded-bl xl:rounded"></div>
          </div>
        </div>
      </div>
      <div
        className="absolute animate-pulse opacity-30 md:block hidden maskanimation2 -bottom-[1%] right-0 w-full bg-no-repeat bg-center bg-cover z-[3] 2xl:h-[320px] xl:h-[260px] lg:h-[230px] h-[300px]"
        style={{ backgroundImage: `url(/img/mask1.svg)` }}
      ></div>
      {/* <div
        className="absolute  opacity-40 md:block hidden maskanimat1on -bottom-[1%] right-0 w-full bg-no-repeat bg-center bg-cover z-[3] 2xl:h-[320px] xl:h-[260px] lg:h-[230px] h-[300px]"
        style={{ backgroundImage: `url(/img/mask2.svg)` }}
      ></div> */}
      <div
        className="absolute animate-pulse opacity-5 md:block hidden -bottom-[1%] right-0 w-full bg-no-repeat bg-center bg-cover z-[3] 2xl:h-[320px] xl:h-[260px] lg:h-[230px] h-[300px]"
        style={{ backgroundImage: `url(/img/mask3.svg)` }}
      ></div>
    </div>
  );
};

export default Hero;
