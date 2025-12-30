import Link from "next/link";
import type { ReactNode } from "react";

type ChildrenProps = {
  children?: ReactNode;
};

type LinkProps = {
  children?: ReactNode;
  href?: string;
};

type ImageProps = {
  src?: string;
  alt?: string;
};

export const mdxComponents = {
  h1: ({ children }: ChildrenProps) => (
    <h1 className="font-serif text-heading-1 text-text-primary mt-12 mb-6 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }: ChildrenProps) => (
    <h2 className="font-serif text-heading-2 text-text-primary mt-10 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }: ChildrenProps) => (
    <h3 className="font-serif text-heading-3 text-text-primary mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }: ChildrenProps) => (
    <p className="text-text-secondary leading-relaxed mb-6">{children}</p>
  ),
  a: ({ href, children }: LinkProps) => (
    <Link
      href={href || "#"}
      className="text-accent hover:text-accent-hover transition-colors duration-200 underline underline-offset-4"
    >
      {children}
    </Link>
  ),
  ul: ({ children }: ChildrenProps) => (
    <ul className="text-text-secondary list-disc list-outside ml-6 mb-6 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }: ChildrenProps) => (
    <ol className="text-text-secondary list-decimal list-outside ml-6 mb-6 space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }: ChildrenProps) => (
    <li className="leading-relaxed">{children}</li>
  ),
  pre: ({ children }: ChildrenProps) => (
    <pre className="bg-bg-elevated border border-border-subtle rounded-lg p-4 mb-6 overflow-x-auto text-sm">
      {children}
    </pre>
  ),
  code: ({ children }: ChildrenProps) => (
    <code className="bg-bg-elevated px-1.5 py-0.5 rounded text-accent text-sm">
      {children}
    </code>
  ),
  blockquote: ({ children }: ChildrenProps) => (
    <blockquote className="border-l-2 border-accent pl-6 my-6 italic text-text-muted">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-border-subtle my-12" />,
  strong: ({ children }: ChildrenProps) => (
    <strong className="text-text-primary font-medium">{children}</strong>
  ),
  em: ({ children }: ChildrenProps) => (
    <em className="text-text-secondary italic">{children}</em>
  ),
  // eslint-disable-next-line @next/next/no-img-element
  img: ({ src, alt }: ImageProps) => (
    <img
      src={src}
      alt={alt || ""}
      className="rounded-lg border border-border-subtle my-8"
    />
  ),
};
