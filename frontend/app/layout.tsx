import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
