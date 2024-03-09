"use client";
import { useEffect, useState } from "react";
// import { checkout } from "./checkOut";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutButton from "./checkOut";
import MyPayPalButton from "./paypalBtn";
import GooglePayBtn from "./googlePayBtn";
import MyApplePayBtn from "./applePayBtn";
interface PaymentProps {
  dollarDonate: string;
  titleDonate: string;
}
const key: any = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const PaymentSec: React.FC<PaymentProps> = ({ dollarDonate, titleDonate }) => {
  const stripePromise = loadStripe(key);
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
          Your Monthly Donation : &#163;{dollarDonate}.00
        </p>
        <p className="bg-gray-300 h-[2px] w-full"></p>
        <div className="py-2 flex justify-between">
          <p className="text-gray-700 text-base">{titleDonate}</p>
          <p className="text-gray-700 text-base">£ {dollarDonate}</p>
        </div>
        <p className="bg-gray-300 h-[2px]  w-full"></p>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-5 md:gap-0 pt-8">
          {/* stripe today */}
          <div className="flex justify-center md:block">
            <CheckoutButton amount={dollarDonate} />
          </div>
          <div className="md:col-span-2">
            <MyPayPalButton amount={dollarDonate} currency="GBP" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <GooglePayBtn amount={dollarDonate} />
          <Elements stripe={stripePromise}>
            <MyApplePayBtn amount={dollarDonate} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentSec;
