import "./globals.css";
import Layout from "../components/Layout";

export const metadata = {
  title: "Portal de Viagens",
  description: "Explore destinos incríveis."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body><Layout>{children}</Layout></body>
    </html>
  );
}
