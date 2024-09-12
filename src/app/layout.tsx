import type { ReactNode } from "react";
import { urlBase } from "@config";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";

export const metadata: Metadata = {
  title: {
    template: "OpenDeepLearning - %s",
    default: "OpenDeepLearning - OpenDeepLearning",
  },
  description:
    "YEE式機器龍的指令及使用教學，透過簡單的一鍵式指令以及中文介面的音樂功能快速建立好和朋友玩耍的優質空間",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: "/opengraph-image.png",
    title: {
      template: "OpenDeepLearning - %s",
      default: "Yeecord - 萬中選一的 Discord 機器人",
    },
    description:
      "YEE式機器龍的指令及使用教學，透過簡單的一鍵式指令以及中文介面的音樂功能快速建立好和朋友玩耍的優質空間",
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
            options: { api: "https://search.yeecord.com/search" },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
