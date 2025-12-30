"use client";

import SidebarNav from "@/app/_components/sidebar-nav";
import SocialLinks from "@/app/_components/social-links";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Sidebar() {
  return (
    <motion.div
      className="flex flex-col gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Identity Section */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h1 className="font-serif text-heading-1 text-text-primary">
          Paul Artigo
        </h1>
        <p className="text-lg text-text-muted">Software Engineer</p>
        <p className="text-sm text-text-secondary max-w-[280px] leading-relaxed">
          I&apos;m a software engineer based in the Philippines. I work not
          just in frontend but also backend including designing the
          infrastructure. Despite my current role, I consider myself as a{" "}
          <a
            href="https://posthog.com/blog/product-engineer-vs-software-engineer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors duration-200 underline underline-offset-4"
          >
            Product Engineer
          </a>
          .
        </p>
      </motion.div>

      {/* Section Navigation */}
      <motion.div variants={itemVariants}>
        <SidebarNav />
      </motion.div>

      {/* Social Links */}
      <motion.div variants={itemVariants}>
        <SocialLinks iconClassName="w-5 h-5" />
      </motion.div>
    </motion.div>
  );
}
