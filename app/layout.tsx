import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/footer";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}