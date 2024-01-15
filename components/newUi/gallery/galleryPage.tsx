"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
// import GalleryImagesModal from "../modal/galleryImagesModal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import AnimationTop from "../home/AnimationTop";

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [galleryImage, setGalleryImage] = useState("");

  const handleOpenForImg = (imagePath: string) => {
    setGalleryImage(imagePath);
    setOpen(!open);
  };

  const gallery = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg",
    "/gallery/img7.jpg",
    "/gallery/img8.jpg",
    "/gallery/img9.jpg",
    "/gallery/img10.jpg",
    "/gallery/img11.jpg",
    "/gallery/img12.jpg",
    "/gallery/img13.jpg",
    "/gallery/img14.jpg",
    "/gallery/img15.jpg",
  ];

  const galleryImageArray = [galleryImage, ...gallery];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className="bg-center bg-cover bg-no-repeat bg-blend-multiply"
      style={{
        backgroundImage: `url("./finalIconAssets/Assest/Secondpage/bgasset.png")`,
        height: "100%",
      }}
    >
      <div className="pt-20 pb-8">
        <div className="relative">
          <div className="flex flex-col items-center max-w-[1200px] py-5 md:py-8 mx-auto px-3">
            <AnimationTop>
              <motion.div
                whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div
                  id="box3d"
                  className="border-4 border-[#85d0d0]  w-60 md:w-80 py-1 bg-[#6898b1] mx-auto rounded-full shadow-lg"
                >
                  <h2
                    id=""
                    className="text-2xl md:text-3xl hover:text-sky-800 font-bold text-white text-center"
                  >
                    Gallery
                  </h2>
                </div>
              </motion.div>
            </AnimationTop>
          </div>
          <div className="max-w-5xl xl:mx-auto mx-2  relative z-[2]">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4 px-2 mt-5">
              {gallery.map((data, index: any) => (
                <div key={index} className="card relative group h-full w-full">
                  <div className="front group-hover:rotate-y-180 h-full w-full">
                    <img
                      className="h-full w-full shadow shadow-black/40"
                      src={data}
                      alt="FGRF"
                    />
                  </div>
                  <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                    <div className="back-content flex flex-col justify-center items-center text-gray-700">
                      <div className="sm space-x-2">
                        <h3>Lorem ipsum</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Old Design Code */}

      {/* Image Main Gallery */}
      {/* <GalleryImagesModal open={open} setOpen={setOpen}>
        <Carousel
          className="md:w-[65vh] w-[50vh] mt-4"
          showIndicators={false}
          useKeyboardArrows={true}
        >
          {galleryImageArray.map((data, index) => (
            <div key={index}>
              <img src={data} alt="FGRF" />
            </div>
          ))}
        </Carousel>
      </GalleryImagesModal> */}
      {/* <figure className="w-full h-full overflow-hidden">
        <img
          src={data}
          className={`w-full h-full ${
            hoveredIndex === index
              ? "scale-110 transition duration-1000"
              : "grayscale transition duration-1000"
          }`}
          alt="FGRF Gallery"
        />
      </figure> */}
    </section>
  );
};

export default GalleryPage;
