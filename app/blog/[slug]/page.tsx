import { Metadata } from "next";
import { notFound } from "next/navigation";
import { evaluate } from "next-mdx-remote-client/rsc";

import {
  getAllArticleSlugs,
  getArticleContent,
  getArticleBySlug,
  getAdjacentArticles,
  type ArticleFrontmatter,
} from "@/app/_lib/blog";
import { mdxComponents } from "@/app/_components/mdx-components";
import BlogHeader from "@/app/_components/blog-header";
import BlogPostContent from "./content";

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const article = await getArticleBySlug(slug);

    return {
      title: `${article.frontmatter.title} | Paul Artigo`,
      description: article.frontmatter.description,
      openGraph: {
        title: article.frontmatter.title,
        description: article.frontmatter.description,
        type: "article",
        publishedTime: article.frontmatter.date,
      },
    };
  } catch {
    return {
      title: "Article Not Found | Paul Artigo",
    };
  }
}

async function getPageData(slug: string) {
  const source = await getArticleContent(slug).catch(() => null);
  if (!source) return null;

  const article = await getArticleBySlug(slug).catch(() => null);
  if (!article) return null;

  const { previous, next } = await getAdjacentArticles(slug);

  const { content, error } = await evaluate<ArticleFrontmatter>({
    source,
    options: { parseFrontmatter: true },
    components: mdxComponents,
  });

  if (error) return null;

  const formattedDate = new Date(article.frontmatter.date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return { article, content, formattedDate, previous, next };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getPageData(slug);

  if (!data) {
    notFound();
  }

  const { article, content, formattedDate, previous, next } = data;

  return (
    <main className="min-h-screen">
      <BlogHeader />

      <BlogPostContent
        title={article.frontmatter.title}
        date={formattedDate}
        readTime={article.readTime}
        tags={article.frontmatter.tags}
        content={content}
        previous={previous}
        next={next}
      />
    </main>
  );
}
