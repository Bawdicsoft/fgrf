import Link from "next/link";
import SliderSectionRamadan from "./slider";
import AnimatedVideoLeft from "../animations/videoAnimationLeft";
import AnimatedVideoRight from "../animations/videoAnimationRight";
const RamadanDocs = () => {
  return (
    // new Code
    <div>
      <div className="py-10 md:py-16 px-5 ">
        <SliderSectionRamadan />

        <div className="">
          <h2 className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg pt-8 py-2">
            The Holy Prophet ﷺ has said, ‘On the first night of Ramadan, the
            portals of the skies and Paradise are opened which remain open until
            the last night (of the month).{" "}
          </h2>
          <p className="text-xs md:text-sm text-center">
            (Shu’ab-ul-Īmān, pp. 314, vol. 3, Ḥadīš 3635)
          </p>
        </div>
        <div className="flex justify-center">
          <Link href={"/donation"}>
            <button className="relative shadow-2xl group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold  py-2 text-xl">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                <span className="relative group-hover:text-white">
                  Donate Now
                </span>
              </span>
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-10 pt-10 pb-8 items-center">
          <div className="md:w-3/4 ">
            <AnimatedVideoLeft>
              <video className="h-full w-full rounded-2xl" controls>
                <source src="/Videonews/4.mp4" type="video/mp4" />
              </video>
            </AnimatedVideoLeft>
          </div>
          <div className="md:w-3/4 ">
            <AnimatedVideoRight>
              <video className="h-full w-full rounded-2xl" controls>
                <source src="/Videonews/4.mp4" type="video/mp4" />
              </video>
            </AnimatedVideoRight>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href={"/donation"}>
            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                <span className="relative group-hover:text-white">
                  Donate Now
                </span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RamadanDocs;