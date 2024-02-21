import Image from "next/image";
import Link from "next/link";

import SliderSectionPakistanFlood from "./slider";

const PakistanFloodDocs = () => {
  return (
    <div className="py-10 px-4 xl:px-0">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center pb-8">
        FGRF&#39;s Swift Response to Pakistan Floods:
      </h2>

      <SliderSectionPakistanFlood />
      <p className="text-base text-center pt-8 py-3">
        From Rescue to Rebuilding When disaster struck in the form of floods
        across Pakistan,
      </p>

      <p className="text-base text-center py-3">
        FGRF swiftly mobilized its resources, reaching every affected area to
        provide critical aid. From distributing tent houses and cooked meals to
        delivering essential ration bags and setting up medical camps, our teams
        worked tirelessly to alleviate suffering and provide immediate relief.
      </p>
      <p className="text-base text-center py-3">
        But our commitment didn&#39;t stop there. FGRF made a promise to the
        flood victims: to rebuild their lives by constructing 15,000 houses.
        Today, we&#39;re proud to report that we&#39;ve already surpassed the
        halfway mark, with over 6,000 houses completed and more underway.
      </p>
      <p className="text-base text-center py-3">
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
