"use client";

import { useSectionTracker } from "@/app/_components/section-tracker";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const navItems = [
  { id: "experiences", label: "Experiences" },
  { id: "writing", label: "Writing" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export default function SidebarNav() {
  const { currentSection, sectionRefs } = useSectionTracker();

  const handleNavClick = (
    ev: React.MouseEvent<HTMLAnchorElement>,
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    ev.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex flex-col gap-3">
      {navItems.map((item) => {
        const isActive = currentSection === item.label;
        const ref = sectionRefs[item.id];

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(ev) => handleNavClick(ev, ref)}
            className="group relative pl-4 py-1"
          >
            {/* Active indicator line */}
            <motion.span
              className="absolute left-0 top-0 h-full w-0.5 bg-accent origin-top"
              initial={false}
              animate={{ scaleY: isActive ? 1 : 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />

            <span
              className={twMerge(
                "text-sm text-text-muted transition-colors duration-200 group-hover:text-text-primary",
                isActive && "text-accent"
              )}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
