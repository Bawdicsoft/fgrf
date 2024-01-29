import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import React from "react";

const MyPayPalButton = ({ amount, currency }) => {
  const router = useRouter();
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.NEXT_PUBLIC_PAY_PALL_CLIENT_KEY,
      }}
    >
      <PayPalButtons
        style={{
          layout: "horizontal",
          color: "gold",
          shape: "pill",
          label: "paypal",
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
            if (details.error) {
              router.push("/paypal-error");
            } else {
              router.push({
                pathname: `/paypal-success/${amount}`,
              });
            }
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default MyPayPalButton;
