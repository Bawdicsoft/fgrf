import Link from 'next/link';
import React from 'react';

const gallery = [
  './img/galleryImg2.png',
  './img/galleryImg2.png',
  './img/galleryImg2.png',
  './img/galleryImg2.png',
  './img/galleryImg2.png',
  './img/galleryImg2.png',
];
const Gallery: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-sky-600 via-sky-900 to-sky-600 pb-10">
      <div className="relative">
        {/* <div className="mb-6 w-60 mx-auto rounded-full border-4 border-[#faf8f8] shadow-xl bg-[#efeff1] py-1">
          <h2 className="text-xl md:text-2xl font-semibold text-center">
            Gallery
          </h2>
        </div> */}

        <h2 className='text-center text-white pt-10 pb-8 text-2xl md:text-3xl lg:text-5xl font-bold'>Gallery</h2>

        <div className="md:w-[65%] w-full mx-auto relative">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-8 px-2 mt-5">
            {gallery.map((data, index) => (
              <div
                key={index}
                className="col-span-1 h-72 bg-[#f1fcd1] relative rounded-lg border-[3px] border-[#7caec1] shadow-2xl flex flex-col justify-center items-center gap-y-3"
              >
                <img src={data} className="w-full h-full opacity-90" alt="" />
              </div>
            ))}
          </div>
          <Link href={'/gallery'}>
            <div className="w-40 mx-auto rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
              <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                Show more
              </span>
            </div>
          </Link>
        </div>
        {/* <div className="absolute w-full h-full z-[1] top-1/2 -translate-y-1/2 md:flex md:items-center ">
          <img
            src="./img/new-img/gallery.png"
            className="w-full h-[70%]"
            alt=""
          />
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;
