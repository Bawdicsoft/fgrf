"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
const imageList = [
  "/AppealNew/waterWell/1.jpg",
  "/AppealNew/waterWell/2.png",
  "/AppealNew/waterWell/3.png",
  "/AppealNew/waterWell/4.png",
  "/AppealNew/waterWell/1.jpg",
  "/AppealNew/waterWell/2.png",
  "/AppealNew/waterWell/3.png",
  "/AppealNew/waterWell/4.png",
  "/AppealNew/waterWell/1.jpg",
  "/AppealNew/waterWell/2.png",
  "/AppealNew/waterWell/3.png",
  "/AppealNew/waterWell/4.png",
];

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SliderSectionOrphan() {
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
        modules={[Pagination, Navigation]}
        navigation={{
          prevEl: "#swiper-button-prev",
          nextEl: "#swiper-button-next",
        }}
        className=""
      >
        {imageList.map((img, index) => (
          <SwiperSlide key={index} className="">
            <Image
              src={img}
              alt="imagSLider"
              width={400}
              height={400}
              className="!relative"
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
