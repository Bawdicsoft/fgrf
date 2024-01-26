import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import axios from "axios";

const asyncStripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutButton = ({ amount }) => {
  const router = useRouter();
  const handler = async () => {
    try {
      const stripe = await asyncStripe;
      const response = axios.post("/api/stripe/checkout", { amount });
      console.log((await response).data);
      const { sessionId } = (await response).data;
      const { error } = await stripe.redirectToCheckout({ sessionId });
      console.log(error);
      if (error) {
        router.push("/payment-error");
      }
    } catch (err) {
      console.log(err);
      router.push("/payment-error");
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
