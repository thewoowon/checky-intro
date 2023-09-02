import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";
import Script from "next/script";
import Footer from "../components/Footer";

let title = "Checky";
let description = "Checky is a chrome extension for summarizing text.";
let ogimage = "http://checky.im/checky-icon-bg.png";
let sitename = "checky.im";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "http://checky.im",
    siteName: sitename,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#ffffff] text-white">
        {children}
        <Analytics />
        <Footer />
      </body>
      <Script src="../path/to/flowbite/dist/flowbite.min.js" />
    </html>
  );
}
