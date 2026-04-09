import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { itemVariants } from "./SectionWrapper";

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  tech: string[];
  tag?: string;
  link?: string;
}

export function ProjectCard({ index, title, description, tech, tag, link }: ProjectCardProps) {
  
  const formattedIndex = (index + 1).toString().padStart(2, '0');
  
  return (
    <motion.a
      variants={itemVariants}
      href={link || "#"}
      target={link ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="hud-panel hud-brackets block p-8 relative group cursor-pointer h-full flex flex-col"
    >
      <div className="hud-panel-highlight"></div>
      
      {/* Ghost Number absolute background */}
      <div className="absolute top-0 right-2 text-8xl font-orbitron font-black text-[var(--color-hud-cyan)] opacity-[0.03] select-none z-0">
        {formattedIndex}
      </div>

      <div className="relative z-10 flex justify-between items-start mb-6">
          {tag && (
            <div className="flex items-center gap-2 border border-green-500/50 bg-green-500/10 px-3 py-1 rounded-full">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot"></div>
               <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">{tag}</span>
            </div>
          )}
          {!tag && <div></div>}
          
          {link && (
            <div className="text-[var(--color-hud-border)] group-hover:text-[var(--color-hud-cyan)] transition-colors">
              <ExternalLink size={20} />
            </div>
          )}
      </div>
      
      <div className="relative z-10 mb-4 flex-grow">
        <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-[var(--color-hud-cyan)] transition-colors drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] uppercase tracking-wider mb-3">
          {title}
        </h3>
        <p className="text-[var(--color-hud-text)] font-rajdhani text-sm leading-relaxed opacity-90">
          {description}
        </p>
      </div>
      
      <div className="relative z-10 flex flex-wrap gap-2 mt-auto border-t border-[var(--color-hud-border)] pt-4">
        {tech.map((t) => (
          <span key={t} className="text-[10px] uppercase font-mono tracking-wider text-[var(--color-hud-gold)] border border-[var(--color-hud-gold)]/30 px-2 py-1 rounded bg-[var(--color-hud-gold)]/5">
            {t}
          </span>
        ))}
      </div>
      
    </motion.a>
  );
}
