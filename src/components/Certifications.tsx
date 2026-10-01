import styles from "./Timeline.module.css";

const rows = [
  {
    dates: "Jan 2026",
    title: "Data Scientist Associate",
    place: "DataCamp",
    description: "Valid to January 2028.",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className={`wrap ${styles.section}`}>
      <div className={styles.label}>
        <h2>Certifications</h2>
      </div>
      <div className={styles.body}>
        {rows.map((row, i) => (
          <div
            key={row.title}
            className={`${styles.row} ${i === 0 ? styles.rowFirst : ""}`}
          >
            <p className={styles.date}>{row.dates}</p>
            <div className={styles.detail}>
              <h3>{row.title}</h3>
              <p className={styles.place}>{row.place}</p>
              {row.description && (
                <p className={styles.description}>{row.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
