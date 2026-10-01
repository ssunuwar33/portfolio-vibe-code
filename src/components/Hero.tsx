import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div className={`wrap ${styles.hero}`}>
      <h1 className={styles.headline}>
        I turn AI prototypes into working business tools.
      </h1>

      <div className={styles.text}>
        <p className={styles.intro}>
          I&apos;m Subash Sunuwar, an AI engineer in London. I build LLM
          integrations, workflow automation and computer-vision systems, and
          hold an MSc in Data Science (Merit) from the University of Greenwich.
        </p>
        <p className={styles.availability}>
          Open to AI engineer, LLM and automation engineer, and junior data
          scientist roles. Right to work in the UK.
        </p>
      </div>

      <div className={styles.actions}>
        <div className={styles.btnGroup}>
          <a href="mailto:ssunuwar33@gmail.com" className={`${styles.btn} ${styles.btnPrimary}`}>
            Email me
          </a>
          <a
            href="/Subash_Sunuwar_CV.docx"
            download
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            Download CV
          </a>
        </div>
        <div className={styles.textLinks}>
          <a
            href="https://www.linkedin.com/in/subashsunuwar33/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ssunuwar33"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
