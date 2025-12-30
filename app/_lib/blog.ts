import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingDuration from "reading-duration";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type ArticleFrontmatter = {
  title: string;
  description: string;
  date: string;
  published: boolean;
  tags?: string[];
};

export type Article = {
  slug: string;
  frontmatter: ArticleFrontmatter;
  readTime: string;
};

export async function getAllArticleSlugs(): Promise<string[]> {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getAllArticles(): Promise<Article[]> {
  const slugs = await getAllArticleSlugs();
  const articles = await Promise.all(
    slugs.map((slug) => getArticleBySlug(slug))
  );

  return articles
    .filter((article) => article.frontmatter.published)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);
  const readTime = readingDuration(content, { emoji: false });

  return {
    slug,
    frontmatter: data as ArticleFrontmatter,
    readTime,
  };
}

export async function getArticleContent(slug: string): Promise<string> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  return fs.readFileSync(filePath, "utf-8");
}

export async function getAdjacentArticles(currentSlug: string): Promise<{
  previous: Article | null;
  next: Article | null;
}> {
  const articles = await getAllArticles();
  const currentIndex = articles.findIndex((a) => a.slug === currentSlug);

  return {
    previous:
      currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null,
    next: currentIndex > 0 ? articles[currentIndex - 1] : null,
  };
}
