"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./DonationSlider.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { useContentContext } from "../../contextApi/contentContext";

export default function DonationSlider2() {
  const contentContext = useContentContext();
  const dataContent = contentContext.content;
  const foodBoxData = dataContent.filter(
    (title: any) => "Main Page" === title.content.sec
  );
  const winterSlider = foodBoxData[0]?.content?.winterSlider;
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const imgList = [
    // "/AppealNew/winter/1.png",
    "/AppealNew/winter/2.png",
    // "/AppealNew/winter/3.png",
    // "/AppealNew/winter/4.png",
    "/AppealNew/winter/5.png",
    "/AppealNew/winter/6.png",
    "/AppealNew/winter/7.png",
    "/AppealNew/winter/8.png",
    "/AppealNew/winter/9.png",
    "/AppealNew/winter/10.png",
    "/AppealNew/winter/11.png",
    "/AppealNew/winter/12.png",
    // "/AppealNew/winter/13.png",
  ];
  return (
    <div className="bg-[#1aabab] rounded-lg p-4">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 rounded-md"
      >
        {imgList.map((img: any, index: any) => (
          <SwiperSlide key={index}>
            <Image src={img} alt="Image" width={400} height={400} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onClick={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper rounded-md"
      >
        {imgList.map((img: any, index: any) => (
          <SwiperSlide key={index}>
            <Image src={img} alt="Image" width={400} height={400} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
