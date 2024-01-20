import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";

const MyPayPalButton = ({ amount, currency }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AcKA0k1CSwjth14RN9FK5uDUmvGA8Jcv7yEfb024RnoMfJjCzT2wpYDtqKA7kD6YpHzjQW0lwn4TE-Fg",
      }}
    >
      <PayPalButtons
        style={{
          layout: "horizontal",
          color: "gold",
          shape: "pill",
          label: "paypal",
          // height: 40,
          // width: "200px",
          // fontSize: "16px",
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                  currency_code: currency,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            console.log(details);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default MyPayPalButton;

// type script
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import React from "react";

// interface PayPalOptions {
//   "client-id": string;
// }

// interface MyPayPalButtonProps {
//   amount: number;
//   currency: string;
//   paypalOptions: PayPalOptions;
// }

// const MyPayPalButton: React.FC<MyPayPalButtonProps> = ({
//   amount,
//   currency,
//   paypalOptions,
// }) => {
//   return (
//     <PayPalScriptProvider
//       options={{ ...paypalOptions, "data-client-token": "YOUR_CLIENT_TOKEN" }}
//     >
//       <PayPalButtons
//         style={{ layout: "horizontal" }}
//         createOrder={(data, actions) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: amount,
//                   currency_code: currency,
//                 },
//               },
//             ],
//           });
//         }}
//         onApprove={(data, actions) => {
//           return actions.order.capture().then((details) => {
//             console.log(details);
//           });
//         }}
//       />
//     </PayPalScriptProvider>
//   );
// };

// export default MyPayPalButton;
