import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./DonationSlider.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function DonationSlider10() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const imgList = [
    "/AppealNew/iftar/iftar1.jpeg",
    "/AppealNew/iftar/iftar2.jpeg",
    "/AppealNew/iftar/iftar3.jpeg",
    "/AppealNew/iftar/iftar4.jpeg",
    "/AppealNew/iftar/iftar5.jpeg",
    // "/AppealNew/Zakat/zakat6.jpeg",
    // "/AppealNew/Zakat/7.jpg",
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
        {imgList.map((img, index) => (
          <SwiperSlide key={index} className="relative">
            <Image src={img} alt="Image" width={400} height={400} />
            <span className="absolute bg-gray-100 text-teal-500 font-semibold py-2  rounded-md  w-10/12 top-3/4">
              Iftar Box
            </span>
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
        {imgList.map((img, index) => (
          <SwiperSlide key={index}>
            <Image src={img} alt="Image" width={400} height={400} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
