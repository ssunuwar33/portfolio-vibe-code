import { SectionWrapper, itemVariants } from "../ui/SectionWrapper";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "AI Engineer Intern",
    company: "Bizzed AI",
    date: "Mar 2026 – Present",
    location: "Remote/UK",
    bullets: [
      "Lead-response automation: Zapier + Meta Ads API → outbound calls in <60 seconds",
      "Notion CRM → Slack notification system: 90% reduction in missed task reviews",
      "Facial recognition pipeline: OpenCV + deep learning + CRM cross-reference for smart-glass integration",
      "Claude API productivity plugin: Gmail & Google Calendar automation via REST APIs"
    ]
  },
  {
    title: "AI Automation Developer",
    company: "Independent Project",
    date: "Nov 2025",
    location: "Remote",
    bullets: [
      "N8N + Gemini LLM job tracking system: NLP classification of emails, 80% reduction in manual entry",
      "LLM-driven data pipeline: structured storage via REST API",
      "Open source contributions via github.com/ssunuwar33"
    ]
  },
  {
    title: "Customer & Operations Assistant",
    company: "Tesco",
    date: "Jan 2023 – Present",
    location: "UK",
    bullets: [
      "Led teams of up to 10 staff; managed 100+ customers per shift within fast-paced environment",
      "Resolved peak-hour service issues, minimizing delays and improving efficiency"
    ]
  },
  {
    title: "IT Support Specialist",
    company: "Aarambha Infosys",
    date: "Aug 2018 – Jan 2021",
    location: "Nepal",
    bullets: [
      "Provided first-line technical support, troubleshooting hardware, software, and network (LAN/WAN, Wi-Fi, VPN) issues to minimize downtime",
      "Installed and maintained Windows systems, Microsoft 365 and managed active directory accounts and user access",
      "Conducted system updates, patch management and antivirus monitoring to enhance security",
      "Logged incidents via a helpdesk system and delivered user training to reduce recurring IT issues"
    ]
  }
];

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <motion.div variants={itemVariants} className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
          <span className="text-[var(--color-violet)]">02.</span> Experience
        </h2>
        <div className="w-20 h-1 bg-[var(--color-cyan)]"></div>
      </motion.div>

      <div className="relative border-l border-white/10 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-8 ml-8 relative"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-[var(--color-base)] border-2 border-[var(--color-cyan)] shadow-[0_0_10px_rgba(0,255,209,0.5)]"></span>

            <div className="flex flex-col md:flex-row md:items-baseline mb-2">
              <h3 className="text-xl font-bold text-white mr-2">{exp.title}</h3>
              <span className="text-[var(--color-cyan)] font-mono">@ {exp.company}</span>
            </div>

            <div className="text-sm text-gray-500 font-mono mb-4">
              {exp.date} | {exp.location}
            </div>

            <ul className="space-y-2 text-gray-400 list-none">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex leading-relaxed">
                  <span className="text-[var(--color-violet)] mr-2 mt-1">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
