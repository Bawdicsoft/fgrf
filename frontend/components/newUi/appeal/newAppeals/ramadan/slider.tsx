"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";

const imageList = [
  "/AppealNew/ramadan/ramadan (1).jpg",
  "/AppealNew/ramadan/ramadan (2).jpg",
  "/AppealNew/ramadan/ramadan (3).jpg",
  "/AppealNew/ramadan/ramadan (4).jpg",
  "/AppealNew/ramadan/ramadan (5).jpg",
  "/AppealNew/ramadan/ramadan (6).jpg",
  "/AppealNew/ramadan/ramadan (7).jpg",
  "/AppealNew/ramadan/ramadan (8).jpg",
  "/AppealNew/ramadan/ramadan (9).jpg",
  "/AppealNew/ramadan/ramadan (10).jpg",
  "/AppealNew/ramadan/ramadan (11).jpg",
  "/AppealNew/ramadan/ramadan (12).jpg",
  "/AppealNew/ramadan/ramadan (13).jpg",
  "/AppealNew/ramadan/ramadan (14).jpg",
  "/AppealNew/ramadan/ramadan (15).jpg",
  "/AppealNew/ramadan/ramadan (16).jpg",
  "/AppealNew/ramadan/ramadan (17).jpg",
  "/AppealNew/ramadan/ramadan (18).jpg",
  "/AppealNew/ramadan/ramadan (19).jpg",
  "/AppealNew/ramadan/ramadan (20).jpg",
  "/AppealNew/ramadan/ramadan (21).jpg",
  "/AppealNew/ramadan/ramadan (22).jpg",
  "/AppealNew/ramadan/ramadan (23).jpg",
  "/AppealNew/ramadan/ramadan (24).jpg",
  "/AppealNew/ramadan/ramadan (25).jpg",
  "/AppealNew/ramadan/ramadan (26).jpg",
  "/AppealNew/ramadan/ramadan (27).jpg",
  "/AppealNew/ramadan/ramadan (28).jpg",
  "/AppealNew/ramadan/ramadan (29).jpg",
  "/AppealNew/ramadan/ramadan (30).jpg",
];

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SliderSectionRamadan() {
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        navigation={{
          prevEl: "#swiper-button-prev",
          nextEl: "#swiper-button-next",
        }}
        className="!relative"
      >
        {imageList.map((img, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className=" h-40 lg:h-56 ">
              <Image
                src={img}
                alt="imagSLider"
                width={400}
                height={400}
                className="h-full w-full "
              />
            </div>
          </SwiperSlide>
        ))}
        {/* Navigation Arrows */}
        <div
          id="swiper-button-prev"
          className=" bg-white !absolute left-2 top-1/2 z-10  rounded-full group hover:bg-teal-500 transition duration-500"
        >
          <BsArrowLeftCircleFill
            className="text-teal-500  w-8 h-8 md:w-10 md:h-10 font-extrabold cursor-pointer group-hover:text-white transition duration-500"
            style={{ fontWeight: "bold" }}
          />
        </div>
        <div
          id="swiper-button-next"
          className=" bg-white !absolute top-1/2 z-10 right-2 rounded-full group hover:bg-teal-500 transition duration-500"
        >
          <BsArrowRightCircleFill className="text-teal-500  w-8 h-8 md:w-10 md:h-10 font-extrabold cursor-pointer group-hover:text-white transition duration-500" />
        </div>
      </Swiper>
    </>
  );
}