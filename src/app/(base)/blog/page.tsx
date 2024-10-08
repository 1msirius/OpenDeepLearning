import { BlogItem } from "@/components/blog/BlogItem";
import { EyeIcon } from "lucide-react";
import { domain } from "@config";
import type { Metadata } from "next";
import { blog } from "@/app/source";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  alternates: {
    canonical: `${domain}/blog`,
  },
};

export default function BlogIndex() {
  const pages = blog
    .getPages()
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return (
    <main className="flex flex-1 flex-col pb-20">
      <div
        className="py-16"
        style={{
          backgroundImage: `linear-gradient(to bottom,transparent 50%,hsl(var(--background))), radial-gradient(circle at center, hsl(var(--muted-foreground)) 1px, hsl(var(--background)) 0)`,
          backgroundSize: "100%, 1.5rem 1.5rem",
          backgroundRepeat: "none, round",
        }}
      >
        <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">
          Blog
        </h1>
        <div className="flex flex-row justify-center gap-2.5 max-sm:flex-col max-sm:items-stretch">
          <Link
            href="/blog/tags"
            className={cn(buttonVariants({ color: "primary" }))}
          >
            <EyeIcon className="size-4" />
            View all tags
          </Link>
          <a
            href="https://github.com/OpenDeepLearningAI/OpenDeepLearning"
            target="_blank"
            rel="noreferrer noopener"
            className={cn(buttonVariants({ color: "secondary" }))}
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Join us
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => (
          <BlogItem key={page.url} page={page} />
        ))}
      </div>
      <div className="mt-8 flex flex-row items-end gap-2 rounded-xl border bg-card p-4 shadow-lg">
        <div>
          <h2 className="mb-1 font-semibold">Follow our new posts</h2>
          <p className="text-sm text-muted-foreground">Subscribe to our blog</p>
        </div>
        <a
          href="/rss"
          className={cn(
            buttonVariants({ color: "primary", className: "ml-auto" }),
          )}
        >
          RSS
        </a>
        <a href="/atom" className={cn(buttonVariants({ color: "primary" }))}>
          Atom
        </a>
        <a href="/json" className={cn(buttonVariants({ color: "primary" }))}>
          JSON
        </a>
      </div>
    </main>
  );
}
