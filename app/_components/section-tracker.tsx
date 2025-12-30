"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type SectionRefs = {
  experiences: React.RefObject<HTMLDivElement | null>;
  writing: React.RefObject<HTMLDivElement | null>;
  projects: React.RefObject<HTMLDivElement | null>;
  contact: React.RefObject<HTMLDivElement | null>;
};

type SectionName = "Experiences" | "Writing" | "Projects" | "Contact";

export const SectionTracker = createContext<{
  currentSection: string[];
  setCurrentSection: (section: string[]) => void;
  sectionRefs: SectionRefs;
  isAtBottom: boolean;
} | null>(null);

export const SectionTrackerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentSection, setCurrentSection] = useState<string[]>([]);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const writingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs: SectionRefs = {
    experiences: experiencesRef,
    writing: writingRef,
    projects: projectsRef,
    contact: contactRef,
  };

  // Detect when user scrolls to the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const threshold = 50; // pixels from bottom

      setIsAtBottom(scrollTop + windowHeight >= documentHeight - threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionMapping: { ref: React.RefObject<HTMLDivElement | null>; name: SectionName }[] = [
      { ref: experiencesRef, name: "Experiences" },
      { ref: writingRef, name: "Writing" },
      { ref: projectsRef, name: "Projects" },
      { ref: contactRef, name: "Contact" },
    ];

    // Early return if refs aren't populated yet
    const hasRefs = sectionMapping.some((s) => s.ref.current !== null);
    if (!hasRefs) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setCurrentSection((prev) => {
          let updated = [...prev];

          entries.forEach((entry) => {
            const section = sectionMapping.find(
              (s) => s.ref.current === entry.target
            );
            if (!section) return;

            if (entry.isIntersecting) {
              if (!updated.includes(section.name)) {
                updated.push(section.name);
              }
            } else {
              updated = updated.filter((s) => s !== section.name);
            }
          });

          return updated;
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionMapping.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  });

  return (
    <SectionTracker.Provider
      value={{ currentSection, setCurrentSection, sectionRefs, isAtBottom }}
    >
      {children}
    </SectionTracker.Provider>
  );
};

export const useSectionTracker = () => {
  const context = useContext(SectionTracker);
  if (!context) {
    throw new Error(
      "useSectionTracker must be used within a SectionTrackerProvider"
    );
  }

  const currentSection = useMemo(() => {
    // If at the bottom of the page, always highlight Contact
    if (context.isAtBottom) {
      return "Contact";
    }

    const length = context.currentSection.length;

    if (length === 0) {
      return "";
    }

    return context.currentSection[length - 1];
  }, [context.currentSection, context.isAtBottom]);

  return { ...context, currentSection };
};
