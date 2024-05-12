import Card from "./card";

type ExperienceCardProps = {
  title: string;
  company: string;
  dateRange: string;
  description: string;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
function ExperienceCard(props: ExperienceCardProps) {
  return (
    <Card
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className={`flex transform flex-col gap-4 transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-2xl ${props.className}`}
    >
      <div className="flex flex-col">
        <p className="text-xs font-semibold tracking-widest text-[#999]">
          {props.dateRange}
        </p>
        <h2 className="text-lg font-bold">{props.title}</h2>
        <p className="font-semibold">{props.company}</p>
      </div>

      <p className="text-sm font-light">{props.description}</p>
    </Card>
  );
}

export default ExperienceCard;
