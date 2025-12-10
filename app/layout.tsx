import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Wintouch Academy | NEET & Integrated +1/+2 for Girls",
  description:
    "A premier girls-only residential academy combining academic excellence with Islamic values, horse training, and holistic development.",
  icons: {
    icon: "/logo_ic.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jakarta.variable} bg-[#FFFBF0] text-[#2D1B2E] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
