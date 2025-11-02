export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main style={(maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <h1>Destino: {params.slug}</h1>
      <p>Rota dinímica funcionando.</p>
    </main>
  );
}
