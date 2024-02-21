import Image from "next/image";
import Link from "next/link";
import SliderSectionEnvironment from "./slider";

const EnvironmentDocs = () => {
  return (
    <div className="px-4 xl:px-0 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        This department is working since 2021
      </h2>

      <SliderSectionEnvironment />

      <p className="text-base text-center  py-5">
        Started its climatic emergency action from Karachi by collaborating with
        KMC in an initiative Green Karachi.
      </p>
      <p className="text-base text-center py-5">
        To date, the FGRF Environment department has contributed more than 0.3
        million trees in different areas of Karachi which include shady and
        fruit trees, while 4 abundant parks have been recovered and
        rehabilitation of these parks has been completed. Now the footprint has
        been spread all over Pakistan and since we took the charge.
      </p>
      <p className="text-base text-center py-5">
        We targeted 2 million trees in the first phase which was achieved with
        the support of our volunteers and in collaboration with government and
        international NGOs. WWF is a technical partner and the Ministry of
        Climate Change appreciated the efforts, we not only plant saplings! Our
        mission statement is (I must plant a sapling and grow it into Tree) We
        have a strong post care system which is continued till the mission is
        accomplished.
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
