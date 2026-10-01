import styles from "./Skills.module.css";

const groups = [
  {
    title: "LLMs and agents",
    list: "Claude API, Google Gemini, OpenRouter, Model Context Protocol, prompt engineering, AI agent development, NLP",
  },
  {
    title: "Automation",
    list: "n8n, Zapier, REST APIs, Meta Ads API, Gmail, Google Calendar and Google Sheets APIs, Notion, Slack",
  },
  {
    title: "Machine learning",
    list: "TensorFlow, Keras, scikit-learn, OpenCV, CNNs (MobileNetV2), GRU, LSTM, model evaluation (F1, AUC-ROC) and deployment",
  },
  {
    title: "Programming and data",
    list: "Python, SQL, R, Java (Spring Boot, Swing), HTML, CSS, Pandas, NumPy, Jupyter, MySQL, graph databases, ETL pipelines",
  },
  {
    title: "Tools",
    list: "Git, Docker (familiar), Microsoft 365, Windows Server, Active Directory",
  },
  {
    title: "Languages",
    list: "English (fluent), Hindi (fluent), Nepali (native)",
  },
];

export function Skills() {
  return (
    <section id="skills" className={`wrap ${styles.section}`}>
      <div className={styles.label}>
        <h2>Skills</h2>
      </div>
      <div className={styles.body}>
        <div className={styles.grid}>
          {groups.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3>{group.title}</h3>
              <p>{group.list}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
