import Image from "next/image";
import Link from "next/link";
import SliderSectionCovid19 from "./slider";

const Covid19Docs = () => {
  return (
    <div className="py-10 md:py-16 px-5 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        FGRF Performance in COVID-19
      </h2>

      <SliderSectionCovid19 />

      <p className="text-base text-center pt-8 py-3">
        In the face of the COVID-19 pandemic, the world faced unprecedented
        challenges, but FGRF stood out with its unwavering commitment to support
        those in need. We made a difference by providing essential food items,
        cooked meals, and ration boxes to millions of people worldwide,
        including over 25,000 in the UK alone.
      </p>
      <p className="text-base text-center py-3">
        Additionally, we addressed a critical need by building temporary
        mortuaries to support funeral services during this difficult time. Many
        funeral services were hesitant to wash and shroud deceased individuals
        who had died from COVID-19, causing significant worry in communities.
        FGRF stepped in to provide solutions and alleviate concerns, ensuring
        proper care for the deceased and peace of mind for their loved ones.
      </p>
      <p className="text-base text-center py-3">
        Through these efforts, FGRF continues to demonstrate its dedication to
        serving humanity and making a positive impact, even in the face of
        unprecedented challenges.
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
export default Covid19Docs;
