import styles from "./Timeline.module.css";

const rows = [
  {
    dates: "Mar – Jun 2026",
    title: "AI Engineer Intern, Bizzed AI",
    place: "Remote, UK",
    description:
      "Shipped LLM integrations and workflow automation, and built the data pipeline for a production facial-recognition system.",
  },
  {
    dates: "Jan 2023 – present",
    title: "Colleague, Tesco",
    place: "London",
    description:
      "Serve 100+ customers a shift and lead a team of up to 10 colleagues during peak trading.",
  },
  {
    dates: "Aug 2018 – Jan 2021",
    title: "IT Support Specialist, Aarambha Infosys",
    place: "Kathmandu, Nepal",
    description:
      "Tier-1 support across hardware, software and networks, plus administration of Windows Server, Microsoft 365 and Active Directory. Cut recurring tickets through structured end-user training.",
  },
];

export function Experience() {
  return (
    <section id="experience" className={`wrap ${styles.section}`}>
      <div className={styles.label}>
        <h2>Experience</h2>
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
