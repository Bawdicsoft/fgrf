import Link from "next/link";
import SliderSectionRamadan from "./slider";
const RamadanDocs = () => {
  return (
    // new Code
    <div>
      <div className="py-10 md:py-16 px-5 ">
        <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
          The Holy Prophet ﷺ has said, ‘On the first night of Ramadan,
        </h2>

        <SliderSectionRamadan />

        <p className="text-base text-center pt-8 py-3">
          the portals of the skies and Paradise are opened which remain open
          until the last night (of the month). (Shu’ab-ul-Īmān, pp. 314, vol. 3,
          Ḥadīš 3635)
        </p>
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
            <video className="h-full w-full rounded-2xl" controls>
              <source src="/Videonews/4.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="md:w-3/4 ">
            <video className="h-full w-full rounded-2xl" controls>
              <source src="/Videonews/4.mp4" type="video/mp4" />
            </video>
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
