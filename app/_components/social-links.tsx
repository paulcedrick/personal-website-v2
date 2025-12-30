"use client";

import { FaGithub, FaLinkedin, FaThreads, FaXTwitter } from "react-icons/fa6";

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/paulcedrick",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/paul-cedrick-artigo-227644a1/",
    icon: FaLinkedin,
  },
  {
    name: "X",
    href: "https://x.com/porukobayashi",
    icon: FaXTwitter,
  },
  {
    name: "Threads",
    href: "https://www.threads.net/@iam.kyuuu",
    icon: FaThreads,
  },
];

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

export default function SocialLinks({
  className = "",
  iconClassName = "w-5 h-5",
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-accent transition-colors duration-200"
          aria-label={link.name}
        >
          <link.icon className={iconClassName} />
        </a>
      ))}
    </div>
  );
}
