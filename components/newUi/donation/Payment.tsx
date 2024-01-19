import { useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
interface PaymentProps {
  dollarDonate: number;
  titleDonate: string;
}
const PaymentSec: React.FC<PaymentProps> = ({ dollarDonate, titleDonate }) => {
  // new Code
  const [scriptLoaded, setScriptLoaded] = useState(false);
  // Clinet iD paypal
  // AcKA0k1CSwjth14RN9FK5uDUmvGA8Jcv7yEfb024RnoMfJjCzT2wpYDtqKA7kD6YpHzjQW0lwn4TE-Fg
  const addPaypalScript = () => {
    // if (window.paypal) {
    //   setScriptLoaded(true);
    //   return;
    // }
    const script = document.createElement("script");
    script.src =
      // "https://www.paypal.com/sdk/js?client-id=AcKA0k1CSwjth14RN9FK5uDUmvGA8Jcv7yEfb024RnoMfJjCzT2wpYDtqKA7kD6YpHzjQW0lwn4TE-Fg";
      script.type = "text/javascript";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  };
  useEffect(() => {
    addPaypalScript();
  }, []);

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
          {/* <button className="uppercase font-bold text-white py-2 px-4 bg-red-600 hover:bg-red-400">
            Donate now
          </button> */}
          {scriptLoaded ? (
            <PayPalButton
              amount={dollarDonate}
              onSuccess={(details: any) => {
                console.log(details);
              }}
            />
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentSec;
