import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./NewsSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
const videosList = [
  { video: "/video/v2.mp4" },
  { video: "/video/v2.mp4" },
  { video: "/video/v2.mp4" },
  { video: "/video/v2.mp4" },
  { video: "/video/v2.mp4" },
  { video: "/video/v2.mp4" },
  { video: "/video/v2.mp4" },
];
export default function NewsSlider() {
  return (
    <>
      <Swiper
        //  onSwiper={setSwiperRef}
        slidesPerView={3}
        // centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className=""
      >
        {videosList.map((videoItems, index) => (
          <SwiperSlide key={index} className="relative">
            {/* <iframe className="w-full h-full aspect-video " src={videoItems.video}></iframe> */}
            {/* <video className="h-full w-full" controls>
              <source src={videoItems.video} type="video/mp4" />
            </video> */}
              <Image
                src="/video/thumnail.JPG"
                alt={"thumNail"}
                width={800}
                height={800}
                className="h-full w-full  object-cover"
              />
              <FaRegCirclePlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 text-white" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
