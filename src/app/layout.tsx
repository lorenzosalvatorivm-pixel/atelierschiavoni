import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Atelier Michele Schiavoni Architetti",
    template: "%s | Atelier Michele Schiavoni Architetti",
  },
  description:
    "Studio di architettura specializzato in progettazione residenziale, commerciale e restauro. Architettura che dialoga con il luogo.",
  keywords: [
    "architettura",
    "studio architetti",
    "Michele Schiavoni",
    "progettazione",
    "restauro",
    "interior design",
  ],
  openGraph: {
    title: "Atelier Michele Schiavoni Architetti",
    description: "Architettura che dialoga con il luogo",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
