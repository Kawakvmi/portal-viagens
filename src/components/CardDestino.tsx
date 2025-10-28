import Link from "next/link";
import Image from "next/image";
import styles from "./CardDestino.module.css";
import type { Destino } from "../data/destinos";

export default function CardDestino({ destino }: { destino: Destino }) {
  return (
    <article className={`card ${styles.card}`}>
      <div className={styles.thumb}>
        <Image src={destino.image} alt={destino.name} fill sizes="(max-width:768px) 100vw, 33vw" style={{objectFit:"cover"}} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{destino.name}</h3>
        <Link className={styles.cta} href={`/destinos/${destino.slug}`}>Ver detalhes →</Link>
      </div>
    </article>
  );
}
