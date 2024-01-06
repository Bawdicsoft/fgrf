'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
  Pagination,
  Navigation,
  Autoplay,
  Mousewheel,
  Keyboard,
} from 'swiper/modules';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

const OurDepartments = () => {
  const [showBlob, setShowBlob] = useState<boolean>(false);
  const [blobIndex, setBlobIndex] = useState<number>();
  const data = [
    {
      img: '/img/icons/earthquake1.png',
      blob: '/img/icon-blob.svg',
      title: 'Disaster Management and Food.',
      code: 'white',
    },
    {
      img: '/img/icons/self-development2.png',
      blob: '/img/icon-blob-yellow.svg',
      title: 'Education & Skills.',
      code: 'red',
    },
    {
      img: '/img/icons/protection3.png',
      blob: '/img/icon-blob-purple.svg',
      title: 'Health Care.',
      code: 'green',
    },
    {
      img: '/img/icons/cuve4.png',
      blob: '/img/icon-blob-orange.svg',
      title: 'Cure for differently abled children.',
      code: 'blue',
    },
    {
      img: '/img/icons/dev5.png',
      blob: '/img/icon-blob-blue.svg',
      title: 'Environment Department.',
      code: 'yellow',
    },
    {
      img: '/img/icons/water-tap6.png',
      blob: '/img/icon-blob.svg',
      title: 'Water project.',
      code: 'purple',
    },
  ];
  const handleBlob = (index: number) => {
    setBlobIndex(index);
    setShowBlob(true);
  };
  return (
    <div className="max-w-7xl mx-auto py-6">
      <div
        id="box3d"
        className="border-4 border-[#85d0d0] w-1/2 py-1 bg-[#6898b1] mx-auto rounded-full shadow-lg"
      >
        <h1 id="text3d">Our Department</h1>
      </div>
      {/* <h1 id="text3d">Our Department</h1> */}
      <div id="depart-box-shadow" className="mt-8 rounded-2xl">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1000}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          navigation={true}
          style={
            {
              '--swiper-navigation-color': '#fff',
              '--swiper-navigation-size': '25px',
            } as any
          }
        >
          <SwiperSlide>
            <div className="py-5 lg:px-10 bg-[#075985]">
              <div className="grid lg:grid-cols-6 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
                {data.map((data, index) => {
                  return (
                    <div
                      className="col-span-1 py-2 flex text-white flex-col gap-y-1 items-center justify-between cursor-pointer"
                      key={index}
                      onMouseOver={() => handleBlob(index)}
                      onMouseLeave={() => setShowBlob(false)}
                    >
                      <div className="md:h-14 h-8 relative">
                        <img
                          src={data.blob}
                          className={`absolute top-0 z-[-1] ${
                            blobIndex === index && showBlob
                              ? 'opacity-40 transition-all duration-500'
                              : 'opacity-0 transition-all duration-500'
                          }`}
                          alt=""
                        />
                        <img src={data.img} className="" alt="" />
                      </div>
                      <div>
                        <h4 className={`text-center text-sm  leading-none`}>
                          {data.title}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-5 lg:px-10 bg-[#075985]">
              <div className="grid lg:grid-cols-6 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
                {data.map((data, index) => (
                  <div
                    className="col-span-1 py-2 text-white flex flex-col gap-y-1 items-center justify-between cursor-pointer"
                    key={index}
                    onMouseOver={() => handleBlob(index)}
                    onMouseLeave={() => setShowBlob(false)}
                  >
                    <div className="md:h-14 h-8 relative">
                      <img
                        src={data.blob}
                        className={`absolute top-0 z-[-1] ${
                          blobIndex === index && showBlob
                            ? 'opacity-40 transition-all duration-500'
                            : 'opacity-0 transition-all duration-500'
                        }`}
                        alt=""
                      />
                      <img src={data.img} className="" alt="" />
                    </div>
                    <div>
                      <h4 className={`text-center text-sm  leading-none`}>
                        {data.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-5 lg:px-10 bg-[#075985]">
              <div className="grid lg:grid-cols-6 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
                {data.map((data, index) => (
                  <div
                    key={index}
                    className="col-span-1 py-2 text-white flex flex-col gap-y-1 items-center justify-between cursor-pointer"
                    onMouseOver={() => handleBlob(index)}
                    onMouseLeave={() => setShowBlob(false)}
                  >
                    <div className="md:h-14 h-8 relative">
                      <img
                        src={data.blob}
                        className={`absolute top-0 z-[-1] ${
                          blobIndex === index && showBlob
                            ? 'opacity-40 transition-all duration-500'
                            : 'opacity-0 transition-all duration-500'
                        }`}
                        alt=""
                      />
                      <img src={data.img} className="" alt="" />
                    </div>
                    <div>
                      <h4 className={`text-center text-sm  leading-none`}>
                        {data.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurDepartments;
