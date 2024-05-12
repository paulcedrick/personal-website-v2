"use client";

import ProjectCard from "@/app/_components/project-card";
import { useState } from "react";

const listData: {
  id: number;
  title: string;
  description?: string;
  techStack: string[];
  url: string;
}[] = [
  {
    id: 1,
    title: "Personal Website",
    description:
      "Laborum tempor adipisicing magna dolore Lorem nisi non elit veniam deserunt ullamco.",
    techStack: ["#react", "#typescript", "#tailwindcss", "#nextjs", "#sst"],
    url: "https://google.com",
  },
  {
    id: 2,
    title: "Personal Website",
    description:
      "Laborum tempor adipisicing magna dolore Lorem nisi non elit veniam deserunt ullamco.",
    techStack: ["#react", "#typescript", "#tailwindcss", "#nextjs", "#sst"],
    url: "https://google.com",
  },
];

type ProjectListProps = {};
function ProjectList(props: ProjectListProps) {
  const [selected, setSelected] = useState<number | undefined>(undefined);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-bold tracking-widest">Projects</h2>
      <div className="flex flex-col gap-2">
        {listData.map((data) => {
          return (
            <ProjectCard
              url={data.url}
              key={data.id}
              cardProps={{
                onMouseEnter: () => setSelected(data.id),
                onMouseLeave: () => setSelected(undefined),
                className: `${selected !== undefined && selected !== data.id ? "bg-[#222] opacity-50" : ""}`,
              }}
              selected={selected === data.id}
              title={data.title}
              description={data.description}
              technologies={data.techStack}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectList;
