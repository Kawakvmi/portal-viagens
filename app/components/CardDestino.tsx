import Link from "next/link";
import Image from "next/image";
import type { Destino } from "../data/destinos";

export default function CardDestino({ destino }: { destino: Destino }) {
  return (
    <li style={{ border:"1px solid #e5e5e5", borderRadius:10, padding:12 }}>
      <strong style={{ display:"block", marginBottom:8 }}>{destino.titulo}</strong>
      {destino.imagem && (
        <div style={{ position:"relative", width:"100%", height:140, marginBottom:8, borderRadius:8, overflow:"hidden" }}>
          <Image src={destino.imagem} alt={destino.titulo} fill sizes="240px" style={{ objectFit:"cover" }} />
        </div>
      )}
      <Link href={`/destinos/${destino.slug}`}>Ver detalhes →</Link>
    </li>
  );
}