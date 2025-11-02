import Link from "next/link";
export default function Page() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <h1 style={{ marginBottom: 16 }}>Portal de Viagens</h1>
      <p>App ok. Vê para <Link href="/destinos/paris">/destinos/paris</Link></p>
    </main>
  );
}
