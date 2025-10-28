import Link from "next/link";

export default function Page(){
  return (
    <main>
      <h1>Bem-vindo ao Portal de Viagens 🌍</h1>
      <p className="muted">Descubra destinos com fotos e destaques.</p>
      <div style={{marginTop:16}}>
        <Link className="btn" href="/destinos">Explorar destinos</Link>
      </div>
    </main>
  );
}
