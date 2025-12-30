import { getAllArticles } from "@/app/_lib/blog";
import HomeContent from "@/app/_components/home-content";

export default async function Home() {
  const articles = await getAllArticles();

  const articleItems = articles.map((article) => ({
    id: article.slug,
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    date: new Date(article.frontmatter.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    readTime: article.readTime,
    href: `/blog/${article.slug}`,
  }));

  return <HomeContent articles={articleItems} />;
}
