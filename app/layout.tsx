import "./globals.css";
import type { Metadata } from "next";
import { Inter,  Poppins,  Ubuntu } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Damage Scan - Optimised Vehicle Inspections",
  description:
    "Advanced AI-powered vehicle inspection technology. Fully automatic, powered by AI for accurate damage detection and comprehensive reporting.",
  keywords:
    "car inspection, vehicle damage, AI inspection, automotive technology, damage detection",
};

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${poppins.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
