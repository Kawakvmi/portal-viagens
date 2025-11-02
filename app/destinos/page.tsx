import CardDestino from "../components/CardDestino";
import { DESTINOS } from "../data/destinos";

export const metadata = { title: "Destinos | Portal de Viagens" };

export default function Page() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <h1 style={{ marginBottom: 16 }}>Destinos</h1>
      <ul style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:12, listStyle:"none", padding:0 }}>
        {DESTINOS.map(d => <CardDestino key={d.slug} destino={d} />)}
      </ul>
    </main>
  );
}