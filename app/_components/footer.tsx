"use client";

import SocialLinks from "@/app/_components/social-links";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t border-border-subtle pt-12 pb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Social Links - Mobile only (desktop shows in sidebar) */}
        <div className="lg:hidden">
          <SocialLinks />
        </div>

        {/* Copyright - Always visible */}
        <p className="text-xs text-text-muted">
          &copy; {currentYear} Paul Artigo
        </p>
      </div>
    </motion.footer>
  );
}
