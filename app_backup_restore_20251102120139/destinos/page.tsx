import Link from "next/link";
import { destinos } from "../data/destinos";

export default function Page() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <h1 style={{ marginBottom: 16 }}>Destinos</h1>
      <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 12, listStyle: "none", padding: 0 }}>
        {destinos.map(d => (
          <li key={d.slug} style={{ border: "1px solid #e5e5e5", borderRadius: 10, padding: 12 }}>
            <strong style={{ display: "block", marginBottom: 8 }}>{d.titulo}</strong>
            <Link href={`/destinos/${d.slug}`}>Ver detalhes →</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}