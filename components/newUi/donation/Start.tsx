import Image from "next/image";
import React from "react";
interface StartSecProps {
  monthlyHandler: (data: string[]) => void;
}
const monthlyList = [
  "Orphans",
  "Sadaqah",
  "Water For Life",
  "Global Emergencies",
];
const oneOffList = [
  "Palestine Emergency Appeal",
  "Winter Appeal",
  "Afghanistan Emergency Appeal",
  "Zakat",
  "Sadaqah",
  "Wherever Needed Most",
  "Sudan Emergency Appeal",
  "Turkey/Syria Earthquake Emergency",
  "Syria Crisis Appeal",
  "Yemen Appeal",
  "Water For Life",
  "Orphans And Children",
  "Sadaqah Jariyah",
  "People In Debt",
  "Waqf",
  "Interest (RIBA)",
  "Capacity Building For Humanitarians",
  "Global Emergencies",
];
const StartSec: React.FC<StartSecProps> = ({ monthlyHandler }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-sky-800 font-bold text-3xl py-5">
        MAKE YOUR DONATION
      </h2>
      <div>
        <Image
          src={"/donationNew.webp"}
          alt="donationImg"
          width={500}
          height={400}
        />
      </div>
      <div className="py-10 flex">
        <button
          onClick={() => monthlyHandler(monthlyList)}
          className={`border-2 hover:bg-gray-200 border-[#19afaf] py-2 px-4 md:text-2xl font-bold text-gray-400 bg-white `}
        >
          MONTHLY
        </button>
        <button
          onClick={() => monthlyHandler(oneOffList)}
          className={`border-2 hover:bg-gray-200 border-[#19afaf] py-2 px-4 md:text-2xl font-bold text-gray-400 bg-white `}
        >
          ONE-OFF
        </button>
      </div>
    </div>
  );
};
export default StartSec;
