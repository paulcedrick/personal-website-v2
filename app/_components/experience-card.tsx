"use client";

type ExperienceCardProps = {
  title: string;
  company: string;
  dateRange: string;
  description: string;
  technologies?: string[];
};

export default function ExperienceCard({
  title,
  company,
  dateRange,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <article className="group relative py-8 pl-6 border-l-2 border-border-subtle hover:border-accent transition-colors duration-300 first:pt-0 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-8 first:top-0 -translate-x-[5px] w-2 h-2 rounded-full bg-border-subtle group-hover:bg-accent transition-colors duration-300" />

      <div className="space-y-3">
        {/* Date */}
        <p className="text-xs text-text-muted tracking-wide">
          {dateRange}
        </p>

        {/* Title & Company */}
        <div>
          <h3 className="text-text-primary font-medium">
            {title}
          </h3>
          <p className="text-accent text-sm">
            {company}
          </p>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 pb-4">
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
