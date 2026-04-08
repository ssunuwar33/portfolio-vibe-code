import { SectionWrapper, itemVariants } from "../ui/SectionWrapper";
import { ProjectCard } from "../ui/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Lead-Response Automation Pipeline",
    description: "Zapier + Meta Ads API integration. Trigger: inbound lead → instant outbound call in <60s.",
    tech: ["Zapier", "Meta Ads API", "REST APIs"],
    tag: "Live at Bizzed AI",
  },
  {
    title: "Notion CRM → Slack System",
    description: "Monitors pending task queues and provides real-time Slack alerts resulting in a 90% reduction in missed reviews.",
    tech: ["Zapier", "Notion API", "Slack API"],
    tag: "Live at Bizzed AI",
  },
  {
    title: "Facial Recognition Smart Glass Pipeline",
    description: "OpenCV + deep learning models + CRM database cross-reference. Architected for real-time contact ID via smart glasses.",
    tech: ["OpenCV", "Python", "CRM"],
    tag: "Live at Bizzed AI",
  },
  {
    title: "Claude API Productivity Plugin",
    description: "AI-powered Gmail drafting, meeting scheduling, proposal generation. Routine tasks compressed to <10 minutes.",
    tech: ["Claude API", "Gmail API", "Calendar API"],
    tag: "Live at Bizzed AI",
  },
  {
    title: "Job Application Tracker",
    description: "NLP email classification + structured entity extraction. Achieved an 80% reduction in manual data entry.",
    tech: ["N8N", "Gemini", "REST API", "Python"],
    link: "https://github.com/ssunuwar33",
  },
  {
    title: "Crime Detection System",
    description: "CNN (MobileNetV2) + GRU for real-time crime detection from video. Automated alert dispatch on suspicious activity. MSc Project.",
    tech: ["TensorFlow", "Keras", "OpenCV", "GRU", "Python"],
    link: "https://github.com/ssunuwar33",
  }
];

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
          <span className="text-[var(--color-violet)]">03.</span> Selected Projects
        </h2>
        <div className="w-20 h-1 bg-[var(--color-cyan)]"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
