import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div style={{ minHeight: "100dvh" }}>{children}</div>;
}