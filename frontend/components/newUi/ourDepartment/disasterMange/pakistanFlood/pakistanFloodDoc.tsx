import Image from "next/image";
import Link from "next/link";

import SliderSectionPakistanFlood from "./slider";

const PakistanFloodDocs = () => {
  return (
    <div className="py-10 md:py-16 px-5 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        FGRF Swift Response to Pakistan Floods: From Rescue to Rebuilding
      </h2>

      <SliderSectionPakistanFlood />

      <p className="text-base text-center pt-8 py-3">
        When disaster struck in the form of floods across Pakistan, FGRF swiftly
        mobilized its resources, reaching every affected area to provide
        critical aid. From distributing tent houses and cooked meals to
        delivering essential ration bags and setting up medical camps, our teams
        worked tirelessly to alleviate suffering and provide immediate relief.
      </p>
      <p className="text-base text-center py-3">
        But our commitment did not stop there. FGRF made a promise to the flood
        victims: to rebuild their lives by constructing 15,000 houses. Today, we
        are proud to report that we have already surpassed the halfway mark,
        with over 6,000 houses completed and more underway.
      </p>
      <p className="text-base text-center py-3">
        Join us on our journey to fulfill our promise and bring hope to those
        who have lost everything. Together, we are making a difference—one
        house, one family at a time.
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
export default PakistanFloodDocs;