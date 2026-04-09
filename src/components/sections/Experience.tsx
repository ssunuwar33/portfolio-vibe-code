import { SectionWrapper, itemVariants } from "../ui/SectionWrapper";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "AI Engineer Intern",
    company: "Bizzed AI",
    date: "Mar 2026 – Present",
    location: "Remote/UK",
    active: true,
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
    active: false,
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
    active: true,
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
    active: false,
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
    <SectionWrapper id="experience" title="CAREER" cyanWord="TIMELINE">
      <div className="relative ml-4 md:ml-0">
        
        {/* The Timeline Line itself */}
        <div className="absolute left-[-24px] md:left-[-32px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-hud-cyan)] to-[var(--color-hud-red)]"></div>

        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="mb-10 relative hud-panel hud-brackets p-6"
          >
            <div className="hud-panel-highlight"></div>

            {/* Timeline dot */}
            <div className={`absolute top-6 left-[-31px] md:left-[-39px] h-4 w-4 rounded-full border-2 bg-[var(--theme-hud-bg)] transition-colors duration-400 ${exp.active ? 'border-[var(--color-hud-gold)] shadow-[0_0_10px_var(--color-hud-gold)]' : 'border-[var(--color-hud-red)] shadow-[0_0_10px_var(--color-hud-red)]'}`}></div>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
              <div>
                <h3 className="text-xl font-orbitron font-bold text-white tracking-widest">{exp.title}</h3>
                <span className="text-[var(--color-hud-red)] font-mono text-sm uppercase tracking-widest drop-shadow-[0_0_2px_currentColor]">@ {exp.company}</span>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                  <div className="text-xs font-mono px-3 py-1 border border-[var(--color-hud-red)]/50 text-[var(--color-hud-red)] rounded uppercase">
                    {exp.date} // {exp.location}
                  </div>
                  {exp.active && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot"></div>
                        <span className="text-green-500 font-mono text-[10px] tracking-widest leading-none">ACTIVE ROOT</span>
                      </div>
                  )}
              </div>
            </div>
            
            <ul className="space-y-3 text-[var(--color-hud-text)] font-rajdhani list-none border-t border-[var(--color-hud-border)] pt-4">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start text-[15px]">
                  <span className="text-[var(--color-hud-cyan)] mr-3 mt-1 text-xs">▸</span>
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
