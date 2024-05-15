"use client";

import ArticleCard from "@/app/_components/article-card";
import { useState } from "react";
import readingDuration from "reading-duration";

type ArticleData = {
  id: number;
  title: string;
  description: string;
  content: string;
  createdAt: string;
};
const dummyArticleData: ArticleData[] = [
  {
    id: 1,
    title: "Article 1",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis.`,
    content: `
      Pariatur veniam ullamco nostrud officia consequat Lorem labore magna eiusmod. Elit incididunt reprehenderit et pariatur irure sint veniam adipisicing duis tempor culpa duis enim do. Voluptate duis laboris cillum commodo aliqua culpa excepteur nulla laborum mollit. Dolore proident in culpa culpa reprehenderit exercitation amet aute amet consectetur aliqua pariatur elit. Et excepteur commodo non ut.

Veniam excepteur duis magna pariatur ex consectetur irure id adipisicing nisi. Irure aliquip exercitation magna proident officia tempor ex sunt quis. Minim est culpa cillum voluptate anim dolor laborum magna. Velit anim culpa enim excepteur.

Velit ullamco consectetur elit pariatur duis. Consequat duis sit enim labore. Voluptate laborum ullamco do sunt sint consequat occaecat consectetur proident anim. Adipisicing velit consectetur tempor fugiat do est laboris. Do non ipsum aliquip sit incididunt occaecat ipsum est nostrud.

Pariatur sunt laboris nulla in. Adipisicing eu aliquip incididunt dolor nostrud excepteur qui et cupidatat. Deserunt nostrud voluptate officia eiusmod id ullamco elit. Velit cillum esse amet pariatur tempor magna aute laborum qui amet et cillum ut. Duis ea velit ullamco eiusmod sint est occaecat anim proident ea id Lorem labore consequat. Nisi elit ut culpa mollit aliqua proident exercitation amet amet.
Veniam excepteur duis magna pariatur ex consectetur irure id adipisicing nisi. Irure aliquip exercitation magna proident officia tempor ex sunt quis. Minim est culpa cillum voluptate anim dolor laborum magna. Velit anim culpa enim excepteur.

Velit ullamco consectetur elit pariatur duis. Consequat duis sit enim labore. Voluptate laborum ullamco do sunt sint consequat occaecat consectetur proident anim. Adipisicing velit consectetur tempor fugiat do est laboris. Do non ipsum aliquip sit incididunt occaecat ipsum est nostrud.

    `,
    createdAt: "March 18, 2024",
  },
  {
    id: 2,
    title: "Article 2",
    description:
      "Laborum tempor adipisicing magna dolore Lorem nisi non elit veniam deserunt ullamco.",
    content: `
    Exercitation est adipisicing quis ex non deserunt voluptate veniam fugiat sunt qui incididunt reprehenderit. Sunt cupidatat occaecat nisi in occaecat enim non cillum. Laborum occaecat eiusmod esse in proident sit cillum duis dolore sint voluptate deserunt excepteur. Do minim amet dolore ut fugiat consectetur. Dolor non occaecat excepteur duis nostrud consectetur incididunt qui. Exercitation ipsum est Lorem consectetur velit occaecat ad officia ipsum esse sunt ut culpa.

Sunt excepteur cillum laborum ullamco qui mollit ex ad ipsum. Exercitation ullamco non officia cillum eiusmod deserunt excepteur. Veniam cupidatat laborum aute reprehenderit Lorem elit ad deserunt ipsum excepteur ea ea.

Elit nisi do ipsum qui minim incididunt quis consectetur laborum. Laborum sit sunt irure deserunt velit magna commodo velit non velit tempor. Minim aute adipisicing anim proident commodo eiusmod consequat pariatur cillum non. Amet mollit deserunt aute dolore fugiat proident duis mollit proident sint magna consectetur duis. Anim consectetur do ex deserunt sint fugiat fugiat. Qui sunt tempor magna sint minim.

Deserunt amet ea eiusmod nostrud ea magna aliqua. Sit fugiat ea in aliqua. Voluptate laboris et reprehenderit non enim excepteur duis aliqua cillum amet velit. Sit laboris dolore veniam duis ut. Voluptate consectetur ex non ad fugiat sunt incididunt et quis proident dolor pariatur. Reprehenderit ut nisi nostrud ipsum. Qui quis aliquip cupidatat reprehenderit non.

Exercitation proident reprehenderit ut do minim magna commodo non qui consectetur sunt. Qui id aute laborum in non qui velit enim in minim. Est consequat aliquip minim sunt pariatur cupidatat. Do non duis sit ipsum in exercitation mollit voluptate sint. Culpa commodo ad magna labore occaecat magna consectetur mollit tempor. Magna occaecat eiusmod labore Lorem.

Qui exercitation incididunt veniam eu veniam irure quis nostrud aute proident Lorem incididunt. Exercitation ipsum laborum excepteur pariatur veniam. Velit minim laboris nisi reprehenderit ex nulla reprehenderit minim.

Nisi laborum nulla commodo non quis pariatur ad mollit duis do enim enim in fugiat. Et minim enim elit commodo ut ipsum tempor excepteur incididunt do enim dolore. Ut reprehenderit irure laborum cupidatat velit exercitation sit sit pariatur incididunt. Laboris do et pariatur magna fugiat velit et labore aliqua consectetur nulla ut incididunt ipsum. Anim ex deserunt eu officia duis consectetur ea. Adipisicing id exercitation ad proident.

Lorem eu exercitation sunt officia cillum in Lorem. Ex est nulla excepteur sint aliquip exercitation amet elit quis. Et consectetur amet proident nostrud anim. Exercitation sunt Lorem dolore commodo nulla excepteur. Aute commodo dolor duis duis proident nisi esse reprehenderit veniam esse eu cupidatat sit nisi. Irure dolor deserunt exercitation ullamco nulla in deserunt eiusmod enim qui dolor voluptate.

Deserunt ex duis consectetur qui ut sint in aliquip anim consequat dolore do elit. Sint mollit excepteur irure ex. Reprehenderit ea reprehenderit consequat dolor eu consectetur sit. Eu cillum enim nulla esse. Est eiusmod dolore veniam fugiat reprehenderit sunt occaecat sint occaecat ea fugiat. Proident fugiat ex officia excepteur ex sit.

Aliqua commodo mollit sunt non nostrud occaecat excepteur laborum. Fugiat aliquip non consequat labore commodo irure duis consectetur Lorem excepteur duis et officia. Aliquip ullamco est enim magna eiusmod deserunt esse aute et eiusmod quis nulla. Tempor incididunt pariatur aute ex culpa mollit aliquip sint eiusmod.
    `,
    createdAt: "March 18, 2024",
  },
  {
    id: 3,
    title: "Article 3",
    description:
      "Laborum tempor adipisicing magna dolore Lorem nisi non elit veniam deserunt ullamco.",
    content: `
      Reprehenderit nisi ea id proident nisi sunt adipisicing dolor exercitation ex anim sit sint. Occaecat quis minim qui adipisicing culpa occaecat elit cupidatat velit aute do. Sit labore anim eu nisi. Culpa quis voluptate mollit est aute enim nostrud ullamco. Nisi excepteur nulla aliquip dolor commodo consectetur ad. Amet do enim nostrud nisi.

Eiusmod cillum esse aliquip officia est anim Lorem aliquip labore. Est consectetur ullamco culpa occaecat reprehenderit reprehenderit ad. Ullamco Lorem enim minim aliqua aliqua tempor non adipisicing dolore mollit consectetur.

Tempor velit ipsum nostrud eiusmod quis eiusmod do. Qui sit deserunt laborum voluptate officia sint dolor labore aute exercitation. Sint incididunt officia dolor id sit aliqua Lorem adipisicing ex qui sunt elit. Irure nulla cillum id est. Proident officia et eu sunt ullamco excepteur.

Anim do ad ad labore officia et qui. Eiusmod excepteur culpa duis laborum nisi. Esse ullamco ipsum cupidatat officia aute pariatur. Tempor aliqua Lorem minim aute laboris excepteur dolore adipisicing.

Ex adipisicing amet cillum laboris est consequat eu magna. Irure non nulla esse incididunt cillum ullamco nulla excepteur et Lorem deserunt in enim ipsum. Quis magna eu ut ipsum minim pariatur do Lorem excepteur dolore.

Velit mollit occaecat ex excepteur laborum. Magna in cupidatat esse irure esse reprehenderit excepteur elit. Ipsum ea incididunt occaecat velit commodo ipsum quis nisi magna laborum. Deserunt dolore magna ad veniam aute tempor do.

Lorem mollit eiusmod aliqua amet velit anim proident adipisicing. Elit anim nostrud consectetur consectetur ex incididunt. Lorem incididunt veniam pariatur sit ea nisi nostrud nulla nulla voluptate elit non. Enim aute labore exercitation amet ut consequat cupidatat. Laborum et est veniam incididunt id laborum minim proident voluptate consectetur.
    `,
    createdAt: "March 18, 2024",
  },
];

type ArticleListProps = {};
function ArticleList(props: ArticleListProps) {
  const [selected, setSelected] = useState<number | undefined>(undefined);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-bold tracking-widest">Articles</h2>
      <div className="grid auto-rows-min grid-cols-2 gap-2">
        {dummyArticleData.map((data, index) => {
          return (
            <ArticleCard
              cardProps={{
                onMouseEnter: () => setSelected(data.id),
                onMouseLeave: () => setSelected(undefined),
                className: `${index + 1 === dummyArticleData.length && (index + 1) % 2 !== 0 ? "col-span-full" : ""} ${selected !== undefined && selected !== data.id ? "bg-[#222] opacity-50" : ""}`,
              }}
              {...data}
              readTime={readingDuration(data.content)}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ArticleList;
