import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/home-layout";
import { layoutProps } from "@/app/layout.shared";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...layoutProps}>
      {children}
      <Footer />
    </HomeLayout>
  );
}
