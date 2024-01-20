"use client";
import { useEffect, useState } from "react";
import { checkout } from "./checkOut";
import MyPayPalButton from "./paypalBtn";
interface PaymentProps {
  dollarDonate: number;
  titleDonate: string;
}
const PaymentSec: React.FC<PaymentProps> = ({ dollarDonate, titleDonate }) => {
  // new Code
  const [loader, setLoader] = useState(true);
  // Clinet iD paypal
  // AcKA0k1CSwjth14RN9FK5uDUmvGA8Jcv7yEfb024RnoMfJjCzT2wpYDtqKA7kD6YpHzjQW0lwn4TE-Fg
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold text-[#19afaf] text-center uppercase">
          payment
        </h2>
        <p className="text-gray-700 text-base py-4 text-center">
          Your Monthly Donation : ${dollarDonate}.00
        </p>
        <p className="bg-gray-300 h-[2px] w-full"></p>
        <div className="py-2 flex justify-between">
          <p className="text-gray-700 text-base">{titleDonate}</p>
          <p className="text-gray-700 text-base">{dollarDonate}</p>
        </div>
        <p className="bg-gray-300 h-[2px]  w-full"></p>
        <div className="flex justify-center pt-8">
          {/* <button
            onClick={() => {
              checkout({
                lineItems: [
                  { price: "price_1OaY8LDryADxr33F2K8QWk6q", quantity: 1 },
                ],
              });
            }}
            className="uppercase font-bold text-white py-2 px-4 bg-red-600 hover:bg-red-400"
          >
            Donate now
          </button> */}
          {/* Stripe Code */}
          <a
            href="https://donate.stripe.com/test_5kA9Clf89bbgfCw289"
            className="font-bold rounded-2xl text-white py-2 px-4 bg-red-600 hover:bg-red-400 mr-4"
          >
            Donate With Stripe
          </a>
          {/* Today Code paypal Button*/}

          <MyPayPalButton amount={dollarDonate} currency="USD" />

          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default PaymentSec;
