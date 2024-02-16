import Image from "next/image";
import Link from "next/link";

import SliderSectionBloodDonations from "./slider";

const BloodDonationsDocs = () => {
  return (
    <div className="px-4 xl:px-0 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        Thalassemia Patients During the COVID-19 Pandemic
      </h2>

      <SliderSectionBloodDonations />

      <p className="text-base text-center pt-8 py-3">
        Recognizing the challenges faced by thalassemia patients during the
        COVID-19 pandemic,
      </p>
      <p className="text-base text-center py-3">
        FGRF took proactive steps to support this vulnerable community.
        Understanding the critical need for blood donations, we appealed to our
        followers to donate blood, urging them to make a difference in the lives
        of thalassemia patients.
      </p>
      <p className="text-base text-center py-3">
        Thanks to the generosity of our supporters and a collaborative effort
        with Dawat-e-Islami and various health departments, FGRF has
        successfully provided over 65,000 blood bags to thalassemia patients in
        need. This initiative underscores our commitment to serving those
        affected by thalassemia and ensuring they have access to life-saving
        blood transfusions, especially during challenging times like the
        COVID-19 pandemic.
      </p>
      <p className="text-base text-center py-3">
        FGRF remains dedicated to supporting thalassemia patients and will
        continue to work tirelessly to provide them with the care and resources
        they require to lead healthy and fulfilling lives.
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
export default BloodDonationsDocs;
