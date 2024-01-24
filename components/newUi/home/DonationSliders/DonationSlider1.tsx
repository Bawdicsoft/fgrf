import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./DonationSlider.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function DonationSlider1() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const imgList = [
    "/AppealNew/palestine/1.png",
    "/AppealNew/palestine/2.png",
    "/AppealNew/palestine/3.png",
    "/AppealNew/palestine/4.png",
    "/AppealNew/palestine/5.png",
    "/AppealNew/palestine/6.png",
    "/AppealNew/palestine/7.png",
    "/AppealNew/palestine/8.png",
    "/AppealNew/palestine/9.png",
    "/AppealNew/palestine/10.png",
    "/AppealNew/palestine/11.jpg",
    "/AppealNew/palestine/12.png",
    "/AppealNew/palestine/13.jpg",
    "/AppealNew/palestine/14.png",
    "/AppealNew/palestine/15.png",
    "/AppealNew/palestine/16.png",
    "/AppealNew/palestine/17.png",
    "/AppealNew/palestine/18.jpg",
    "/AppealNew/palestine/19.png",
    "/AppealNew/palestine/20.png",
    "/AppealNew/palestine/21.png",
    "/AppealNew/palestine/22.png",
    "/AppealNew/palestine/23.png",
    "/AppealNew/palestine/24.png",
    "/AppealNew/palestine/25.png",
    "/AppealNew/palestine/26.png",
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
        {imgList.map((img, index) => (
          <SwiperSlide key={index}>
            <Image src={img} alt="Image" width={400} height={400} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
