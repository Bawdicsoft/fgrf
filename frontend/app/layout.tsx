import type { Metadata } from "next";
import "./globals.css";

// import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/newUi/navBar/Navbar";
import Footer from "@/components/newUi/Footer/Footer";
import Fgrflogo from "@/components/newUi/home/PermenantLogo";
// import Navbar from "@/components/navigation/Navbar";

export const metadata: Metadata = {
  title: "FGRF | Faizan Global Relief Foundation UK",
  description: "FGRF | Faizan Global Relief Foundation UK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* myCode */}
        {/* <Navbar /> */}
        <div>
          <Fgrflogo />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}