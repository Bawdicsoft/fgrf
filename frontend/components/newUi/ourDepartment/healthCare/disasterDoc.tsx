import Image from "next/image";
import Link from "next/link";
import SliderSectionHealth from "./slider";

const HealthCareDocs = () => {
  return (
    <div className="py-10 md:py-16 px-5 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        FGRF Commitment to Health: Providing Medical Assistance in Disaster
        Recovery and Rural Areas
      </h2>

      <SliderSectionHealth />

      <p className="text-base text-center pt-8 py-3">
        As part of our comprehensive disaster recovery efforts and outreach to
        rural communities, FGRF is dedicated to improving health outcomes for
        those in need. We organize medical camps in affected areas, offering
        free medical consultations and essential healthcare services.
      </p>
      <p className="text-base text-center py-3">
        At these camps, individuals receive access to free medication, ensuring
        they have the necessary treatment to address their health concerns.
        Additionally, we arrange free clinical facilities, providing essential
        healthcare services to those who may not have access otherwise.
      </p>
      <p className="text-base text-center py-3">
        FGRF recognizes the importance of health in building resilient
        communities, and we remain committed to supporting individuals and
        families in their journey towards recovery and well-being.
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
export default HealthCareDocs;
