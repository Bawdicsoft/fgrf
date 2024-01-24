// import { loadStripe } from "@stripe/stripe-js";
// export async function checkout({ lineItems }) {
//   let stripePromise = null;
//   let getStripe = () => {
//     if (!stripePromise) {
//       stripePromise = loadStripe(process.env.NEXT_PUBLIC_KEY);
//     }
//     return stripePromise;
//   };
//   const stripe = await getStripe();
//   await stripe.redirectToCheckout({
//     mode: "subscription",
//     lineItems,
//     successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
//     cancelUrl: window.location.origin,
//   });
// }

import { loadStripe } from "@stripe/stripe-js";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import axios from "axios";

const asyncStripe = loadStripe(process.env.NEXT_PUBLIC_KEY);

const CheckoutButton = ({ amount }) => {
  const router = useRouter();

  const handler = async () => {
    try {
      const stripe = await asyncStripe;
      const res = await fetch("http://localhost:8000/session", {
        method: "POST",
        body: JSON.stringify({
          amount,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const { sessionId } = await res.json();
      console.log(sessionId);

      const { error } = await stripe.redirectToCheckout({ sessionId });
      console.log(error);
      if (error) {
        // router.push("/error");
        console.log(error);
      }
    } catch (err) {
      console.log(err);
      // router.push("/error");
    }
  };

  return (
    <button
      onClick={handler}
      className="bg-blue-700 hover:bg-blue-800 duration-200 px-8 py-4 text-white"
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
