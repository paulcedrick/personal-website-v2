import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

export const SectionTracker = createContext<{
  currentSection: string[];
  setCurrentSection: (section: string[]) => void;
  sectionRefs: {
    experiences: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
} | null>(null);

export const SectionTrackerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentSection, setCurrentSection] = useState<string[]>([]);
  const sectionRefs = {
    experiences: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  return (
    <SectionTracker.Provider
      value={{ currentSection, setCurrentSection, sectionRefs }}
    >
      {children}
    </SectionTracker.Provider>
  );
};

export const useSectionTracker = () => {
  const context = useContext(SectionTracker);
  if (!context) {
    throw new Error(
      "useSectionTracker must be used within a SectionTrackerProvider",
    );
  }

  const currentSection = useMemo(() => {
    const length = context.currentSection.length;

    if (length === 0) {
      return "";
    }

    return context.currentSection[length - 1];
  }, [context.currentSection]);

  const onSectionVisible = useCallback(
    (section: string) => {
      const isInCurrentSection = context.currentSection.includes(section);

      if (isInCurrentSection) {
        return;
      }

      return context.setCurrentSection([...context.currentSection, section]);
    },
    [context],
  );

  const onSectionLeave = useCallback(
    (section: string) => {
      const isInCurrentSection = context.currentSection.includes(section);

      if (!isInCurrentSection) {
        return;
      }

      return context.setCurrentSection(
        context.currentSection.filter((s) => s !== section),
      );
    },
    [context],
  );

  return { ...context, currentSection, onSectionVisible, onSectionLeave };
};
