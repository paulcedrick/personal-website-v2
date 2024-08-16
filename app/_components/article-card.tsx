import Card, { CardProps } from "@/app/_components/card";
import FadingContainer from "@/app/_components/fading-container";

type ArticleCardProps = {
  cardProps?: CardProps;
  title: string;
  description: string;
  createdAt: string;
  readTime: string;
};
function ArticleCard(props: ArticleCardProps) {
  const cardProps = props.cardProps ?? {};

  return (
    <FadingContainer className={cardProps.className}>
      <Card
        {...cardProps}
        className={`flex transform flex-col gap-4 transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-2xl ${cardProps.className}`}
      >
        <a href="#">
          <div className="flex flex-col flex-wrap gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">{props.title}</h2>
              <p className="text-sm font-light">{props.description}</p>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#999]">
              <span>{props.createdAt}</span>
              <span>|</span>
              <span>{props.readTime}</span>
            </div>
          </div>
        </a>
      </Card>
    </FadingContainer>
  );
}

export default ArticleCard;
