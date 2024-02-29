import Image from "next/image";
import Link from "next/link";
import SliderSectionturkeySyriaEarthQuack from "./slider";

const TurkeySyriaEarthQuackDocs = () => {
  return (
    <div className="pb-10 px-4 xl:px-0">
      <SliderSectionturkeySyriaEarthQuack />
      <p className="capitalize text-sm md:text-lg text-center py-3 md:py-5 font-semibold text-gray-900">
        Our comprehensive assistance included cooked food, container houses,
        ration parcels, cash aid, and essential supplies for the needy.
      </p>
      <p className="capitalize text-sm md:text-lg text-center py-3 font-semibold text-gray-90">
        But our commitment didn&#39;t end there. FGRF made a promise to the
        orphans and widows affected by the disasters: to provide them with
        homes. Today, we&#39;re proud to announce that we&#39;ve partnered with
        Turkey&#39;s official Disaster Management Department to construct 100
        houses and 2 schools in the border areas of Turkey and Syria, providing
        shelter and education to those in need.
      </p>
      <p className="capitalize text-sm md:text-lg text-center py-3 font-semibold text-gray-90">
        And that&#39;s not all—FGRF has signed agreements with Turkish officials
        for the construction of over 200 additional houses and schools,
        furthering our mission to empower communities and rebuild lives.
      </p>
      <p className="capitalize text-sm md:text-lg text-center py-3 font-semibold text-gray-90">
        Join us in making a difference. Explore FGRF&#39;s efforts and learn how
        you can support our ongoing initiatives on our website.
      </p>
      <div className="flex flex-col justify-center items-center pt-5 gap-10">
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
export default TurkeySyriaEarthQuackDocs;
