'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useState } from 'react';
import Link from 'next/link';
import ImageModal from '@/components/modal/ImageModal';
import DonationSlider from '@/components/home/donationSlider';

const Appeals = () => {
  const data = [
    {
      img: '/img/index1.jpeg',
    },
    {
      img: '/img/index2.jpg',
    },
    {
      img: '/img/index3.jpeg',
    },
    {
      img: '/img/index4.jpeg',
    },
    {
      img: '/img/index5.jpg',
    },
  ];
  const [open, setOpen] = useState(false);
  const [certicateImage, setCertificateImage] = useState('');

  const handleOpenAndCerticate = (imagePath: string) => {
    setCertificateImage(imagePath);
    setOpen(true);
  };
  return (
    <section className="max-w-7xl mx-auto py-6">
      <div className="flex flex-col items-center max-w-[1200px] mx-auto px-3">
        <div
          id="box3d"
          className="border-4 border-[#85d0d0] w-1/2 py-1 bg-[#6898b1] mx-auto rounded-full shadow-lg"
        >
          <h2 id="text3d">Appeals</h2>
        </div>
      </div>
      <div className="w-2/3 mx-auto py-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {[1, 2, 3, 4, 5, 6].map((data, index) => {
          return (
            <div key={index} className="col-span-1 text-center">
              <DonationSlider />
              <button className="rounded-md bg-sky-900 px-4 py-0 mt-3">
                <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                  Donate Now
                </span>
              </button>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-0 right-0 z-[-1]">
        <img src="./img/new-img/map.png" className="w-full h-full" alt="" />
      </div>
      <ImageModal open={open} setOpen={setOpen} imagePath={certicateImage} />
    </section>
  );
};

export default Appeals;
