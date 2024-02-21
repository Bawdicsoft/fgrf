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
  "/ourDepartment/disaster/pakistanFlood/1.jpg",
  "/ourDepartment/disaster/pakistanFlood/2.jpg",
  "/ourDepartment/disaster/pakistanFlood/3.jpg",
  "/ourDepartment/disaster/pakistanFlood/4.jpg",
  "/ourDepartment/disaster/pakistanFlood/5.jpg",
  "/ourDepartment/disaster/pakistanFlood/6.jpg",
  "/ourDepartment/disaster/pakistanFlood/7.jpg",
  "/ourDepartment/disaster/pakistanFlood/8.jpg",
  "/ourDepartment/disaster/pakistanFlood/9.jpg",
  "/ourDepartment/disaster/pakistanFlood/10.jpg",
  "/ourDepartment/disaster/pakistanFlood/11.jpg",
  "/ourDepartment/disaster/pakistanFlood/12.jpg",
  "/ourDepartment/disaster/pakistanFlood/13.jpg",
  "/ourDepartment/disaster/pakistanFlood/14.jpg",
  "/ourDepartment/disaster/pakistanFlood/15.jpg",
  "/ourDepartment/disaster/pakistanFlood/16.jpg",
  "/ourDepartment/disaster/pakistanFlood/17.jpg",
  "/ourDepartment/disaster/pakistanFlood/18.jpg",
  "/ourDepartment/disaster/pakistanFlood/19.jpg",
  "/ourDepartment/disaster/pakistanFlood/20.jpg",
  "/ourDepartment/disaster/pakistanFlood/21.jpg",
  "/ourDepartment/disaster/pakistanFlood/22.jpg",
  "/ourDepartment/disaster/pakistanFlood/23.jpg",
  "/ourDepartment/disaster/pakistanFlood/24.jpg",
  "/ourDepartment/disaster/pakistanFlood/25.jpg",
  "/ourDepartment/disaster/pakistanFlood/26.jpg",
  "/ourDepartment/disaster/pakistanFlood/27.jpg",
  "/ourDepartment/disaster/pakistanFlood/28.jpg",
];

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SliderSectionPakistanFlood() {
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
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
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
