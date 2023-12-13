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
  return (
    <section>
      <div className="pt-20 lg:pt-36 pb-8">
        <div className="relative">
          <div className="mb-6 w-60 mx-auto rounded-full border-4 border-[#faf8f8] shadow-xl bg-[#efeff1] py-1">
            <h2 className="text-xl md:text-3xl font-semibold text-center">
              Gallery
            </h2>
          </div>
          <div className="max-w-6xl xl:mx-auto mx-2  relative z-[2]">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-2 mt-5">
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default GalleryPage;