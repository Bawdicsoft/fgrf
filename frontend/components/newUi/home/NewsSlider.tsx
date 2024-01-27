import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./NewsSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
const videosList = [
  {
    video: "/Videonews/waterWellTanzanai.webm",
    img: "/Videonews/waterWell.png",
  },
  {
    video: "/Videonews/supportPlestine.webm",
    img: "/Videonews/SupportPalestinian.png",
  },
  { video: "/Videonews/projectSirya.webm", img: "/Videonews/projectSirya.png" },
  {
    video: "/Videonews/mobileHealthCare.webm",
    img: "/Videonews/thalassemia.png",
  },
  { video: "/Videonews/RHcenter.webm", img: "/Videonews/RH.png" },
  { video: "/Videonews/thalassemia.webm", img: "/Videonews/thalassemia.png" },
  { video: "/Videonews/rashenSirya.webm", img: "/Videonews/rationSirya.png" },
];
export default function NewsSlider() {
  const [image, setImage] = useState(false);
  const [video, setVideo] = useState(false);
  const [pause, setPause] = useState(false);
  const [imageIndex, setImageIndex] = useState<Number>();
  const [iconsIndex, seticonsIndex] = useState<Number>();
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
          <SwiperSlide
            key={index}
            className="relative"
            onClick={() => {
              setImageIndex(index);
              seticonsIndex(index);
              setVideo(!video);
              setImage(!image);
              setPause(!pause);
            }}
            onMouseLeave={() =>
              setTimeout(() => {
                setPause(!pause);
              }, 1000)
            }
            onMouseEnter={() => setPause(!pause)}
          >
            <div className="w-full lg:h-80">
              {imageIndex === index && video ? (
                <video className="h-full w-full object-cover" controls autoPlay>
                  <source src={videoItems.video} type="video/webm" />
                </video>
              ) : (
                <Image
                  src={videoItems.img}
                  alt={"thumNail"}
                  width={800}
                  height={800}
                  className="h-full w-full  object-cover"
                />
              )}
            </div>
            {iconsIndex === index && image ? (
              pause ? (
                <FaCirclePause className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-10 md:h-14 text-white" />
              ) : (
                ""
              )
            ) : (
              <FaRegCirclePlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 text-white" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
