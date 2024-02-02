import Image from "next/image";
import Link from "next/link";

import SliderSectionOrphan from "./slider";
import SliderSectionMasjid from "./slider";

const MasjidDocs = () => {
  return (
    <div className="py-10 md:py-16 px-5 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        Sponsor a Masjid and Madrasa with FGRF
      </h2>

      <SliderSectionMasjid />
      <p className="text-base text-center py-3 md:py-5">
        Sponsor a Masjid and Madrasa with FGRF: Join us in our mission to build
        more than 600 masajid and Madrassa every year. Your contribution will
        help create sacred spaces for worship and education, providing spiritual
        guidance and knowledge. Together, we can make a lasting impact on the
        lives of countless individuals and uphold the values of unity, faith,
        and compassion. Join us in this noble endeavor and leave a legacy of
        faith and generosity for generations to come.
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
export default MasjidDocs;
