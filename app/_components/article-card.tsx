"use client";

import { FaArrowRight } from "react-icons/fa6";

type ArticleCardProps = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  href: string;
};

export default function ArticleCard({
  title,
  description,
  date,
  readTime,
  href,
}: ArticleCardProps) {
  return (
    <a
      href={href}
      className="group block transition-colors duration-200"
    >
      <article className="space-y-3">
        {/* Metadata */}
        <p className="text-xs text-text-muted">
          {date} · {readTime}
        </p>

        {/* Title with arrow */}
        <h3 className="text-text-primary font-medium group-hover:text-accent transition-colors duration-200 flex items-center gap-2">
          {title}
          <FaArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed">
          {description}
        </p>
      </article>
    </a>
  );
}
