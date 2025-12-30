"use client";

import { useSectionTracker } from "@/app/_components/section-tracker";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type NavItemProps = {
  href: string;
  isActive?: boolean;
  onClick?: (ev: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
};

function NavItem({ href, isActive, onClick, children }: NavItemProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={twMerge(
        "text-sm text-text-muted transition-colors duration-200 hover:text-text-primary",
        isActive && "text-accent"
      )}
    >
      {children}
    </a>
  );
}

export default function Navigation() {
  const { currentSection, sectionRefs } = useSectionTracker();

  const handleNavClick = (
    ev: React.MouseEvent<HTMLAnchorElement>,
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    ev.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle/50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home link */}
          <a
            href="#"
            onClick={(ev) => {
              ev.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-serif text-lg text-text-primary hover:text-accent transition-colors duration-200"
          >
            PA
          </a>

          {/* Nav links */}
          <div className="flex items-center gap-8">
            <NavItem
              href="#experiences"
              isActive={currentSection === "Experiences"}
              onClick={(ev) => handleNavClick(ev, sectionRefs.experiences)}
            >
              Experiences
            </NavItem>
            <NavItem
              href="#writing"
              isActive={currentSection === "Writing"}
              onClick={(ev) => handleNavClick(ev, sectionRefs.writing)}
            >
              Writing
            </NavItem>
            <NavItem
              href="#projects"
              isActive={currentSection === "Projects"}
              onClick={(ev) => handleNavClick(ev, sectionRefs.projects)}
            >
              Projects
            </NavItem>
            <NavItem
              href="#contact"
              isActive={currentSection === "Contact"}
              onClick={(ev) => handleNavClick(ev, sectionRefs.contact)}
            >
              Contact
            </NavItem>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
