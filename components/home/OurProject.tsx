"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const OurProject = () => {
  const data = [
    {
      svg: "./img/new-img/polygonChange.png",
    },
    {
      svg: "./img/new-img/polygonChange.png",
    },
    {
      svg: "./img/new-img/polygonChange.png",
    },
    {
      svg: "./img/new-img/polygonChange.png",
    },
    {
      svg: "./img/new-img/polygonChange.png",
    },
    {
      svg: "./img/new-img/polygonChange.png",
    },
    {
      svg: "./img/new-img/polygonChange.png",
    },
  ];
  return (
    <div
      className="max-w-[1200px] mx-auto px-3 sm:py-16 py-10 flex flex-col"
      id="modalEnd"
    >
      <div className="mb-6 w-60 mx-auto rounded-full border-4 border-[#faf8f8] shadow-xl bg-[#efeff1] py-1">
        <h2 className="sm:text-3xl text-3xl font-semibold text-center">
          Our Projects
        </h2>
      </div>
      <div className="max-w-3xl h-96">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          speed={1000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mx-auto h-full"
        >
          {data.map((data, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-center bg-cover bg-no-repeat h-full mx-auto relative flex flex-col justify-center px-8 md:w-full max-w-xs"
                style={{ backgroundImage: `url(${data.svg})` }}
              >
                <h2 className="text-[#efeff1] font-bold text-4xl uppercase absolute top-24 left-0">
                  Palestine <span className="text-cyan-600">Emergency</span>
                </h2>
                <div className="mt-[7rem]">
                  <h5 className="text-2xl font-bold">Palestine Emergency</h5>
                  <p className="text-lg pb-1 font-semibold px-10">
                    Donate us to help our palestinian brother.
                  </p>
                  <div className="border-b-4 border-cyan-600 w-[40%] mx-auto mt-1 rounded-full"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurProject;