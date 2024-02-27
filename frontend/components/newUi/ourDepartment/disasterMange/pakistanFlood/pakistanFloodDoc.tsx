import Image from "next/image";
import Link from "next/link";

import SliderSectionPakistanFlood from "./slider";

const PakistanFloodDocs = () => {
  return (
    <div className="py-10 px-4 xl:px-0">
      <SliderSectionPakistanFlood />

      <p className="text-sm md:text-lg text-center py-3 md:py-5 font-semibold text-gray-900">
        FGRF swiftly mobilized its resources, reaching every affected area to
        provide critical aid. From distributing tent houses and cooked meals to
        delivering essential ration bags and setting up medical camps, our teams
        worked tirelessly to alleviate suffering and provide immediate relief.
      </p>
      <p className="text-sm md:text-lg text-center py-3 font-semibold text-gray-90">
        But our commitment didn&#39;t stop there. FGRF made a promise to the
        flood victims: to rebuild their lives by constructing 15,000 houses.
        Today, we&#39;re proud to report that we&#39;ve already surpassed the
        halfway mark, with over 6,000 houses completed and more underway.
      </p>
      <p className="text-sm md:text-lg text-center py-3 font-semibold text-gray-90">
        JJoin us on our journey to fulfill our promise and bring hope to those
        who have lost everything. Together, we&#39;re making a difference—one
        house, one family at a time.
      </p>
      <div className="flex flex-col justify-center items-center pt-10 gap-10">
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
export default PakistanFloodDocs;
