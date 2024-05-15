"use client";

import { useState } from "react";
import ExperienceCard from "./experience-card";

function ExperienceList() {
  const [selected, setSelected] = useState<number | undefined>(undefined);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-bold tracking-widest">Experiences</h2>
      <div className="flex flex-col gap-2">
        {[1, 2, 3, 4].map((_, index) => {
          return (
            <ExperienceCard
              key={index}
              onMouseEnter={() => setSelected(index)}
              onMouseLeave={() => setSelected(undefined)}
              className={`${selected === index ? "bg-[#333]" : ""} ${selected !== undefined && selected !== index ? "bg-[#222] opacity-50" : ""}`}
              dateRange="2019-2023"
              company="Kroma Entertainment"
              title="Senior Software Engineer"
              description="Laborum tempor adipisicing magna dolore Lorem nisi non elit veniam deserunt ullamco."
            />
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceList;
