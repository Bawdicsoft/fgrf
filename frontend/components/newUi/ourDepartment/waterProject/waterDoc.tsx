import Image from "next/image";
import Link from "next/link";
import SliderSectionWater from "./slider";

const WaterDocs = () => {
  return (
    <div className="px-4 xl:px-0 ">
      <SliderSectionWater />
      <p className="text-sm md:text-lg text-center py-3 md:py-5 font-semibold text-gray-900">
        These projects showcase a diverse range of solutions, programs, and
        costs, highlighting our commitment to addressing water scarcity and
        providing sustainable solutions. From innovative technologies to
        community-based initiatives, each project is tailored to the specific
        needs and challenges of the region. Together, these efforts contribute
        to improving access to clean and
      </p>
      <p className="text-sm md:text-lg text-center py-3 font-semibold text-gray-900">
        safe water for communities in need, promoting health, hygiene, and
        overall well-being.
      </p>

      <p className="text-sm md:text-lg text-center py-3 font-semibold text-gray-900">
        &quot;Unlocking Potential: Providing Clean Water, Transforming Lives
        Forever!&quot;
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
export default WaterDocs;
