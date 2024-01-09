import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
          <SwiperSlide key={index}>
            {/* <iframe className="w-full h-full aspect-video " src={videoItems.video}></iframe> */}
            <video className="h-full w-full" controls>
              <source src={videoItems.video} type="video/mp4" />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
