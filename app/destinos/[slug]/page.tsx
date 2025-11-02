import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { DESTINOS } from "../../data/destinos";

function getDestino(slug: string) {
  return DESTINOS.find(d => d.slug === slug) ?? null;
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const d = getDestino(params.slug);
  if (!d) return { title: "Destino não encontrado" };
  const desc = (d.descricao ?? "").slice(0, 140);
  return {
    title: `${d.titulo} — Destinos`,
    description: desc,
    openGraph: { title: `${d.titulo} — Destinos`, description: desc, images: d.imagem ? [d.imagem] : [] },
    twitter: { card: "summary_large_image", title: `${d.titulo} — Destinos`, description: desc, images: d.imagem ? [d.imagem] : [] }
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const d = getDestino(params.slug);
  if (!d) notFound();

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <h1 style={{ marginBottom: 12 }}>{d!.titulo}</h1>
      {d!.imagem && (
        <div style={{ position: "relative", width: "100%", height: 360, margin: "16px 0" }}>
          <Image
            src={d!.imagem}
            alt={d!.titulo}
            fill
            priority
            sizes="(max-width: 960px) 100vw, 960px"
            style={{ objectFit: "cover", borderRadius: 12 }}
          />
        </div>
      )}
      <p style={{ lineHeight: 1.6, marginBottom: 16 }}>{d!.descricao}</p>
      {!!d!.destaques?.length && (
        <>
          <h2 style={{ marginTop: 24, marginBottom: 8 }}>Destaques</h2>
          <ul style={{ paddingLeft: 18 }}>
            {d!.destaques!.map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        </>
      )}
    </main>
  );
}