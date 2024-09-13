import { Feed } from "feed";
import { domain } from "@config";
import { NextResponse } from "next/server";
import { blog } from "@/app/source";

export function generateStaticParams() {
  return [
    { format: "rss.xml" },
    { format: "atom.xml" },
    { format: "feed.json" },
  ];
}

export function GET(_: Request, { params }: { params: { format: string } }) {
  const { format } = params;
  const validFormats = ["rss.xml", "atom.xml", "feed.json"];
  if (!validFormats.includes(format)) {
    return NextResponse.json(
      { error: "Unsupported feed format" },
      { status: 404 },
    );
  }
  const feed = new Feed({
    title: "OpenDeepLearning",
    description: "Welcome to OpenDeepLearning Blog.",
    id: domain,
    link: domain,
    copyright: `All rights reserved ${new Date().getFullYear()}, OpenDeepLearning`,
    generator: "Feed for Node.js",
    feedLinks: {
      json: `${domain}/feed.json`,
      atom: `${domain}/atom.xml`,
      rss: `${domain}/rss.xml`,
    },
  });

  const allPosts = blog.getPages();
  allPosts.forEach((post) => {
    const postUrl = `${domain}${post.url}`;
    feed.addItem({
      title: post.data.title,
      id: postUrl,
      link: postUrl,
      description: post.data.description ?? "No Description",
      date: new Date(post.data.date),
      author: post.data.authors.map((author) => ({
        name: author,
        email: "hi@opendeeplearning.xyz",
        link: "github.com"
      })),
      category: post.data.tags
        ? post.data.tags.map((tag) => ({ name: tag, term: tag }))
        : [],
    });
  });

  const responseMap: Record<string, { content: string; contentType: string }> =
    {
      "rss.xml": { content: feed.rss2(), contentType: "application/xml" },
      "atom.xml": { content: feed.atom1(), contentType: "application/xml" },
      "feed.json": { content: feed.json1(), contentType: "application/json" },
    };
  const response = responseMap[format];
  return new NextResponse(response.content, {
    headers: {
      "Content-Type": response.contentType,
    },
  });
}
