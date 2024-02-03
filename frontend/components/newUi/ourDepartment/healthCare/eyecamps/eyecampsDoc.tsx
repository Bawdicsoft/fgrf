import Image from "next/image";
import Link from "next/link";
import SliderSectionEyeCamps from "./slider";

const EyecampsDocs = () => {
  return (
    <div className="py-10 md:py-16 px-5 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        FGRF Addresses Eye Health in Rural Communities: Organizing Free Eye
        Camps
      </h2>

      <SliderSectionEyeCamps />

      <p className="text-base text-center pt-8 py-3">
        Understanding the pressing need for eye care in rural areas, FGRF has
        initiated various eye camps to provide essential services to communities
        in need. These camps offer free eye tests and medication, ensuring that
        individuals receive the necessary care without any financial burden.
      </p>
      <p className="text-base text-center py-3">
        Through these initiatives, FGRF aims to tackle eye issues prevalent in
        rural communities and improve access to eye care services. By providing
        free-of-cost screenings and treatment, we strive to alleviate suffering
        and promote better eye health among those who need it most.
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
export default EyecampsDocs;
