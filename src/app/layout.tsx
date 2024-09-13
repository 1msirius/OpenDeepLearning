import type { ReactNode } from "react";
import { urlBase } from "@config";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "katex/dist/katex.css";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Banner } from "fumadocs-ui/components/banner";

export const metadata: Metadata = {
  title: {
    default: "OpenDeepLearning",
    template: "%s | OpenDeepLearning",
  },
  description:
    "Courses, code, news, research, and community for building AI-powered products.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: "/opengraph-image.png",
    title: {
      default: "OpenDeepLearning",
      template: "%s | OpenDeepLearning",
    },
    description:
      "Courses, code, news, research, and community for building AI-powered products.",
  },
  metadataBase: urlBase,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <RootProvider
          search={{
            options: { api: "#" },
          }}
        >
          <Banner id="hello-world">Give us star on GitHub</Banner>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
