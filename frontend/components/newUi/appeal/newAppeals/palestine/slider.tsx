"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { PiArrowFatRightFill } from "react-icons/pi";
import "swiper/css";
import "swiper/css/pagination";

const imageList = [
  "/AppealNew/palestine/1.png",
  "/AppealNew/palestine/4.png",
  "/AppealNew/palestine/5.png",
  "/AppealNew/palestine/6.png",
  "/AppealNew/palestine/7.png",
  "/AppealNew/palestine/2.png",
  "/AppealNew/palestine/3.png",
  "/AppealNew/palestine/12.png",
  "/AppealNew/palestine/8.png",
  "/AppealNew/palestine/16.png",
  "/AppealNew/palestine/17.png",
  "/AppealNew/palestine/9.png",
  "/AppealNew/palestine/19.png",
  "/AppealNew/palestine/23.png",
];

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SliderSectionPalestine() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // }}
        className=""
      >
        {imageList.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt="imagSLider"
              width={400}
              height={400}
              className=""
            />
          </SwiperSlide>
        ))}
        {/* {imageList1.map((img, index) => (
          <SwiperSlide>
            <Image
              src={img}
              alt="imagSLider"
              width={400}
              height={400}
              className="w-40"
            />
          </SwiperSlide>
        ))}
        {imageList2.map((img, index) => (
          <SwiperSlide>
            <Image
              src={img}
              alt="imagSLider"
              width={400}
              height={400}
              className="w-40"
            />
          </SwiperSlide>
        ))} */}
        {/* Add Navigation Buttons */}
        {/* <div className="swiper-button-next">
          <PiArrowFatRightFill className="w-32 h-10 text-white" />
        </div>
        <div className="swiper-button-prev">
          <PiArrowFatRightFill className="w-32 h-10 text-white" />
        </div> */}
      </Swiper>
    </>
  );
}
