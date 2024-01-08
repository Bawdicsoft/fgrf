'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useState } from 'react';
import Link from 'next/link';
import ImageModal from '@/components/modal/ImageModal';

const Achievement = () => {
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
    // {
    //   img: '/img/index4.jpeg',
    // },
    // {
    //   img: '/img/index5.jpg',
    // },
  ];
  const [open, setOpen] = useState(false);
  const [certicateImage, setCertificateImage] = useState('');

  const handleOpenAndCerticate = (imagePath: string) => {
    setCertificateImage(imagePath);
    setOpen(true);
  };
  return (
    <section className="py-6">
      <div className="relative bg-center bg-no-repeat bg-cover -z-30">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div
            id="box3d"
            className="border-4 border-[#85d0d0] w-1/2 py-1 bg-[#6898b1] mx-auto rounded-full shadow-lg"
          >
            <h2 id="text3d">ACHIEVEMENTS</h2>
          </div>
          <div
            style={{ backgroundImage: `url(./img/new-img/Button-04.png)` }}
            className="bg-center bg-no-repeat bg-cover rounded-full mx-auto flex justify-center items-center py-2"
          />
        </div>
        <div className="w-2/3 mx-auto py-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {data.map((data: any, index: any) => {
            return (
              <div key={index} className="bg-[#012565] rounded-lg p-3">
                <h2 className="uppercase text-[#71b1fe] text-2xl text-center py-2">
                  Letter of Appreciation
                </h2>
                <div className="">
                  {/* <img src={data.img} className="w-full h-full" alt="" /> */}
                  <div
                    className="w-full rounded-md h-80 bg-[#bebebc] cursor-pointer bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${data.img})` }}
                    onClick={() => handleOpenAndCerticate(data.img)}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        <Link href={'/achievements'}>
          <div className="w-40 mx-auto rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
            <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
              Show more
            </span>
          </div>
        </Link>
        <div className="w-full absolute top-0 right-0 z-[-1]">
          <img src="./img/new-img/map.png" className="w-full h-full" alt="" />
        </div>
      </div>
      <ImageModal open={open} setOpen={setOpen} imagePath={certicateImage} />
    </section>
  );
};

export default Achievement;
