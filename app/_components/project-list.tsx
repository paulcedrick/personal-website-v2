"use client";

import { motion } from "framer-motion";
import ProjectCard from "./project-card";

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
};

// Placeholder projects - replace with real GitHub repos later
const projects: Project[] = [
  {
    id: "personal-website",
    title: "Personal Website",
    description:
      "My portfolio website built with Next.js, Tailwind CSS, and deployed with SST on AWS. Features a refined minimalist design with champagne gold accents.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SST", "AWS"],
    githubUrl: "https://github.com/paulcedrick/personal-website-v2",
  },
  {
    id: "project-2",
    title: "Coming Soon",
    description:
      "More projects will be added here. Check back soon or visit my GitHub profile for the latest work.",
    technologies: ["TypeScript", "React", "Node.js"],
    githubUrl: "https://github.com/paulcedrick",
  },
];

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

export default function ProjectList() {
  return (
    <motion.div
      className="flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={itemVariants} className="pb-8 border-b border-border-subtle last:border-b-0 last:pb-0">
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
