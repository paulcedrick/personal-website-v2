"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogHeader() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle/50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-serif text-lg text-text-primary hover:text-accent transition-colors duration-200"
          >
            PA
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/#writing"
              className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              Writing
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
