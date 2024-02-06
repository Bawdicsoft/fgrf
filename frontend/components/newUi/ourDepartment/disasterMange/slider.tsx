"use client";

const disastersList = [
  {
    link: "covid-19",
    img: "/GalleryNew1/11.jpg",
    title: "COVID - 19",
    desc: "FGRF stood out with its unwavering commitment to support those in need",
  },
  {
    link: "pakistan-flood",
    img: "/GalleryNew1/6.jpg",
    title: "Pakistan flood ",
    desc: "FGRF's Swift Response to Pakistan Floods: From Rescue to Rebuilding",
  },
  {
    link: "turkey-syria-earthquake",
    img: "/GalleryNew1/turkey.jpg",
    title: "Turkey & Syria earthquake ",
    desc: " FGRF swiftly mobilized to provide aid and support to those affected",
  },
  {
    link: "morocco-earthquake",
    img: "/GalleryNew1/morco1.jpg",
    title: "Morocco earthquake ",
    desc: "Supporting Morocco: FGRF's Relief Efforts in Response to the Earthquake",
  },
  {
    link: "palestine-brothers-sisters",
    img: "/AppealNew/palestine/18.jpg",
    title: "Palestinian brother & sisters ",
    desc: "FGRF's Swift Response in Palestine During Times of Crisis",
  },
];
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export default function SliderSectionDisaster() {
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
            slidesPerView: 2,
            spaceBetween: 10,
          },
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
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        className=""
      >
        {disastersList.map((data, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <Link
              href={`/our-department/disaster-${data.link}`}
              className="relative hover:opacity-100 bg-sky-800 w-96 h-40 lg:h-56 xl:h-60 transition duration-300 opacity-60 !object-fill object-center"
            >
              <Image
                src={data.img}
                alt={`Slider Image ${index}`}
                width={400}
                height={400}
                className="h-full w-full"
              />
              <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                {data.title}
              </span>
            </Link>
          </SwiperSlide>
        ))}
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 z-50 flex justify-between w-full px-3 md:px-5">
          <div className="swiper-button-prev bg-white relative overflow-hidden rounded-full">
            <BsArrowLeftCircleFill
              className="text-teal-400 w-6 h-6 md:w-10 md:h-10 font-extrabold"
              style={{ fontWeight: "bold" }}
            />
          </div>
          <div className="swiper-button-next bg-white relative overflow-hidden rounded-full">
            <BsArrowRightCircleFill className="text-teal-400  w-6 h-6 md:w-10 md:h-10  font-extrabold" />
          </div>
        </div>
      </Swiper>
    </>
  );
}
