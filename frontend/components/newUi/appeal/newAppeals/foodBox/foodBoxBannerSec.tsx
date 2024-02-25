"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { use, useState } from "react";
const FoodBoxBannerSection = () => {
  const [docs, setDocs] = useState(0);
  const oneOffBtnList = [
    { title: "50", doc: "Could provide food supplies for Palestinians." },
    {
      title: "100",
      doc: "Could help provide a range of medical consumables to support the injured.",
    },

    {
      title: "200",
      doc: "Could provide critical medical supplies to aid the injured.",
    },
    {
      title: "300",
      doc: "Could provide 50 Palestinians with 6 nutritious food packs each.",
    },
    {
      title: "900",
      doc: "Could provide 9 x Medical Consumables Packs of life-critical medicine to over 100 Palestinians.",
    },
    {
      title: "1500",
      doc: "Could provide 15 x Medical Consumables Packs of life-critical medicine to over 100 Palestinians.",
    },
    {
      title: "3000",
      doc: "Could provide 15 x Critical Medical Packs to provide emergency medical assistance for over 100 Palestinians.",
    },
  ];
  const monthBtnList = [
    {
      title: "9",
      doc: "Could provide 2 x life-saving Food Packs of nutritious meals to over 15 Palestinians.",
    },
    {
      title: "25",
      doc: "Could provide 6 x life-saving Food Packs of nutritious meals to over 50 Palestinians.",
    },
    {
      title: "75",
      doc: "Could provide 9 x Medical Consumables Packs of life-critical medicine to over 100 Palestinians.",
    },
    {
      title: "125",
      doc: "Could provide 15 x Medical Consumables Packs of life-critical medicine to over 100 Palestinians.",
    },
    {
      title: "250",
      doc: "Could provide 15 x Critical Medical Packs to provide emergency medical assistance for over 100 Palestinians.",
    },
  ];

  const [packeges, setPackeges] = useState(oneOffBtnList);
  const [bgColor, setBgColor] = useState(true);
  const [bgBtn, setbgBtn] = useState(0);

  return (
    <div className="pt-10 lg:pt-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center rounded-t-xl border-t-2 border-l-2 border-r-2 border-b-0 border-sky-600 pb-8 ">
          <p className="text-center bg-sky-700 rounded-b-2xl  text-xl lg:text-2xl text-white font-semibold py-2 px-8">
            Food Box
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:gap-3 lg:gap-14 md:grid-cols-2 px-5">
        <div className="border-4 border-sky-600 rounded-xl shadow-gray-700 shadow-2xl">
          <Image
            src={"/AppealNew/food/foodBox3.jpeg"}
            alt="winter img1"
            className="w-full h-full rounded-lg"
            width={600}
            height={600}
          />
        </div>
        <div className="border-4 border-sky-600 rounded-xl shadow-gray-700 shadow-2xl ">
          {/* <video className="h-full w-full rounded-lg" controls>
            <source src="/Videonews/4.mp4" type="video/mp4" />
          </video> */}
          <Image
            src={"/AppealNew/food/foodbox5.jpeg"}
            alt="winter img1"
            className="w-full h-full rounded-lg"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="bg-gray-300 shadow-2xl mt-10 flex flex-col gap-2 max-w-3xl mx-auto rounded-lg">
        {/* <h3 className=" text-2xl md:text-3xl text-gray-800">
          Winter Emergency
        </h3> */}
        {/* <span className="w-full h-[2px] bg-teal-500"></span> */}
        <div className="flex justify-center gap-5">
          <button
            className={
              bgColor
                ? `py-2 px-5 bg-teal-500 text-white text-lg rounded-b-3xl relative overflow-hidden group`
                : `bg-sky-800 text-white rounded-b-3xl py-2 text-lg px-5  relative overflow-hidden group`
            }
            onClick={() => {
              setPackeges(oneOffBtnList);
              setDocs(0);
              setbgBtn(0);
              setBgColor(true);
            }}
          >
            <span className="absolute w-40 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-100 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative group-hover:text-teal-500">One Off</span>
          </button>
          <button
            className={
              !bgColor
                ? `py-2 px-5 bg-teal-500 text-white text-lg rounded-b-3xl relative overflow-hidden group`
                : `bg-sky-800 text-white py-2 px-5 rounded-b-3xl text-lg relative overflow-hidden group`
            }
            onClick={() => {
              setPackeges(monthBtnList);
              setDocs(0);
              setbgBtn(0);
              setBgColor(false);
            }}
          >
            <span className="absolute w-40 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-100 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative group-hover:text-teal-500">Monthly</span>
          </button>
        </div>
        <div className="flex flex-col  py-4 px-3 lg:px-5">
          <select className="w-60 md:w-96 self-center text-teal-500 font-bold outline-none focus:outline-none border-2 border-teal-500 rounded-xl px-2 py-2">
            Food Box
            <option className="text-md " value={"Palestine"}>
              Food Box
            </option>
          </select>
          {/* <p className="text-base lg:text-lg py-4">{packeges[docs].doc}</p> */}
          <div className="md:mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-2 md:pr-0 pt-4 lg:pr-8 pb-3">
              {packeges.map((btn, index) => (
                <button
                  key={index}
                  className={
                    index === bgBtn
                      ? `border-0 border-white  text-white shadow-2xl bg-teal-500 py-1 px-2 rounded-xl text-xl font-semibold relative overflow-hidden group`
                      : `border-2 border-white hover:border-teal-500 text-teal-500  py-1 px-2 rounded-xl font-semibold text-xl relative overflow-hidden group`
                  }
                  onClick={() => {
                    setDocs(index);
                    setbgBtn(index);
                  }}
                >
                  <span className="absolute w-40 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-16 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative group-hover:text-teal-500">
                    £{btn.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <input
            type="number"
            placeholder="Other Amount"
            className=" md:w-96 self-center text-teal-500 font-bold outline-none border-2 border-teal-500 rounded-xl p-4 py-2 "
          />
          <p className=" self-center text-sm text-center pt-4">
            Your donations will go to this appeals general fund, so your
            generosity can help where its needed most!
          </p>
          <div className="flex justify-center">
            <Link href={"/donation"}>
              <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                  <span className="relative group-hover:text-white">
                    Add to Basket
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FoodBoxBannerSection;
