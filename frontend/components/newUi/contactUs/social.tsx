import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const ContactUsSocial = () => {
  return (
    <div className="bg-gray-200">
      <div className="relative max-w-7xl mx-auto ">
        <div className="py-5">
          <Image
            src={"/GalleryNew/101.jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full md:w-10/12 mx-auto"
          />
        </div>
        <div className="px-5 h-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 py-8">
          <div className="bg-white rounded-lg px-2 lg:px-5">
            <h2 className="text-xl md:2xl lg:text-3xl font-extrabold text-teal-500 py-5 text-center">
              Phone#
            </h2>
            <hr className="bg-gray-400 h-[2px] w-full" />
            <div className="flex flex-col py-3">
              <span className=" flex gap-4 justify-center items-center text-lg md:text-xl lg:text-2xl font-extrabold text-teal-500 py-1 text-center">
                {" "}
                <FiPhoneCall /> <span>03000 11 11 11</span>
              </span>
              <p className="text-gray-500 text-sm text-center">
                Free from mobiles as part of inclusive minutes package.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl md:2xl font-medium text-gray-400 py-1 text-center">
                The Press:
              </p>
              <span className=" flex gap-4 justify-center items-center text-lg md:text-xl lg:text-2xl font-extrabold text-teal-500 py-1 text-center">
                {" "}
                <FiPhoneCall /> <span>03000 11 11 11</span>
              </span>
            </div>
            <div className="flex flex-col py-3">
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-400 text-center py-1">
                SMS Opt Out Options:
              </p>
              <h3 className="text-md font-bold text-teal-500 py-1 text-center">
                {" "}
                Text: HDTH to 88802
              </h3>
              <h3 className="text-md font-bold text-teal-500 py-1 text-center">
                {" "}
                Call: 03000 11 11 11
              </h3>
              <h3 className="text-md font-bold text-teal-500 py-1 text-center">
                {" "}
                Text: STOP to +447800005598
              </h3>
            </div>
            <div className="flex flex-col py-3">
              <p className="text-xl text-center uppercase font-medium text-gray-400 py-1">
                International
              </p>
              <h2 className="text-center text-md font-semibold text-teal-500 py-1">
                {" "}
                +44 1924 979 895
              </h2>
            </div>
          </div>
          <div className="bg-white rounded-lg px-2 lg:px-5 md:h-3/6 lg:h-4/6 pb-3 md:pb-0">
            <h2 className="text-xl md:2xl lg:text-3xl font-extrabold text-teal-500 py-5 text-center">
              Postal Address
            </h2>
            <hr className="bg-gray-400 h-[2px] w-full" />
            <div className="flex justify-center items-center pt-6  md:pt-16">
              <p className="text-gray-500 text-lg text-center">
                FGRF Campus FREEPOST Thornes Park Wakefield WF2 8QZ
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg px-2 lg:px-5 md:h-4/6 lg:h-5/6 pb-3 md:pb-0">
            <h2 className="text-xl md:2xl lg:text-3xl font-extrabold text-teal-500 py-5 text-center">
              Social Media
            </h2>
            <hr className="bg-gray-400 h-[2px] w-full" />
            <p className="text-gray-500 text-lg text-center pt-8">
              Keep updated with your donations in action, follow us on:
            </p>
            <div className="w-full h-full">
              <div className="mx-auto pt-8 w-10/12 grid place-items-center grid-cols-2 text-teal-500 gap-4">
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61550763330971"
                  }
                >
                  <RiFacebookFill className="hover:text-[#19afaf] w-10 h-10 lg:w-14 lg:h-14" />
                </Link>
                <FaTwitter className="w-10 h-10 lg:w-14 lg:h-14" />
                <FaLinkedin className="w-10 h-10 lg:w-14 lg:h-14" />
                <FaInstagram className="w-10 h-10 lg:w-14 lg:h-14" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSocial;
