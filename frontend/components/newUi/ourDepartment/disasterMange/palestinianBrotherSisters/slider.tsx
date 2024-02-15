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
  "/ourDepartment/disaster/palestine/palestine (1).png",
  "/ourDepartment/disaster/palestine/palestine (2).png",
  "/ourDepartment/disaster/palestine/palestine (3).png",
  "/ourDepartment/disaster/palestine/palestine (4).png",
  "/ourDepartment/disaster/palestine/palestine (5).png",
  "/ourDepartment/disaster/palestine/palestine (6).png",
  "/ourDepartment/disaster/palestine/palestine (7).png",
  "/ourDepartment/disaster/palestine/palestine (8).png",
  "/ourDepartment/disaster/palestine/palestine (9).png",
  "/ourDepartment/disaster/palestine/palestine (10).png",
  "/ourDepartment/disaster/palestine/palestine (11).png",
  "/ourDepartment/disaster/palestine/palestine (12).png",
  "/ourDepartment/disaster/palestine/palestine (14).png",
  "/ourDepartment/disaster/palestine/palestine (15).png",
  "/ourDepartment/disaster/palestine/palestine (16).png",
  "/ourDepartment/disaster/palestine/palestine (17).png",
  "/ourDepartment/disaster/palestine/palestine (18).png",
  "/ourDepartment/disaster/palestine/palestine (19).png",
  "/ourDepartment/disaster/palestine/palestine (13).png",
];

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SliderSectionpalestinianBrotherSister() {
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
