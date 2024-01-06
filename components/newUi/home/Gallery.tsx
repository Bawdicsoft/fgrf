import Link from 'next/link';
import React from 'react';

const gallery = [
  './img/galleryImg1.png',
  './img/galleryImg2.png',
  './img/galleryImg3.png',
  './img/galleryImg4.png',
  './img/galleryImg5.png',
  './img/galleryImg6.png',
];
const Gallery: React.FC = () => {
  return (
    <section className="border border-black">
      <div className="relative">
        {/* <div className="mb-6 w-60 mx-auto rounded-full border-4 border-[#faf8f8] shadow-xl bg-[#efeff1] py-1">
          <h2 className="text-xl md:text-2xl font-semibold text-center">
            Gallery
          </h2>
        </div> */}
        <div
          id="box3d"
          className="border-4 border-[#85d0d0] w-1/2 py-1 bg-[#6898b1] mx-auto rounded-full shadow-lg"
        >
          <h1 id="text3d">Gallery</h1>
        </div>
        <div className="md:w-[65%] w-full mx-auto relative z-[2]">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-2 mt-5">
            {gallery.map((data, index) => (
              <div
                key={index}
                className="col-span-1 h-72 bg-[#f1fcd1] relative rounded-lg border-[6px] border-[#7caec1] shadow-2xl flex flex-col justify-center items-center gap-y-3"
              >
                <img src={data} className="w-full h-full" alt="" />
                <div className="bg-[#42a5a9] opacity-50 w-full h-full absolute top-0 left-0"></div>
              </div>
            ))}
          </div>
          <Link href={'/gallery'}>
            <div className="mb-6 w-48 mx-auto rounded-full mt-8 border-4 border-[#faf8f8] shadow-xl bg-[#efeff1] py-1">
              <h2 className="text-lg md:text-xl text-center">View All</h2>
            </div>
          </Link>
        </div>
        <div className="absolute w-full h-full z-[1] top-1/2 -translate-y-1/2 md:flex md:items-center ">
          <img
            src="./img/new-img/gallery.png"
            className="w-full h-[70%]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
