"use client";
import Link from "next/link";
import styles from "./Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.brand}>Portal de Viagens</div>
          <nav className={styles.menu}>
            <Link href="/">Início</Link>
            <Link href="/destinos">Destinos</Link>
          </nav>
        </div>
      </header>
      <main style={{maxWidth:1100, margin:"0 auto", padding:"24px"}}>{children}</main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Portal de Viagens — Dereck
      </footer>
    </div>
  );
}
