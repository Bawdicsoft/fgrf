import Image from "next/image";
import Link from "next/link";
import SliderSectionMedicalClinic from "./slider";

const MedicalClinicDocs = () => {
  return (
    <div className="py-10 md:py-16 px-5 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        FGRF is proud to announce the opening of its first medical clinic in
        Karachi
      </h2>

      <SliderSectionMedicalClinic />

      <p className="text-base text-center pt-8 py-3">
        FGRF is proud to announce the opening of its first medical clinic in
        Karachi, Pakistan. Our clinic offers doctor check-ups and essential
        medicines for just Rs. 300, keeping costs low to accommodate the country
        is inflationary challenges. With a mission to make healthcare accessible
        to all, FGRF aims to establish 250+ healthcare centers and 14,000
        clinics across Pakistan within the next five years. Stay tuned for
        updates as we continue our efforts to provide affordable and quality
        healthcare to communities in need.
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
export default MedicalClinicDocs;