"use client";
import { useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroImage = [
    "./img/pic 01a.png",
    "./img/last3.jpeg",
    "./img/last2.jpeg",
    "./img/last1.jpeg",
  ];

  const handleUpdate = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= heroImage.length) {
      newIndex = heroImage.length - 1;
    }
    setCurrentIndex(newIndex);
  };
  return (
    <div className="md:h-[500px] h-[400px] w-full flex items-center text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <div className="overflow-hidden w-full h-full flex flex-col justify-center">
          <div
            className="transform duration-1000 whitespace-nowrap h-full"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
          >
            {heroImage.map((data, index) => (
              <>
                <div
                  className="inline-flex w-full items-center justify-center h-full bg-white"
                  key={index}
                >
                  <img className="w-full h-full" src={data} alt="" />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-20 absolute left-0 transform -translate-y-1/2 z-40">
        <div className="max-w-[1200px] mx-auto px-2 h-full flex justify-between">
          <div
            className="md:w-12 md:h-12 w-10 h-10 cursor-pointer relative"
            onClick={() => {
              handleUpdate(currentIndex - 1);
            }}
          >
            <img
              src="./img/new-img/slides_01.png"
              className="w-full h-full"
              alt=""
            />
            <div className="bg-[#42a5a9] md:w-16 md:h-16 w-12 h-12 z-[-1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 rounded"></div>
          </div>
          <div
            className="md:w-12 md:h-12 w-10 h-10 cursor-pointer relative"
            onClick={() => {
              handleUpdate(currentIndex + 1);
            }}
          >
            <img
              src="./img/new-img/slides_02.png"
              className="w-full h-full"
              alt=""
            />
            <div className="bg-[#42a5a9] md:w-16 md:h-16 w-12 h-12 z-[-1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 rounded"></div>
          </div>
        </div>
      </div>
      <div className="w-full lg:block hidden h-16 absolute top-0 left-0 z-20">
        <div
          style={{ backgroundImage: `url(./img/new-img/VUyGCc.png)` }}
          className="max-w-4xl mx-auto h-full bg-no-repeat bg-center bg-contain flex justify-center gap-x-16 items-center"
        >
          <div
            style={{
              backgroundImage: `url(./img/new-img/header14.png)`,
            }}
            className="w-36 h-10 bg-center bg-no-repeat bg-cover rounded-full flex justify-center items-center"
          >
            <a
              href="/"
              className="cursor-pointer hover:text-light-blue rounded-md text-sm font-semibold text-black"
            >
              Donation
            </a>
          </div>
          <div
            style={{
              backgroundImage: `url(./img/new-img/header14.png)`,
            }}
            className="w-40 h-12 rounded-full bg-center bg-cover bg-no-repeat flex justify-center items-center"
          >
            <a
              href="/"
              className="cursor-pointer hover:text-light-blue px-3 py-2 rounded-md text-sm font-semibold text-black"
            >
              Donation
            </a>
          </div>
          <div
            style={{
              backgroundImage: `url(./img/new-img/header14.png)`,
            }}
            className="w-40 h-12 bg-center bg-no-repeat bg-cover rounded-full flex justify-center items-center"
          >
            <a
              href="/"
              className="cursor-pointer hover:text-light-blue rounded-md text-sm font-semibold text-black"
            >
              Donation
            </a>
          </div>
          <div
            style={{
              backgroundImage: `url(./img/new-img/header14.png)`,
            }}
            className="w-40 h-12 rounded-full bg-center bg-cover bg-no-repeat flex justify-center items-center"
          >
            <a
              href="/"
              className="cursor-pointer hover:text-light-blue px-3 py-2 rounded-md text-sm font-semibold text-black"
            >
              Donation
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute md:block hidden maskanimation2 -bottom-[7%] right-0 w-full bg-no-repeat bg-center bg-cover z-[3] 2xl:h-[320px] xl:h-[260px] lg:h-[230px] h-[300px]"
        style={{ backgroundImage: `url(/img/mask1.svg)` }}
      ></div>
      <div
        className="absolute md:block hidden maskanimation -bottom-[7%] right-0 w-full bg-no-repeat bg-center bg-cover z-[3] 2xl:h-[320px] xl:h-[260px] lg:h-[230px] h-[300px]"
        style={{ backgroundImage: `url(/img/mask2.svg)` }}
      ></div>
      <div
        className="absolute md:block hidden -bottom-[7%] right-0 w-full bg-no-repeat bg-center bg-cover z-[3] 2xl:h-[320px] xl:h-[260px] lg:h-[230px] h-[300px]"
        style={{ backgroundImage: `url(/img/mask3.svg)` }}
      ></div>
    </div>
  );
};

export default Hero;
