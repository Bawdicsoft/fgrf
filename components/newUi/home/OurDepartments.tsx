"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Pagination,
  Navigation,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const OurDepartments = () => {
  const [showBlob, setShowBlob] = useState<boolean>(false);
  const [blobIndex, setBlobIndex] = useState<number>();
  const data = [
    {
      img: "/finalIconAssets/OurdepatmentSlider/fireHome.png",
      blob: "/img/icon-blob.svg",
      title: "Disaster Management",
      code: "white",
    },
    {
      img: "/finalIconAssets/OurdepatmentSlider/health.png",
      blob: "/img/icon-blob-yellow.svg",
      title: "Health Care",
      code: "red",
    },
    {
      img: "/finalIconAssets/OurdepatmentSlider/water.png",
      blob: "/img/icon-blob-purple.svg",
      title: "Water Project",
      code: "green",
    },
    {
      img: "/finalIconAssets/OurdepatmentSlider/home.png",
      blob: "/img/icon-blob-orange.svg",
      title: "Environment Department",
      code: "blue",
    },
    {
      img: "/finalIconAssets/OurdepatmentSlider/education.png",
      blob: "/img/icon-blob-blue.svg",
      title: "Education & Skills",
      code: "yellow",
    },
    {
      img: "/finalIconAssets/OurdepatmentSlider/homeHand.png",
      blob: "/img/icon-blob.svg",
      title: "Orphan",
      code: "purple",
    },
    {
      img: "/finalIconAssets/OurdepatmentSlider/masjid.png",
      blob: "/img/icon-blob.svg",
      title: "Masjid",
      code: "purple",
    },
  ];
  const handleBlob = (index: number) => {
    setBlobIndex(index);
    setShowBlob(true);
  };
  return (
    <div className="max-w-7xl mx-auto py-6">
      <div id="" className="text-center">
        <div id="">
          {" "}
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-400">
            Our
          </span>
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white pl-2">
            Department
          </span>
        </div>
      </div>
      {/* <h1 id="text3d">Our Department</h1> */}
      <div
        id="depart-box-shadow"
        className="mt-8 rounded-2xl max-w-6xl mx-5 xl:mx-auto py-2"
      >
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1000}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Navigation]}
          className=""
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-navigation-size": "25px",
            } as any
          }
        >
          <SwiperSlide className="!bg-[#075985]">
            <div className="pb-2 lg:px-10 bg-[#075985]">
              <div className="grid lg:grid-cols-7 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
                {data.map((data, index) => {
                  return (
                    <div
                      className="col-span-1 flex text-gray-300 flex-col gap-y-1 items-center justify-between cursor-pointer"
                      key={index}
                      onMouseOver={() => handleBlob(index)}
                      onMouseLeave={() => setShowBlob(false)}
                    >
                      <div className="h-16 md:h-24 relative">
                        <img
                          src={data.blob}
                          className={`absolute top-0 z-[-1] ${
                            blobIndex === index && showBlob
                              ? "opacity-40 transition-all duration-500"
                              : "opacity-0 transition-all duration-500"
                          }`}
                          alt=""
                        />
                        <img src={data.img} className="h-full w-full" alt="" />
                      </div>
                      <div>
                        <h4 className={`text-center text-[12px]  leading-none`}>
                          {data.title}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!bg-[#075985]">
            <div className="pb-2 lg:px-10 bg-[#075985]">
              <div className="grid lg:grid-cols-7 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
                {data.map((data, index) => {
                  return (
                    <div
                      className="col-span-1 flex text-gray-300 flex-col gap-y-1 items-center justify-between cursor-pointer"
                      key={index}
                      onMouseOver={() => handleBlob(index)}
                      onMouseLeave={() => setShowBlob(false)}
                    >
                      <div className="h-16 md:h-24  relative">
                        <img
                          src={data.blob}
                          className={`absolute top-0 z-[-1] ${
                            blobIndex === index && showBlob
                              ? "opacity-40 transition-all duration-500"
                              : "opacity-0 transition-all duration-500"
                          }`}
                          alt=""
                        />
                        <img src={data.img} className="h-full w-full" alt="" />
                      </div>
                      <div>
                        <h4
                          className={`text-center text-[12px]   leading-none`}
                        >
                          {data.title}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!bg-[#075985]">
            <div className="pb-2 lg:px-10 bg-[#075985]">
              <div className="grid lg:grid-cols-7 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
                {data.map((data, index) => {
                  return (
                    <div
                      className="col-span-1 flex text-gray-300 flex-col gap-y-1 items-center justify-between cursor-pointer"
                      key={index}
                      onMouseOver={() => handleBlob(index)}
                      onMouseLeave={() => setShowBlob(false)}
                    >
                      <div className="h-16 md:h-24  relative">
                        <img
                          src={data.blob}
                          className={`absolute top-0 z-[-1] ${
                            blobIndex === index && showBlob
                              ? "opacity-40 transition-all duration-500"
                              : "opacity-0 transition-all duration-500"
                          }`}
                          alt=""
                        />
                        <img src={data.img} className="h-full w-full" alt="" />
                      </div>
                      <div>
                        <h4
                          className={`text-center text-[12px]   leading-none`}
                        >
                          {data.title}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="swiper-button-next-custom">
          <img
            src="/finalIconAssets/Assest/fivepage/arrow1.png"
            alt="Next"
            style={{ height: "100px", width: "50px" }}
          />
        </div>

        <div className="swiper-button-prev-custom">
          <img
            src="/finalIconAssets/Assest/fivepage/arrow1.png"
            alt="Previous"
            style={{ height: "100px", width: "50px" }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default OurDepartments;
{
  /* <SwiperSlide>
  <div className="py-2 lg:px-10 bg-[#075985]">
    <div className="grid lg:grid-cols-7 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
      {data.map((data, index) => (
        <div
          className="col-span-1 py-2 text-white flex flex-col gap-y-1 items-center justify-between cursor-pointer"
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
            <h4 className={`text-center text-sm  leading-none`}>
              {data.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="py-2 lg:px-10 bg-[#075985]">
    <div className="grid lg:grid-cols-7 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
      {data.map((data, index) => (
        <div
          key={index}
          className="col-span-1 py-2 text-white flex flex-col gap-y-1 items-center justify-between cursor-pointer"
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
            <h4 className={`text-center text-sm  leading-none`}>
              {data.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  </div>
</SwiperSlide> */
}
