import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://odlai.vercel.app",
      images: "/banner.png",
      siteName: "OpenDeepLearning",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@1msirius_",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "/banner.png",
      ...override.twitter,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export const baseUrl = "https://odldocs.vercel.app/";
