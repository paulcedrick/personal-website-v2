import { Providers } from "@/app/_components/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${inter.className} text-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
