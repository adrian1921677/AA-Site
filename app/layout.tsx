import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import TerminalModal from "@/components/TerminalModal";
import CustomCursor from "@/components/shared/CustomCursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adrian Adullahu | Full Stack Developer",
  description: "Kreativer Full Stack Developer mit technischem Feingefühl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={outfit.variable} data-scroll-behavior="smooth">
      <body>
        <CustomCursor />
        <Navigation />
        <main className="min-h-screen pt-28">{children}</main>
        <Footer />
        <TerminalModal />
      </body>
    </html>
  );
}
