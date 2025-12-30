import { Providers } from "@/app/_components/providers";
import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paul Cedrick Artigo | Software Engineer",
  description: "Software Engineer based in the Philippines",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Paul Cedrick Artigo | Software Engineer",
    description: "Software Engineer based in the Philippines",
    url: "https://paulcedrick.com",
    siteName: "Paul Cedrick Artigo",
  },
  twitter: {
    title: "Paul Cedrick Artigo | Software Engineer",
    description: "Software Engineer based in the Philippines",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${inter.variable}`}>
      <body className="font-sans text-text-primary bg-bg-primary grain">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
