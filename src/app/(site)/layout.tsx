import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="noise-bg min-h-screen">
      <SiteHeader />
      <main className="container pb-12 pt-10">{children}</main>
      <SiteFooter />
    </div>
  );
}
