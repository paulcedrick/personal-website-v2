"use client";

import Contents from "@/app/_components/contents";
import Footer from "@/app/_components/footer";
import MobileNavigation from "@/app/_components/mobile-navigation";
import Navigation from "@/app/_components/navigation";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Metadata } from "next";
import { useRef, useState } from "react";

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
    url: "https://paulartigo.com",
    siteName: "Paul Cedrick Artigo",
  },
  twitter: {
    title: "Paul Cedrick Artigo | Software Engineer",
    description: "Software Engineer based in the Philippines",
  },
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({
    container: containerRef,
  });
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsMobileNavigationOpen(latest > 480);
  });

  return (
    <main ref={containerRef} className="relative overflow-auto scrollbar-hide">
      <MobileNavigation isOpen={isMobileNavigationOpen} />
      <div className="mx-auto flex h-screen max-w-[1440px] flex-col justify-between gap-4 lg:flex-row">
        <div className="h-20 w-full bg-gradient-to-b from-[#111] to-transparent lg:fixed lg:left-0 lg:top-0 lg:z-10" />

        <div className="flex h-screen flex-col justify-between gap-10 px-6 py-8 lg:fixed lg:max-w-[400px] lg:py-10 xl:max-w-[496px] xl:px-10 xl:py-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold xl:text-6xl">Paul Artigo</h1>
              <h2 className="mt-[16px] text-xl font-semibold text-[#eee] xl:text-xl">
                Software Engineer @ Twoconnect
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-sm xl:mt-10">
                <p className="text-[#999]">
                  I&apos;m a software engineer based in the Philippines. I work
                  not just in frontend but also backend including designing the
                  infrastructure. Despite my current role, I consider myself as
                  a{" "}
                  <a
                    href="https://posthog.com/blog/product-engineer-vs-software-engineer"
                    target="_blank"
                    className="text-[#eee] underline hover:text-[#fff]"
                  >
                    Product Engineer
                  </a>
                  .
                </p>
                <p className="text-[#999]">
                  I&apos;m a software engineer with a passion for web
                  development. I tinker not just in frontend but also in
                  backend.
                </p>
              </div>
            </div>

            <Navigation />
          </div>

          <Footer />
        </div>

        <Contents />
        <div className="fixed bottom-0 left-0 z-10 h-20 w-full bg-gradient-to-t from-[#111] to-transparent" />
      </div>
    </main>
  );
}
