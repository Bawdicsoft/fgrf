import Image from "next/image";
import Link from "next/link";

import SliderSectionDisaster from "./slider";
import SliderSectionMoroccoEarthquake from "./slider";

const MoroccoEarthquakeDocs = () => {
  return (
    <div className="px-5 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        Supporting Morocco: FGRF&#39;s Relief Efforts in Response to the
        Earthquake
      </h2>

      <SliderSectionMoroccoEarthquake />

      <p className="text-base text-center pt-8 py-3">
        FGRF swiftly responded to the earthquake in Morocco, delivering
        essential aid to those affected.
      </p>
      <p className="text-base text-center py-3">
        Our teams provided first aid, essential supplies, and cooked food ration
        bags to alleviate immediate needs.
      </p>
      <p className="text-base text-center py-3">
        Recognizing the challenges faced during the winter months, FGRF took
        proactive steps to address the issue of gas shortages. We pledged to
        distribute over 20,000 gas cylinders to ensure families have access to
        heating and cooking facilities during the cold season.
      </p>
      <p className="text-base text-center py-3">
        Our dedicated team remained on the ground, working tirelessly alongside
        the affected communities. In addition to gas cylinders, we distributed
        more than 5,000 ration bags, further supporting families in their time
        of need.
      </p>
      <p className="text-base text-center py-3">
        Join us in our efforts to make a meaningful difference in the lives of
        those impacted by the earthquake in Morocco. Together, we can provide
        comfort, support, and hope for a brighter tomorrow.
      </p>
      <div className="flex flex-col justify-center items-center pt-10 pb-20 gap-10">
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
export default MoroccoEarthquakeDocs;
