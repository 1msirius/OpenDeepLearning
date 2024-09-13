import type { Metadata } from "next";
import { domain } from "@config";

export const metadata: Metadata = {
  alternates: {
    canonical: domain,
  },
};

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">OpenDeepLearning</h1>
      <p className="text-muted-foreground">
        Courses, code, news, research, and community for building AI-powered
        products.
      </p>
    </main>
  );
}
