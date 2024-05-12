"use client";

import ProjectCard from "@/app/_components/project-card";
import { useState } from "react";

type ProjectListProps = {};
function ProjectList(props: ProjectListProps) {
  const [selected, setSelected] = useState<number | undefined>(undefined);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-bold tracking-widest">Projects</h2>
      <div className="flex flex-col gap-2">
        {[1, 2, 3, 4, 5, 6].map((_, index) => {
          return (
            <ProjectCard
              key={index}
              cardProps={{
                onMouseEnter: () => setSelected(index),
                onMouseLeave: () => setSelected(undefined),
                className: `${selected === index ? "bg-[#333]" : ""} ${selected !== undefined && selected !== index ? "bg-[#222] opacity-50" : ""}`,
              }}
              title="Personal Website"
              description="Laborum tempor adipisicing magna dolore Lorem nisi non elit veniam deserunt ullamco."
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectList;
