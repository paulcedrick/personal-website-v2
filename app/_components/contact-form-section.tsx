"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <motion.div
      className="py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="space-y-8">
        {/* Heading */}
        <h2 className="font-serif text-heading-1 text-text-primary">
          Let&apos;s work together
        </h2>

        {/* Description */}
        <p className="text-text-secondary leading-relaxed max-w-lg">
          Interested in collaborating or have a project you&apos;d like to
          discuss? I&apos;m always open to new opportunities and conversations.
        </p>

        {/* Links */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          <a
            href="mailto:paulcedrick.artigo@gmail.com"
            className="text-accent hover:text-accent-hover transition-colors duration-200 underline underline-offset-4"
          >
            paulcedrick.artigo@gmail.com
          </a>

          <a
            href="/cv-v2.pdf"
            download="Paul-Artigo-CV.pdf"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors duration-200"
          >
            Download CV
            <FaArrowDown className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
