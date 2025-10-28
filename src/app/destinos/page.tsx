import CardDestino from "../../components/CardDestino";
import { DESTINOS } from "../../data/destinos";

export const metadata = { title: "Destinos | Portal de Viagens" };

export default function DestinosPage() {
  return (
    <section>
      <h1>Destinos</h1>
      <p className="muted">Selecione um destino para ver mais detalhes.</p>
      <div className="grid" style={{marginTop:16}}>
        {DESTINOS.map(d => <CardDestino key={d.slug} destino={d} />)}
      </div>
    </section>
  );
}
