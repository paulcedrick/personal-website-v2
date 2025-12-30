"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./experience-card";

const experiences = [
  {
    id: "domain",
    dateRange: "2025 — Present",
    company: "Domain",
    title: "Senior Engineer",
    description:
      "Part of modernizing the tech stack of the product, ensuring delivery of quality software with reliable documentation. Integrating AI into the product and heavily utilizing AI in development workflows.",
    technologies: [
      "Next.js",
      "Node.js",
      "AWS",
      "React",
      "Express",
      "TypeScript",
    ],
  },
  {
    id: "twoconnect",
    dateRange: "2024 — 2025",
    company: "Twoconnect",
    title: "Software Engineer",
    description:
      "Modernizing the backend of a child care system, focusing on integrating with state education departments and migrating from Ruby to Node.js. Responsible for overall architecture and design of the backend system.",
    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "AWS",
      "React",
      "Next.js",
    ],
  },
  {
    id: "kroma",
    dateRange: "2022 — 2024",
    company: "Kroma Entertainment",
    title: "Senior Software Engineer",
    description:
      "Led development of a real-time audience interaction platform, architecting its foundation and curating the optimal tech stack. Became proficient in AWS serverless technologies.",
    technologies: ["React", "Node.js", "AWS", "Serverless", "TypeScript"],
  },
  {
    id: "freelance-2021",
    dateRange: "2021",
    company: "Freelance",
    title: "Full Stack Developer",
    description:
      "Developed and enhanced a hotel management system for the Japanese market. Transitioned the system from JavaScript to TypeScript and implemented Docker and Kubernetes for deployment.",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Kubernetes",
      "Docker",
      "GCP",
    ],
  },
  {
    id: "ugrooop",
    dateRange: "2017 — 2020",
    company: "uGroop",
    title: "Full Stack Developer",
    description:
      "Developed a school trip management platform for the Australian market. Introduced GraphQL using AWS AppSync and Apollo Client, and implemented push notifications with Firebase.",
    technologies: ["React", "Node.js", "GraphQL", "Firebase", "AWS", ".NET"],
  },
  {
    id: "freelance-early",
    dateRange: "2014 — 2019",
    company: "Freelance",
    title: "Web Developer",
    description:
      "Diverse project development spanning WordPress websites, Node.js backend APIs, and React web applications. Cultivated skills in client communication and project management.",
    technologies: ["WordPress", "React", "Node.js", "AWS"],
  },
  {
    id: "codesignate",
    dateRange: "2014 — 2016",
    company: "Codesignate",
    title: "Developer",
    description:
      "Built websites and a Filipino-focused blogging platform similar to Medium. Worked with React in its early stages and trained in Solutions Architecture.",
    technologies: ["WordPress", "Joomla", "React", "Node.js", "AWS"],
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

export default function ExperienceList() {
  return (
    <motion.div
      className="flex flex-col"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {experiences.map((experience) => (
        <motion.div key={experience.id} variants={itemVariants}>
          <ExperienceCard {...experience} />
        </motion.div>
      ))}
    </motion.div>
  );
}
