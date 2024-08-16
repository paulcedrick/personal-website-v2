import FadingCard from "@/app/_components/fading-card";

type ExperienceCardProps = {
  title: string;
  company: string;
  dateRange: string;
  description: string;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  technologies?: string[];
  highlights?: { title: string; description: string }[];
};
function ExperienceCard(props: ExperienceCardProps) {
  return (
    <FadingCard
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className={`flex transform flex-col gap-4 ${props.className}`}
      onClick={props.onClick}
    >
      <div className="flex flex-col">
        <p className="text-xs font-semibold tracking-widest text-[#999]">
          {props.dateRange}
        </p>
        <h2 className="text-lg font-bold">{props.title}</h2>
        <p className="">{props.company}</p>
      </div>

      <p className="text-sm font-light text-[#d9d9d9]">{props.description}</p>

      {props.highlights && (
        <div className="space-y-2 text-sm">
          <p className="text-xs font-semibold tracking-widest text-[#999]">
            Highlights
          </p>
          <ul className="list-disc space-y-2 pl-4">
            {props.highlights?.map((highlight) => (
              <li key={highlight.title} className="text-[#d9d9d9]">
                <span className="font-semibold">{highlight.title}: </span>
                <span>{highlight.description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {props.technologies && (
        <div className="flex flex-wrap gap-1">
          {props.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-sm bg-[#333] px-4 py-2 text-xs"
            >
              {technology}
            </span>
          ))}
        </div>
      )}
    </FadingCard>
  );
}

export default ExperienceCard;
