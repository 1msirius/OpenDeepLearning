import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About OpenDeepLearning",
};

export default function About() {
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="prose prose-neutral dark:prose-invert mt-6"
        style={{ maxWidth: "750px" }}
      >
        <h1>About</h1>
      </div>
    </section>
  );
}
