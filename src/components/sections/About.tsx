import { SectionWrapper, itemVariants } from "../ui/SectionWrapper";
import { SkillBadge } from "../ui/SkillBadge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "💻 Programming",
    skills: ["Python", "Java", "R", "SQL", "HTML/CSS"]
  },
  {
    title: "🤖 AI/LLMs",
    skills: ["Claude API", "Gemini", "Prompt Engineering", "NLP", "AI Agents"]
  },
  {
    title: "🧠 ML",
    skills: ["TensorFlow", "Keras", "CNN", "GRU", "LSTM", "Scikit-learn", "OpenCV"]
  },
  {
    title: "⚙️ Automation",
    skills: ["Zapier", "N8N", "Meta Ads API", "Gmail API", "Google Calendar API"]
  },
  {
    title: "📊 Data",
    skills: ["MySQL", "ETL Pipelines", "Pandas", "NumPy", "Jupyter"]
  },
  {
    title: "🛠️ Tools",
    skills: ["REST APIs", "Git", "Docker", "Notion CRM"]
  }
];

export function About() {
  return (
    <SectionWrapper id="about" title="OPERATIVE" cyanWord="BIO">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div variants={itemVariants} className="text-[var(--color-hud-text)] space-y-4 font-rajdhani text-lg hud-panel p-8 hud-brackets">
          <div className="hud-panel-highlight"></div>
          <p>
            I am an AI Engineer & Automation Specialist based in London.
            I hold an MSc in Data Science from the University of Greenwich (Merit), with deep expertise in optimizing real-world workflows through intelligent systems.
          </p>
          <p>
            My work focuses on bridging the gap between cutting-edge LLMs and practical business automation. Whether it's architecting RAG pipelines, deploying computer vision models, or orchestrating zero-latency CRM integrations, I build tools that scale.
          </p>
          <p>
            When I'm not configuring webhooks or fine-tuning prompts, I'm exploring the latest in open-source AI and scalable cloud architectures.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-8 hud-panel p-8 hud-brackets">
          <div className="hud-panel-highlight"></div>
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-[var(--color-hud-cyan)] font-mono text-sm tracking-widest uppercase mb-3 drop-shadow-[0_0_5px_currentColor]">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} categoryTitle={cat.title} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
