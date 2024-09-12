import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s - ODL Blog",
    default: "ODL Blog",
    absolute: "ODL Blog",
  },
  description:
    "Courses, code, news, research, and community for building AI-powered products.",
  openGraph: {
    images: "/opengraph-image.png",
    title: {
      template: "%s - ODL Blog",
      absolute: "ODL Blog",
      default: "ODL Blog",
    },
    description:
      "Courses, code, news, research, and community for building AI-powered products.",
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <div className="container">{children}</div>;
}
