import Image from "next/image";
import Link from "next/link";

import SliderSectionPlantation from "./slider";

const PlantationDocs = () => {
  return (
    <div className="px-4 xl:px-0">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        PLANT A SUPLING, GROW A TREE
      </h2>

      <SliderSectionPlantation />

      <p className="capitalize text-sm md:text-lg text-center pt-8 py-3 font-semibold text-gray-900">
        FGRF&#39;s Plantation Department is a leader in environmental
        conservation, having planted millions of trees.
      </p>
      <p className="capitalize text-sm md:text-lg text-center py-3 font-semibold text-gray-900">
        This effort isn&#39;t just about planting trees; it&#39;s about caring
        for our planet. With careful planning and community involvement, FGRF is
        making a difference by addressing deforestation and promoting a greener
        Earth. Every tree planted contributes to cleaner air, more biodiversity,
        and stronger resilience to climate change. FGRF is committed to creating
        a healthier, more sustainable world for everyone.
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
export default PlantationDocs;
