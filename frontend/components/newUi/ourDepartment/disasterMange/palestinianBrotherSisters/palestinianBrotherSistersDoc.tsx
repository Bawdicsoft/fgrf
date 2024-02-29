import Image from "next/image";
import Link from "next/link";

import SliderSectionpalestinianBrotherSister from "./slider";

const PalestinianBrotherSistersDocs = () => {
  return (
    <div className="px-4 xl:px-0 ">
      <SliderSectionpalestinianBrotherSister />
      <p className="capitalize text-sm md:text-lg text-center py-3 md:py-5 font-semibold text-gray-900">
        With urgency and compassion, we provided over 100,000 cooked meals,
        along with container mattresses and blankets, to those in need.
      </p>
      <p className="capitalize text-sm md:text-lg text-center py-3 font-semibold text-gray-90">
        Additionally, we distributed thousands of food packs and ration boxes,
        ensuring that no one went hungry during this difficult time. Multiple
        aid containers were dispatched via Egypt, delivering essential supplies
        to affected communities.
      </p>
      <p className="capitalize text-sm md:text-lg text-center py-3 font-semibold text-gray-90">
        FGRF remains committed to standing by the people of Palestine, offering
        support and relief to help them overcome the challenges they face.
        Together, we strive to bring comfort and hope to those in need.
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
export default PalestinianBrotherSistersDocs;
