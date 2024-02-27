import Image from "next/image";
import Link from "next/link";

export default function DonationSectionHealthCare() {
  const cardArray = [
    { amount: "25", title: "Food box" },
    { amount: "100", title: "clean drinking & Food Box" },
    { amount: "200", title: "Medical aid" },
    { amount: "300", title: "tents house" },
  ];
  return (
    <div className="max-w-screen-lg mx-auto px-4 md:px-4 xl:px-0">
      <div className="">
        <h2 className="text-center text-xl md:text-3xl lg:text-4xl text-teal-500 font-bold pb-4 md:py-6">
          FGRF&#39;s Commitment to Health
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cardArray.map((data, index) => (
            <div key={index} className="rounded-xl bg-white">
              <h2 className="md:text-2xl lg:text-3xl rounded-t-xl font-bold text-white bg-teal-500 text-center py-1">
                £{"   "} {data.amount}
              </h2>
              <div className="flex flex-col justify-between gap-4 py-4 px-4">
                {data.title !== "clean drinking & Food Box" ? (
                  <h2 className="md:text-2xl lg:text-3xl font-extrabold text-gray-500 text-center py-3">
                    {data.title}
                  </h2>
                ) : (
                  <h2 className="text-sm md:text-lg lg:text-xl font-extrabold text-gray-500 text-center">
                    {data.title}
                  </h2>
                )}
                <Link
                  href={"/donation"}
                  className="bg-teal-500 text-xs   uppercase text-center font-semibold text-white py-1 md:text-sm lg:text-base lg:py-2 lg:px-5 rounded-full"
                >
                  Donate now
                </Link>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-center text-xl  md:text-3xl text-teal-500 font-bold pt-5 md:py-6">
          {" "}
          Providing Medical Assistance in Disaster Recovery and Rural Areas.
          FGRF is dedicated to improving health outcomes for those in need.
        </h2>

        <div className="border-4 border-sky-600 rounded-xl h-[250px] md:h-[450px] lg:h-[600px] w-full mx-auto my-8">
          <video className="h-full w-full rounded-lg object-cover" controls>
            <source src="/Videonews/4.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex gap-4 md:gap-0 justify-between">
          <div className="md:w-5/12 h-24 md:h-52 lg:h-72">
            <Image
              src={"/ourDepartment/disaster/donation1.jpg"}
              alt="about image"
              width={2000}
              height={2000}
              className="h-full w-full"
            />
          </div>
          <div className="md:w-5/12 h-24 md:h-52 lg:h-72">
            <Image
              src={"/ourDepartment/disaster/donation2.jpg"}
              alt="about image"
              width={2000}
              height={2000}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
