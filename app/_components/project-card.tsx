import Card, { CardProps } from "./card";

type ProjectCardProps = {
  title: string;
  description?: string;
  technologies?: string[];
  cardProps?: CardProps;
};
function ProjectCard(props: ProjectCardProps) {
  const technologies = props.technologies ?? [];
  const cardProps = props.cardProps ?? {};
  const cardClassName = cardProps.className ?? "";

  return (
    <Card
      {...cardProps}
      className={`flex transform flex-col gap-4 transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-2xl ${cardClassName}`}
    >
      <div className="flex flex-col gap-1">
        {technologies.length > 0 && (
          <>
            <p>Technologies:</p>
            <div className="flex gap-1">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-sm bg-[#555] px-2 py-1"
                >
                  {technology}
                </span>
              ))}
            </div>
          </>
        )}
        <h2 className="text-lg tracking-widest">{props.title}</h2>
        {props.description && <p>{props.description}</p>}
      </div>
    </Card>
  );
}

export default ProjectCard;
