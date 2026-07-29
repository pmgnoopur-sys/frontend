import type { Metadata } from "next";
import { Poppins, Geist, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import CookieConsent from "@/components/CookieConsent";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
      className={cn("h-full", "antialiased", poppins.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
