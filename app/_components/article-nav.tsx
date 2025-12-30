"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import type { Article } from "@/app/_lib/blog";

type ArticleNavProps = {
  previous: Article | null;
  next: Article | null;
};

export default function ArticleNav({ previous, next }: ArticleNavProps) {
  if (!previous && !next) return null;

  return (
    <motion.nav
      className="mt-16 pt-8 border-t border-border-subtle"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <div className="flex justify-between gap-8">
        {previous ? (
          <Link
            href={`/blog/${previous.slug}`}
            className="group flex-1 max-w-[50%]"
          >
            <span className="text-xs text-text-muted flex items-center gap-2 mb-2">
              <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-200" />
              Previous
            </span>
            <p className="text-text-secondary group-hover:text-accent transition-colors duration-200 text-sm line-clamp-2">
              {previous.frontmatter.title}
            </p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="group flex-1 max-w-[50%] text-right"
          >
            <span className="text-xs text-text-muted flex items-center gap-2 justify-end mb-2">
              Next
              <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            <p className="text-text-secondary group-hover:text-accent transition-colors duration-200 text-sm line-clamp-2">
              {next.frontmatter.title}
            </p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </motion.nav>
  );
}
