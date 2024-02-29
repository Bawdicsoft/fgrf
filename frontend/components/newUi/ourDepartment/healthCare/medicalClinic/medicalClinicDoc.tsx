import Image from "next/image";
import Link from "next/link";
import SliderSectionMedicalClinic from "./slider";

const MedicalClinicDocs = () => {
  return (
    <div className="py-5 px-4 xl:px-0 ">
      <SliderSectionMedicalClinic />
      <p className="capitalize text-sm md:text-lg text-center pt-5  py-3 font-semibold text-gray-900">
        keeping costs low to accommodate the country&#39;s inflationary
        challenges. With a mission to make healthcare accessible to all, FGRF
        aims to establish 250+ healthcare centers and 14,000 clinics across
        Pakistan within the next five years. Stay tuned for updates as we
        continue our efforts to provide affordable and quality healthcare to
        communities in need.
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
export default MedicalClinicDocs;
