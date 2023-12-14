"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import GalleryImagesModal from "../modal/galleryImagesModal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
                <>
                  <motion.div
                    initial={{
                      opacity: 0,
                      translateX: index % 2 === 0 ? -50 : 50,
                      translateY: -50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    key={index}
                    className="col-span-1 relative rounded cursor-pointer p-1 border flex flex-col justify-center items-center gap-y-3"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleOpenForImg(data)}
                  >
                    <figure className="w-full h-full overflow-hidden">
                      <img
                        src={data}
                        className={`w-full h-full ${
                          hoveredIndex === index
                            ? "scale-110 transition duration-1000"
                            : "grayscale transition duration-1000"
                        }`}
                        alt="FGRF Gallery"
                      />
                    </figure>
                  </motion.div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Image Main Gallery */}
      <GalleryImagesModal open={open} setOpen={setOpen}>
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
      </GalleryImagesModal>
    </section>
  );
};

export default GalleryPage;