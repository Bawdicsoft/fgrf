"use client";
import React, { useState } from "react";

const GalleryPage = () => {
  const gallery = [
    "./img/galleryImg1.png",
    "./img/galleryImg2.png",
    "./img/galleryImg3.png",
    "./img/galleryImg4.png",
    "./img/galleryImg5.png",
    "./img/galleryImg6.png",
    "./img/galleryImg1.png",
    "./img/galleryImg2.png",
    "./img/galleryImg3.png",
    "./img/galleryImg4.png",
    "./img/galleryImg5.png",
    "./img/galleryImg6.png",
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section>
      <div className="pt-20 lg:pt-36 pb-8">
        <div className="relative">
          <div className="mb-6 w-60 mx-auto rounded-full border-4 border-[#faf8f8] shadow-xl bg-[#efeff1] py-1">
            <h2 className="text-xl md:text-3xl font-semibold text-center">
              Gallery
            </h2>
          </div>
          <div className="max-w-5xl xl:mx-auto mx-2  relative z-[2]">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-2 mt-5">
              {gallery.map((data, index: any) => (
                <div
                  key={index}
                  className="col-span-1 relative rounded p-1 border flex flex-col justify-center items-center gap-y-3"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={data}
                    className={`w-full h-full ${
                      hoveredIndex === index
                        ? "transition ease-in-out duration-500"
                        : "grayscale"
                    }`}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;