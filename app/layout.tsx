import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import CookieConsent from "@/components/CookieConsent";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "B2B Lead Generation Solutions to Drive Business Growth | PMG B2B",
  description: "Struggling to generate quality leads? Our B2B lead generation solutions help you attract qualified leads, increase conversions, and drive sustainable growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", poppins.variable)}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgressBar />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
