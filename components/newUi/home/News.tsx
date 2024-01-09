import Link from "next/link";
import React from "react";
import NewsSlider from "./NewsSlider";
import ContactUs from "./Contactus";

const NewsSection: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-r py-20 bg-center bg-cover bg-no-repeat bg-blend-multiply"
      style={{
        backgroundImage: `url("./finalIconAssets/Assest/Secondpage/bgasset.png")`,
        height: "100%",
      }}
    >
      <div className="flex flex-col  items-center px-5">
        <h2 className="text-white text-4xl font-bold py-5">News</h2>
        <div className="bg-white grid grid-cols-1 lg:grid-cols-4 max-w-5xl gap-5 p-5 rounded-lg">
          <div className="flex flex-col gap-4 justify-evenly">
            <div>
              <video className="h-full w-full" controls>
                <source src="/video/v2.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <video className="h-full w-full" controls>
                <source src="/video/v2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="md:col-span-2 md:h-[350px]">
            <video className="h-full w-full object-cover outline-none" controls>
              <source src="/video/v2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col gap-4 justify-evenly">
            <div>
              <video className="h-full w-full" controls>
                <source src="/video/v2.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <video className="h-full w-full" controls>
                <source src="/video/v2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* slider */}

      <div className="max-w-5xl mx-auto px-5 pt-2">
        <NewsSlider />
      </div>

      {/* contact us */}
      <div className="flex justify-center items-center">
        <div className="max-w-5xl ">
          <ContactUs />
        </div>
      </div>
    </section>
  );
};
export default NewsSection;
