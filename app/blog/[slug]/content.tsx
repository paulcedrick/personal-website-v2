"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import ArticleNav from "@/app/_components/article-nav";
import Footer from "@/app/_components/footer";
import type { Article } from "@/app/_lib/blog";
import { ReactNode } from "react";

type BlogPostContentProps = {
  title: string;
  date: string;
  readTime: string;
  tags?: string[];
  content: ReactNode;
  previous: Article | null;
  next: Article | null;
};

export default function BlogPostContent({
  title,
  date,
  readTime,
  tags,
  content,
  previous,
  next,
}: BlogPostContentProps) {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-8">
      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href="/#writing"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors duration-200 mb-12"
        >
          <FaArrowLeft className="w-3 h-3" />
          Back to home
        </Link>
      </motion.div>

      {/* Article Header */}
      <header className="mb-8">
        <motion.p
          className="text-xs text-text-muted mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {date} · {readTime}
        </motion.p>

        <motion.h1
          className="font-serif text-heading-1 text-text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>
      </header>

      {/* Author Section */}
      <motion.div
        className="flex items-center gap-4 py-6 border-y border-border-subtle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="w-10 h-10 rounded-full bg-bg-elevated flex items-center justify-center text-accent font-serif text-sm border border-border-subtle">
          PA
        </div>

        <div>
          <p className="text-text-primary text-sm font-medium">Paul Artigo</p>
          <p className="text-text-muted text-xs">
            Software Engineer & Product Thinker
          </p>
        </div>
      </motion.div>

      {/* MDX Content */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {content}
      </motion.div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <motion.div
          className="mt-12 pt-8 border-t border-border-subtle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs text-text-muted bg-bg-elevated rounded-full border border-border-subtle"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Previous/Next Navigation */}
      <ArticleNav previous={previous} next={next} />

      {/* Footer */}
      <div className="mt-16">
        <Footer />
      </div>
    </article>
  );
}
