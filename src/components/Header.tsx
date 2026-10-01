import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.inner}`}>
        <Link href="#top" className={styles.wordmark}>
          Subash Sunuwar
        </Link>
        <nav aria-label="Sections" className={styles.nav}>
          <Link href="#work">Work</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
