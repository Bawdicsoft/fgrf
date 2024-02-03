import Image from "next/image";
import Link from "next/link";

import SliderSectionPlantation from "./slider";

const PlantationDocs = () => {
  return (
    <div className="py-10 md:py-16 px-5 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        PLANT A SUPLING, GROW A TREE
      </h2>

      <SliderSectionPlantation />

      <p className="text-base text-center pt-8 py-3">
        FGRF Plantation Department is a leader in environmental conservation,
        having planted millions of trees. This effort is not just about planting
        trees; it is about caring for our planet. With careful planning and
        community involvement, FGRF is making a difference by addressing
        deforestation and promoting a greener Earth. Every tree planted
        contributes to cleaner air, more biodiversity, and stronger resilience
        to climate change. FGRF is committed to creating a healthier, more
        sustainable world for everyone.
      </p>

      <div className="flex flex-col justify-center items-center pt-10 pb-20 gap-10">
        <Link
          href={"/"}
          className="px-10 md:px-16 lg:px-24 py-3 bg-teal-500 font-bold lg:text-lg text-white rounded-lg"
        >
          DONATE NOW
        </Link>
        {/* <Image src={"/donation/palestinEmergency/button.jpg"} alt="" width={700} height={900} /> */}
      </div>

      {/* Second Video Container */}
      {/* <div className="flex flex-col items-center">
        <div className="w-3/4 ">
          <video className="h-full w-full rounded-2xl" controls>
            <source src="/Videonews/6.mp4" type="video/mp4" />
          </video>
          <div className="flex justify-center items-center py-8">
            <Link
              href={"/"}
              className="px-10 md:px-16 lg:px-24 py-3 bg-teal-500 font-bold lg:text-lg text-white rounded-lg"
            >
              DONATE NOW
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default PlantationDocs;
