import { ReactNode } from "react";

type NavItemProps = {
  number: string;
  url: string;
  children: ReactNode;
};
function NavItem(props: NavItemProps) {
  return (
    <li className="text-xs">
      <a
        className="group inline-flex items-center gap-2 text-[#aaa] hover:text-[#ddd]"
        href={`${props.url}`}
      >
        <span className="tracking-wide">{props.number}</span>
        <span className="h-px w-16 bg-[#aaa] transition-all duration-500 ease-in-out group-hover:w-24 group-hover:bg-[#ddd]"></span>
        <span>{props.children}</span>
      </a>
    </li>
  );
}

function Navigation() {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        <NavItem number="01" url="#experiences">
          Experiences
        </NavItem>
        <NavItem number="02" url="#projects">
          Projects
        </NavItem>
        <NavItem number="03" url="#articles">
          Articles
        </NavItem>
        <NavItem number="04" url="#contact">
          Keep in touch
        </NavItem>
      </ul>
    </nav>
  );
}

export default Navigation;
