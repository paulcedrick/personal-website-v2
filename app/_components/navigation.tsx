"use client";

import { useSectionTracker } from "@/app/_components/section-tracker";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type NavItemProps = {
  number: string;
  url: string;
  children: ReactNode;
  isSelected?: boolean;
  onClick?: (ev: React.MouseEvent<HTMLAnchorElement>) => void;
};
function NavItem(props: NavItemProps) {
  return (
    <li className="text-xs">
      <a
        className={twMerge(
          "group inline-flex items-center gap-2 text-[#aaa] hover:text-[#ddd]",
          props.isSelected ? "text-[#ddd]" : "",
        )}
        href={`${props.url}`}
        onClick={props.onClick}
      >
        <span className="tracking-wide">{props.number}</span>
        <span
          className={twMerge(
            "h-px w-16 bg-[#aaa] transition-all duration-500 ease-in-out group-hover:w-24 group-hover:bg-[#ddd]",
            props.isSelected ? "w-24 bg-[#ddd]" : "",
          )}
        ></span>
        <span>{props.children}</span>
      </a>
    </li>
  );
}

function Navigation() {
  const { currentSection, sectionRefs } = useSectionTracker();

  return (
    <nav className="hidden lg:block">
      <ul className="flex flex-col gap-4">
        <NavItem
          number="01"
          url="#experiences"
          isSelected={currentSection === "Experiences"}
          onClick={(ev) => {
            ev.preventDefault();
            sectionRefs.experiences.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Experiences
        </NavItem>
        <NavItem
          number="02"
          url="#contact"
          isSelected={currentSection === "Contact"}
          onClick={(ev) => {
            ev.preventDefault();
            sectionRefs.contact.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Keep in touch
        </NavItem>
      </ul>
    </nav>
  );
}

export default Navigation;
