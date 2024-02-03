import Image from "next/image";
import Link from "next/link";
import SliderSectionturkeySyriaEarthQuack from "./slider";

const TurkeySyriaEarthQuackDocs = () => {
  return (
    <div className="py-10 md:py-16 px-5 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        FGRF Response to Turkey and Syria Earthquakes
      </h2>

      <SliderSectionturkeySyriaEarthQuack />

      <p className="text-base text-center pt-8 py-3">
        In the aftermath of the devastating earthquakes in Turkey and Syria,
        FGRF swiftly mobilized to provide aid and support to those affected. Our
        comprehensive assistance included cooked food, container houses, ration
        parcels, cash aid, and essential supplies for the needy.
      </p>
      <p className="text-base text-center py-3">
        But our commitment did not end there. FGRF made a promise to the orphans
        and widows affected by the disasters: to provide them with homes. Today,
        we are proud to announce that we have partnered with Turkey official
        Disaster Management Department to construct 100 houses and 2 schools in
        the border areas of Turkey and Syria, providing shelter and education to
        those in need
      </p>
      <p className="text-base text-center py-3">
        And that is not all—FGRF has signed agreements with Turkish officials
        for the construction of over 200 additional houses and schools,
        furthering our mission to empower communities and rebuild lives.
      </p>
      <p className="text-base text-center py-3">
        Join us in making a difference. Explore FGRF efforts and learn how you
        can support our ongoing initiatives on our website.
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
export default TurkeySyriaEarthQuackDocs;
