"use client";

import { SectionTrackerProvider } from "@/app/_components/section-tracker";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <SectionTrackerProvider>{children}</SectionTrackerProvider>;
};
