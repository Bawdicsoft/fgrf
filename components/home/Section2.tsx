"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Section2 = () => {
  const [showBlob, setShowBlob] = useState<boolean>(false);
  const [blobIndex, setBlobIndex] = useState<number>();
  const data = [
    {
      img: "https://www.qgiv.com/_resources/images/icon-donation-form.svg",
      blob: "/img/icon-blob.svg",
      title: "Disaster Management and Food.",
      code: "white",
    },
    {
      img: "https://www.qgiv.com/_resources/images/icon-text-fundraising.svg",
      blob: "/img/icon-blob-yellow.svg",
      title: "Education & Skills.",
      code: "red",
    },
    {
      img: "https://www.qgiv.com/_resources/images/icon-auctions.svg",
      blob: "/img/icon-blob-purple.svg",
      title: "Health Care.",
      code: "green",
    },
    {
      img: "https://www.qgiv.com/_resources/images/icon-p2p.svg",
      blob: "/img/icon-blob-orange.svg",
      title: "Cure for differently abled children.",
      code: "blue",
    },
    {
      img: "https://www.qgiv.com/_resources/images/icon-integrations.svg",
      blob: "/img/icon-blob-blue.svg",
      title: "Environment Department.",
      code: "yellow",
    },
    {
      img: "https://www.qgiv.com/_resources/images/icon-events.svg",
      blob: "/img/icon-blob.svg",
      title: "Water project.",
      code: "purple",
    },
  ];
  const handleBlob = (index: number) => {
    setBlobIndex(index);
    setShowBlob(true);
  };
  return (
    <div className="max-w-6xl mx-auto py-8 px-2">
      <div className="border-4 border-[#faf8f8] py-1 bg-[#efeff1] max-w-xs mx-auto rounded-full shadow-lg">
        <h1 className="text-center text-4xl">Our Department</h1>
      </div>
      <div className="mt-8">
        <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination , Navigation, Autoplay]}
          className="rounded-2xl bg-[#efeff1] mySwiper"
          navigation={true} 
        >
          <SwiperSlide>
            <div className=" py-5 lg:px-10">
              <div className="grid lg:grid-cols-6 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
                {data.map((data, index) => (
                  <div
                    className="col-span-1 py-2 flex flex-col gap-y-1 items-center justify-between cursor-pointer"
                    key={index}
                    onMouseOver={() => handleBlob(index)}
                    onMouseLeave={() => setShowBlob(false)}
                  >
                    <div className="md:h-14 h-8 relative">
                      <img
                        src={data.blob}
                        className={`absolute top-0 z-[-1] ${
                          blobIndex === index && showBlob
                            ? "opacity-40 transition-all duration-500"
                            : "opacity-0 transition-all duration-500"
                        }`}
                        alt=""
                      />
                      <img src={data.img} className="" alt="" />
                    </div>
                    <div>
                      <h4
                        className={`text-center text-sm text-[#394146] leading-none`}
                      >
                        {data.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" py-5 lg:px-10">
              <div className="grid lg:grid-cols-6 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
                {data.map((data, index) => (
                  <div
                    className="col-span-1 py-2 flex flex-col gap-y-1 items-center justify-between cursor-pointer"
                    key={index}
                    onMouseOver={() => handleBlob(index)}
                    onMouseLeave={() => setShowBlob(false)}
                  >
                    <div className="md:h-14 h-8 relative">
                      <img
                        src={data.blob}
                        className={`absolute top-0 z-[-1] ${
                          blobIndex === index && showBlob
                            ? "opacity-40 transition-all duration-500"
                            : "opacity-0 transition-all duration-500"
                        }`}
                        alt=""
                      />
                      <img src={data.img} className="" alt="" />
                    </div>
                    <div>
                      <h4
                        className={`text-center text-sm text-[#394146] leading-none`}
                      >
                        {data.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" py-5 lg:px-10">
              <div className="grid lg:grid-cols-6 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
                {data.map((data, index) => (
                  <div
                    className="col-span-1 py-2 flex flex-col gap-y-1 items-center justify-between cursor-pointer"
                    key={index}
                    onMouseOver={() => handleBlob(index)}
                    onMouseLeave={() => setShowBlob(false)}
                  >
                    <div className="md:h-14 h-8 relative">
                      <img
                        src={data.blob}
                        className={`absolute top-0 z-[-1] ${
                          blobIndex === index && showBlob
                            ? "opacity-40 transition-all duration-500"
                            : "opacity-0 transition-all duration-500"
                        }`}
                        alt=""
                      />
                      <img src={data.img} className="" alt="" />
                    </div>
                    <div>
                      <h4
                        className={`text-center text-sm text-[#394146] leading-none`}
                      >
                        {data.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Section2;