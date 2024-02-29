import Image from "next/image";
import Link from "next/link";

import SliderSectionMedicalVan from "./slider";

const MedicalVanDocs = () => {
  return (
    <div className="py-5 px-4 xl:px-0">
      <SliderSectionMedicalVan />
      <p className="capitalize text-sm md:text-lg text-center pt-5  py-3 font-semibold text-gray-900">
        Equipped with doctors and paramedical staff, dedicated to reaching rural
        areas with serious health issues. Our mission is to provide essential
        healthcare services to communities in need, ensuring access to medical
        care where it&#39;s needed most.
      </p>
      <p className="capitalize text-sm md:text-lg text-center py-3 font-semibold text-gray-900">
        To expand our reach and impact, we are seeking your generous donations
        to create more medical vans for these underserved areas. With your
        support, we can extend our healthcare services to even more rural
        communities, improving health outcomes and transforming lives.
      </p>
      <p className="capitalize text-sm md:text-lg text-center py-3 font-semibold text-gray-900">
        Join us in our mission to make healthcare accessible to all. Your
        donation can make a real difference in the lives of those who need it
        most.
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
export default MedicalVanDocs;
