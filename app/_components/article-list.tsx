"use client";

import { motion } from "framer-motion";
import ArticleCard from "./article-card";

type Article = {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  href: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function ArticleList({ articles }: { articles?: Article[] }) {
  const displayArticles = articles ?? [];

  if (displayArticles.length === 0) {
    return (
      <p className="text-text-muted text-sm">No articles published yet.</p>
    );
  }

  return (
    <motion.div
      className="flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {displayArticles.map((article) => (
        <motion.div
          key={article.id}
          variants={itemVariants}
          className="pb-8 border-b border-border-subtle last:border-b-0 last:pb-0"
        >
          <ArticleCard {...article} />
        </motion.div>
      ))}
    </motion.div>
  );
}
