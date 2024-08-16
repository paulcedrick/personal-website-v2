import FadingContainer from "@/app/_components/fading-container";
import Card, { CardProps } from "./card";

type ProjectCardProps = {
  title: string;
  description?: string;
  technologies?: string[];
  cardProps?: CardProps;
  selected?: boolean;
  url: string;
};
function ProjectCard(props: ProjectCardProps) {
  const technologies = props.technologies ?? [];
  const cardProps = props.cardProps ?? {};
  const cardClassName = cardProps.className ?? "";

  return (
    <FadingContainer>
      <Card
        {...cardProps}
        className={`flex transform flex-col gap-4 transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-2xl ${cardClassName}`}
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">
              <a href={props.url} target="_blank">
                {props.title}
              </a>
            </h2>

            {props.description && (
              <p className="text-sm text-[#999]">{props.description}</p>
            )}
          </div>

          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-sm bg-[#333] px-4 py-2 text-xs"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}
        </div>
      </Card>
    </FadingContainer>
  );
}

export default ProjectCard;
