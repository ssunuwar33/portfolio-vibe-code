import { SectionWrapper, itemVariants } from "../ui/SectionWrapper";
import { SkillBadge } from "../ui/SkillBadge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "🤖 AI/LLMs",
    skills: ["Claude API", "Gemini", "Prompt Engineering", "RAG Pipelines", "NLP", "AI Agents"]
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
    skills: ["REST APIs", "Git", "Docker", "AWS/GCP", "Notion CRM"]
  }
];

export function About() {
  return (
    <SectionWrapper id="about">
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
          <span className="text-[var(--color-violet)]">01.</span> About Me
        </h2>
        <div className="w-20 h-1 bg-[var(--color-cyan)]"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div variants={itemVariants} className="text-gray-400 space-y-4">
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

        <motion.div variants={itemVariants} className="space-y-8">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-white font-mono font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
