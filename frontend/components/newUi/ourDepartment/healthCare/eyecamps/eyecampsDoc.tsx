import Image from "next/image";
import Link from "next/link";
import SliderSectionEyeCamps from "./slider";

const EyecampsDocs = () => {
  return (
    <div className="py-5 px-4 xl:px-0">
      <SliderSectionEyeCamps />

      <p className="capitalize text-sm md:text-lg text-center pt-5  py-3 font-semibold text-gray-900">
        FGRF has initiated various eye camps to provide essential services to
        communities in need. These camps offer free eye tests and medication,
        ensuring that individuals receive the necessary care without any
        financial burden.
      </p>
      <p className="capitalize text-sm md:text-lg text-center py-3 font-semibold text-gray-900">
        TThrough these initiatives, FGRF aims to tackle eye issues prevalent in
        rural communities and improve access to eye care services. By providing
        free-of-cost screenings and treatment, we strive to alleviate suffering
        and promote better eye health among those who need it most.
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
export default EyecampsDocs;
