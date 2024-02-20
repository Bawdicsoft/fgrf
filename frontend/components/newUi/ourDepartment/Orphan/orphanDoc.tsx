import Image from "next/image";
import Link from "next/link";

import SliderSectionOrphan from "./slider";

const OrphanDocs = () => {
  return (
    <div className="py-10 md:py-16 px-5 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        FGRF is set to inaugurate its first Orphan House in Different Countries
      </h2>

      <SliderSectionOrphan />
      <p className="text-base text-center py-3 md:py-5">
        FGRF is set to inaugurate its first Orphan House in Karachi, Pakistan,
        marking a significant milestone in its mission to provide care and
        support for vulnerable children. This initiative underscores FGRF
        commitment to nurturing and empowering orphaned youth, offering them a
        safe and nurturing environment where they can thrive. Through holistic
        care, education, and emotional support, FGRF aims to create a loving and
        stable home for these children, giving them the opportunity to build
        brighter futures. The Orphan House represents FGRF unwavering dedication
        to serving the community and making a positive impact on the lives of
        those in need.
      </p>
      <div className="flex flex-col justify-center items-center py-10 gap-10">
        <Link
          href={"/donation"}
          className="px-10 md:px-16 lg:px-24 py-3 bg-teal-500 font-bold lg:text-lg text-white rounded-lg"
        >
          DONATE NOW
        </Link>

      </div>


    </div>
  );
};
export default OrphanDocs;
