import Image from "next/image";
import Link from "next/link";

import SliderSectionpalestinianBrotherSister from "./slider";

const PalestinianBrotherSistersDocs = () => {
  return (
    <div className="py-10 md:py-16 px-5 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        FGRF Swift Response in Palestine During Times of Crisis
      </h2>

      <SliderSectionpalestinianBrotherSister />

      <p className="text-base text-center pt-8 py-3">
        In the face of adversity, FGRF wasted no time in extending a helping
        hand to Palestine. With urgency and compassion, we provided over 100,000
        cooked meals, along with container mattresses and blankets, to those in
        need.
      </p>
      <p className="text-base text-center py-3">
        Additionally, we distributed thousands of food packs and ration boxes,
        ensuring that no one went hungry during this difficult time. Multiple
        aid containers were dispatched via Egypt, delivering essential supplies
        to affected communities.
      </p>
      <p className="text-base text-center py-3">
        FGRF remains committed to standing by the people of Palestine, offering
        support and relief to help them overcome the challenges they face.
        Together, we strive to bring comfort and hope to those in need.
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
export default PalestinianBrotherSistersDocs;
