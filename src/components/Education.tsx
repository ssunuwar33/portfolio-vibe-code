import styles from "./Timeline.module.css";

const rows = [
  {
    dates: "Sep 2023 – Oct 2024",
    title: "MSc Data Science, Merit",
    place: "University of Greenwich, London",
    description:
      "Machine learning, big data, data visualisation, and graph and modern databases.",
  },
  {
    dates: "Sep 2016 – Mar 2022",
    title: "BE Computer Engineering",
    place: "Pokhara University, Nepal",
    description:
      "Artificial intelligence, data structures and algorithms, database systems and computer architecture.",
  },
];

export function Education() {
  return (
    <section id="education" className={`wrap ${styles.section}`}>
      <div className={styles.label}>
        <h2>Education</h2>
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
