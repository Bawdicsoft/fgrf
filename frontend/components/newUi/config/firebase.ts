import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "fgrf-dc455.firebaseapp.com",
  projectId: "fgrf-dc455",
  storageBucket: "fgrf-dc455.appspot.com",
  messagingSenderId: "888051572078",
  appId: "1:888051572078:web:8bdc54d2fe7ab74953b57f",
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
