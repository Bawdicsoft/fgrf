"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { PiArrowFatRightFill } from "react-icons/pi";
import "swiper/css";
import "swiper/css/pagination";

const imageList = [
  "/AppealNew/Zakat/zakat1.jpeg",
  "/AppealNew/Zakat/zakat2.jpeg",
  "/AppealNew/Zakat/zakat3.jpeg",
  "/AppealNew/Zakat/zakat4.jpeg",
  "/AppealNew/Zakat/zakat5.jpeg",
  "/AppealNew/Zakat/zakat6.jpeg",
];

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SliderSectionZakat() {
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
        // navigation={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
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
        {/* Add Navigation Buttons */}
        <div className="swiper-button-next">
          <PiArrowFatRightFill className="w-32 h-10 text-white" />
        </div>
        <div className="swiper-button-prev">
          <PiArrowFatRightFill className="w-32 h-10 text-white" />
        </div>
      </Swiper>
    </>
  );
}
