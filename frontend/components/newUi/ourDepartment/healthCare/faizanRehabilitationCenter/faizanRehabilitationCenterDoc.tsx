import Image from "next/image";
import Link from "next/link";

import SliderSectionFaizanRehabilitationCenter from "./slider";

const FaizanRehabilitationCenterDocs = () => {
  return (
    <div className="py-5 px-4 xl:px-0">
      <SliderSectionFaizanRehabilitationCenter />
      <p className="capitalize text-sm md:text-lg text-center pt-5  py-3 font-semibold text-gray-900">
        With four branches already established in Pakistan, FRC is now looking
        forward to expanding its services to the UK in 2024. Our mission is to
        provide comprehensive care and support to children with special needs,
        empowering them to reach their full potential and lead fulfilling lives.
        Stay tuned for updates on our upcoming launch in the UK and join us in
        making a difference in the lives of children with developmental
        challenges.
      </p>

      <div className="flex flex-col justify-center items-center py-10 gap-10">
        <Link
          href={"/donation"}
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
export default FaizanRehabilitationCenterDocs;
