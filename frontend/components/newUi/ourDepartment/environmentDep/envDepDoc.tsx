import Image from "next/image";
import Link from "next/link";
import SliderSectionEnvironment from "./slider";

const EnvironmentDocs = () => {
  return (
    <div className="px-4 xl:px-0 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        FGRF encourage them to make small but meaningful changes
      </h2>

      <SliderSectionEnvironment />

      <p className="text-base text-center pt-8 pb-10">
        Our workshops for primary and secondary students motivate them to become
        future change-makers. We encourage them to make small but meaningful
        changes that can create a big impact.
      </p>
      {/* <div className="flex flex-col justify-center items-center pt-10 pb-20 gap-10">
        <Link
          href={"/"}
          className="px-10 md:px-16 lg:px-24 py-3 bg-teal-500 font-bold lg:text-lg text-white rounded-lg"
        >
          DONATE NOW
        </Link>
      </div> */}
    </div>
  );
};
export default EnvironmentDocs;
