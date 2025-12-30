"use client";

import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <article className="group">
      <div className="space-y-3">
        {/* Title with links */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-text-primary font-medium flex items-center gap-2">
            <span className="text-accent">◆</span>
            {title}
          </h3>

          <div className="flex items-center gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors duration-200"
              aria-label="View on GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors duration-200"
                aria-label="View live site"
              >
                <FiExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs text-text-muted px-2 py-1 rounded bg-bg-elevated"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
