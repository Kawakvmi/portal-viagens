import "./globals.css";
import Layout from "./components/Layout";
import type { ReactNode } from "react";

export const metadata = { title: "Portal de Viagens" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: "system-ui, Arial, sans-serif" }}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}