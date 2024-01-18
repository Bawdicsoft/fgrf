import { FC, useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import DetailsSec from "./Details";
interface DonationSecProps {
  donationTitleArray: any[] | undefined;
  monthlyHandler: (data: string[]) => void;
}
const orphansDollarList1 = [
  "Higher Education Scholarship Fund - $30",
  "Orphan Medical Care - $30",
  "Orphan Sponsorship Programme - $70",
  "Family Sponsorship - $205",
];
const orphansDollarList2 = [
  "Higher Education Scholarship Fund - $25",
  "Orphan Medical Care - $25",
  "Orphan Sponsorship Programme - $60",
  "Family Sponsorship - $170",
];
const orphansDollarList3 = [
  "Higher Education Scholarship Fund - $25",
  "Orphan Medical Care - $25",
  "Orphan Sponsorship Programme - $65",
  "Family Sponsorship - $195",
];
const orphansOthersList = ["150", "100", "50", "others"];
const onOffList = ["200", "150", "100", "others"];

const DonationSec: React.FC<DonationSecProps> = ({
  donationTitleArray,
  monthlyHandler,
}) => {
  const [orphanDonationDollarArray, setOrphanDonationDollarArray] =
    useState<any[]>();
  const [otherBtnDollar, seOtherBtnDollar] = useState<any[]>();
  const [btnDollar, setBtnDollar] = useState<Boolean>(false);
  const [input, setInput] = useState<Boolean>(false);
  const [dollar, setDollar] = useState<number>(100);
  const [dollarDonate, setDollarDonate] = useState<number>(100);
  const [titleDonate, setTitleDonate] = useState<string>("");
  const [orphanData, setOrphanData] = useState<Boolean>(true);
  const [donateAmountText, setDonateAmountText] = useState<Boolean>(false);
  const [nextStep, setNextStep] = useState<Boolean>(false);
  const [alertText, setAlertText] = useState<Boolean>(false);
  const [bgBtnIndex, setBgBtnIndex] = useState<number>(1);
  const [bgFundIndex, setbgFundIndex] = useState<number>();

  const orphanDollarHandler = (data: any[]) => {
    setOrphanDonationDollarArray(data);
  };

  const nextHandler = () => {
    if (titleDonate) {
      setNextStep(true);
    } else {
      setAlertText(true);
      setNextStep(false);
    }
  };
  const backHandler = () => {
    if (nextStep) {
      setNextStep(false);
    } else {
      monthlyHandler([]);
    }
  };
  return (
    <div>
      {!nextStep ? (
        <div className="flex flex-col justify-center">
          <h2 className="text-sky-800 font-bold text-xl py-5 uppercase self-start">
            Select Your Fund
          </h2>
          {alertText && (
            <p className="text-red-600 text-md text-center py-2">
              You must select a fund and specify an amount.
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {donationTitleArray?.map((title, index) =>
              title === "Orphans" && index === 0 ? (
                <button
                  key={index}
                  onClick={() => {
                    orphanDollarHandler(orphansDollarList1);
                    setOrphanData(true);
                    setDonateAmountText(true);
                    setBtnDollar(false);
                    setTitleDonate(title);
                    setAlertText(false);
                    setbgFundIndex(index);
                  }}
                  className={` py-3 font-medium text-gray-800 focus:bg-[#19afaf] focus:text-white px-4 hover:bg-[#19afaf] hover:text-white ${
                    bgFundIndex === index
                      ? "bg-[#19afaf] text-white"
                      : "bg-white"
                  }`}
                >
                  {title}
                </button>
              ) : (title === "Sadaqah" && index === 1) ||
                (title === "Water For Life" && index === 2) ||
                (title === "Global Emergencies" && index === 3) ? (
                <button
                  key={index}
                  onClick={() => {
                    setOrphanData(false);
                    setDonateAmountText(true);
                    seOtherBtnDollar(orphansOthersList);
                    setBtnDollar(true);
                    setInput(false);
                    setTitleDonate(title);
                    setAlertText(false);
                    setbgFundIndex(index);
                  }}
                  className={` py-3 font-medium text-gray-800 focus:bg-[#19afaf] focus:text-white px-4 hover:bg-[#19afaf] hover:text-white ${
                    bgFundIndex === index
                      ? "bg-[#19afaf] text-white"
                      : "bg-white"
                  }`}
                >
                  {title}
                </button>
              ) : (
                <button
                  key={index}
                  onClick={() => {
                    setOrphanData(false);
                    setDonateAmountText(true);
                    seOtherBtnDollar(onOffList);
                    setBtnDollar(true);
                    setInput(false);
                    setTitleDonate(title);
                    setAlertText(false);
                    setbgFundIndex(index);
                  }}
                  className={`py-3 font-medium text-gray-800 focus:bg-[#19afaf] focus:text-white px-4 hover:bg-[#19afaf] hover:text-white ${
                    bgFundIndex === index
                      ? "bg-[#19afaf] text-white"
                      : "bg-white"
                  }`}
                >
                  {title}
                </button>
              )
            )}
          </div>

          {donateAmountText && (
            <div className="grid grid-cols-1  gap-5">
              <span className="text-sky-800 font-bold text-xl pt-8 px-8 uppercase self-start">
                DONATION AMOUNT
              </span>
              {orphanData ? (
                <span className={`flex justify-center gap-3 `}>
                  <button
                    className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400"
                    onClick={() => {
                      orphanDollarHandler(orphansDollarList1);
                    }}
                  >
                    USD
                  </button>
                  <button
                    onClick={() => {
                      orphanDollarHandler(orphansDollarList2);
                    }}
                    className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400"
                  >
                    GBP
                  </button>
                  <button
                    onClick={() => {
                      orphanDollarHandler(orphansDollarList3);
                    }}
                    className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400"
                  >
                    {" "}
                    EUR
                  </button>
                </span>
              ) : (
                <div>
                  <span className={`flex justify-center gap-3 `}>
                    <button
                      className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400"
                      onClick={() => {
                        //   orphanDollarHandler(orphansDollarList1);
                      }}
                    >
                      USD
                    </button>
                    <button
                      onClick={() => {
                        //   orphanDollarHandler(orphansDollarList2);
                      }}
                      className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400"
                    >
                      GBP
                    </button>
                    <button
                      onClick={() => {
                        //   orphanDollarHandler(orphansDollarList3);
                      }}
                      className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400"
                    >
                      {" "}
                      EUR
                    </button>
                  </span>
                  {btnDollar && (
                    <div className="flex flex-col gap-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
                        {otherBtnDollar?.map((title, index) =>
                          title === "others" ? (
                            <button
                              key={index}
                              onClick={() => {
                                setInput(true);
                                setBgBtnIndex(index);
                              }}
                              className={`text-3xl text-gray-500 focus:bg-[#19afaf] bg-white focus:text-white font-semibold py-3 px-5  hover:bg-[#19afaf] hover:text-white `}
                            >
                              {title}
                            </button>
                          ) : (
                            <button
                              key={index}
                              onClick={() => {
                                setDollar(title);
                                setDollarDonate(title);
                                setInput(false);
                                setBgBtnIndex(index);
                              }}
                              className={`text-3xl text-gray-500 focus:bg-[#19afaf]  focus:text-white font-semibold py-3 px-5  hover:bg-[#19afaf] hover:text-white ${
                                bgBtnIndex === index
                                  ? "bg-[#19afaf] text-white"
                                  : "bg-white"
                              } `}
                            >
                              {title}
                            </button>
                          )
                        )}
                      </div>
                      {input && (
                        <input
                          type="text"
                          className="h-10 focus:ring-2  rounded  focus:outline-none ring-[#19afaf] focus:ring-[#19afaf]"
                        />
                      )}
                      <p className="text-gray-400 text-lg font-medium text-center">
                        Making a donation of {dollar} will help save lives
                      </p>
                    </div>
                  )}
                </div>
              )}
              {/* <span
                className={`flex justify-center gap-3 `}
              >
                <button className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400">
                  USD
                </button>
                <button className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400">
                  GBP
                </button>
                <button className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400">
                  {" "}
                  EUR
                </button>
              </span> */}

              {orphanData && (
                <div>
                  <div className={` "grid grid-cols-4 gap-2" `}>
                    {orphanDonationDollarArray?.map(
                      (title, index) => (
                        <div key={index}>
                          <div className="flex  border p-4 gap-16 justify-between">
                            <span className="text-lg  font-semibold">
                              {title}
                            </span>
                            <div className="flex flex-col gap-3">
                              <div className="flex gap-8">
                                <p>Quantity</p>
                                <input
                                  type="number"
                                  className="h-8 focus:ring-2  rounded  focus:outline-none focus:ring-[#19afaf]"
                                />
                              </div>
                              <div className="flex gap-8">
                                <p>SubTotal</p>
                                <input
                                  type="number"
                                  className="h-8 focus:ring-2 rounded bg-gray-200 focus:outline-none focus:ring-[#19afaf] focus:shadow-2xl shadow-[#19afaf]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                      //  : title === "others" ? (
                      //   <button
                      //     key={index}
                      //     onClick={() => {}}
                      //     className="uppercase text-3xl text-gray-500 focus:bg-[#19afaf] focus:text-white font-semibold py-3 px-5 bg-white hover:bg-[#19afaf] hover:text-white"
                      //   >
                      //     {title}
                      //   </button>
                      // ) : (
                      //   <button
                      //     key={index}
                      //     onClick={() => {}}
                      //     className={`text-3xl text-gray-500 focus:bg-[#19afaf] focus:text-white font-semibold py-3 px-5 bg-white hover:bg-[#19afaf] hover:text-white`}
                      //   >
                      //     {title}
                      //   </button>
                    )}
                  </div>
                  <p className="text-red-600 font-bold text-3xl pt-5">
                    Total: $0.00
                  </p>
                </div>
              )}

              {/* <input
                type="text"
                className="h-10 focus:ring-2  rounded  focus:outline-none ring-[#19afaf] focus:ring-[#19afaf]"
              />
              <p className="text-red-600 font-bold text-3xl">Total: $0.00</p>
              <div className="flex items-center flex-col">
                <p className="text-gray-400 text-lg font-medium text-center">
                  Making a donation of 40 will help save lives
                </p>
                
                  <button className="max-w-[200px] rounded hover:bg-[#2dc2c2] uppercase py-2 px-5 mt-1 bg-[#19afaf] text-white font-bold text-xl">
                    Add to cart
                  </button>
          
              </div> */}
            </div>
          )}
        </div>
      ) : (
        <DetailsSec dollarDonate={dollarDonate} titleDonate={titleDonate} />
      )}
      <div className="py-10 flex justify-between">
        <button
          onClick={() => {
            backHandler();
          }}
          className="uppercase hover:bg-gray-200  py-2 px-4 text-2xl font-bold text-gray-400 bg-white flex gap-2 items-center justify-center"
        >
          <FaRegArrowAltCircleLeft className="w-6 h-6" />
          <span> Back</span>
        </button>
        <button
          onClick={() => {
            nextHandler();
          }}
          className=" uppercase hover:bg-[#2dc2c2]  py-2 px-4 text-2xl font-bold text-white bg-[#19afaf] flex gap-2 items-center justify-center"
        >
          <span> Next </span>
          <FaRegArrowAltCircleRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default DonationSec;
