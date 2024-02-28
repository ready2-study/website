import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/additional/navbar/Navbar";
import Footer from "@/components/additional/footer/Footer";
import LanguageContext from "@/components/context/LanguageContext";

const ibm = IBM_Plex_Sans({
  weight: ["700", "400", "300"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ready2.Study",
  description: "Biggest exam questions database!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn("bg-primary text-secondary flex flex-col", ibm.className)}
      lang="en"
    >
      <body>
        <LanguageContext>
          <Navbar />
          <div className="mx-auto">{children}</div>
          <Footer />
        </LanguageContext>
      </body>
    </html>
  );
}
