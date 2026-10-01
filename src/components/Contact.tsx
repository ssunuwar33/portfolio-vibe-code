import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.block}>
      <div className={`wrap ${styles.inner}`}>
        <h2>Have a role in mind? I&apos;d like to hear about it.</h2>
        <a href="mailto:ssunuwar33@gmail.com" className={styles.email}>
          ssunuwar33@gmail.com
        </a>
        <div className={styles.links}>
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
          <span className={styles.location}>London, UK</span>
        </div>
      </div>
    </section>
  );
}
