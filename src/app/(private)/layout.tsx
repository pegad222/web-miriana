import type { ReactNode } from "react";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-ink text-bone">{children}</div>;
}
