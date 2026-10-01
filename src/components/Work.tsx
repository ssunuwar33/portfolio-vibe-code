import styles from "./Work.module.css";

const items = [
  {
    title: "Claude plugin for email and calendar admin",
    context: "Bizzed AI, 2026",
    result: (
      <>
        Cut routine admin from <s>30 to 45 minutes</s> to under 10.
      </>
    ),
    description:
      "A Claude API plugin, connected through the Model Context Protocol, that drafts emails, schedules meetings and writes proposals across Gmail and Google Calendar.",
    stack: "Claude API, Model Context Protocol, Gmail API, Google Calendar API",
  },
  {
    title: "Lead-response automation",
    context: "Bizzed AI, 2026",
    result: (
      <>
        Cut lead response time from <s>several hours</s> to under a minute.
      </>
    ),
    description:
      "A pipeline from the Meta (Facebook) Ads API through Zapier that triggers an outbound call within 60 seconds of every inbound lead.",
    stack: "Meta Ads API, Zapier",
  },
  {
    title: "Real-time crime detection",
    context: "MSc dissertation, University of Greenwich, 2024",
    result: <>Reached 94.8% AUC, ahead of published baselines at 75 to 84%.</>,
    description:
      "A hybrid CNN-GRU video classifier: a frozen MobileNetV2 extracts spatial features from each frame and a 256-unit GRU models how they change over time. Trained on 1,874 UCF-Crime clips, it scored 0.89 F1 and 0.96 recall on suspicious activity, and runs in a Flask app that flags detections on uploaded video.",
    stack: "TensorFlow, OpenCV, MobileNetV2, GRU, Flask",
  },
  {
    title: "Facial recognition for smart glasses",
    context: "Bizzed AI, 2026",
    result: <>Lets staff identify contacts hands-free on smart glasses.</>,
    description:
      "Built the data pipeline for a production facial-recognition system that matches live video frames against the CRM database.",
    stack: "OpenCV, GRU deep-learning model",
  },
  {
    title: "Notion-to-Slack task alerts",
    context: "Bizzed AI, 2026",
    result: (
      <>
        Replaced <s>manual chasing</s> with real-time alerts, cutting missed
        task reviews by about 90%.
      </>
    ),
    description:
      "Watches pending task queues in the Notion CRM and notifies the right person in Slack as soon as something needs review.",
    stack: "Notion, Slack",
  },
  {
    title: "Job application tracker",
    context: "Independent project, 2025",
    result: (
      <>Took about 80% of the manual data entry out of tracking job applications.</>
    ),
    description:
      "An n8n workflow that uses NVIDIA Nemotron 3 Ultra through OpenRouter to classify inbound emails, pull out the company, role, date applied and platform, and write clean records to Google Sheets.",
    stack: "n8n, OpenRouter, Google Sheets API",
  },
];

export function Work() {
  return (
    <section id="work" className={`wrap ${styles.section}`}>
      <div className={styles.label}>
        <h2>Selected work</h2>
      </div>
      <div className={styles.body}>
        {items.map((item, i) => (
          <article
            key={item.title}
            className={`${styles.item} ${i === 0 ? styles.itemFirst : ""}`}
          >
            <div className={styles.titleRow}>
              <h3>{item.title}</h3>
              <p className={styles.meta}>{item.context}</p>
            </div>
            <p className={styles.result}>{item.result}</p>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.meta}>{item.stack}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
