import Image from "next/image";
import Link from "next/link";

import SliderSectionDisaster from "./slider";

const DisasterDocs = () => {
  return (
    <div className="py-10 md:py-16 px-5 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        FGRF Rapid Response Disaster Management Department
      </h2>

      <SliderSectionDisaster />

      <p className="text-base text-center pt-8 py-3">
        FGRF global network, ready to swiftly respond to disasters around the
        world. With our extensive reach and robust infrastructure, we ensure no
        one is left behind in times of crisis.
      </p>
      <p className="text-base text-center py-3">
        Our dedicated team stands ready to spring into action, leveraging the
        power of Dawat-e-Islami vast follower base to provide immediate aid and
        relief wherever it is needed most. From natural disasters to
        humanitarian emergencies, we are equipped to handle any challenge with
        efficiency and compassion.
      </p>
      <p className="text-base text-center py-3">
        Through our website, you can stay updated on our latest relief efforts,
        learn about our proactive approach to disaster management, and discover
        how you can support our mission to make a difference in the lives of
        those affected by adversity.
      </p>
      <p className="text-base text-center py-3">
        Join us in our journey to serve humanity and build a better world.
        Together, we can make a meaningful impact and spread hope in times of
        need. Explore FGRF today and be a part of our global movement for
        change.
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
export default DisasterDocs;