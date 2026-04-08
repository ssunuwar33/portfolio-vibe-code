import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { itemVariants } from "./SectionWrapper";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  tag?: string;
  link?: string;
}

export function ProjectCard({ title, description, tech, tag, link }: ProjectCardProps) {
  return (
    <motion.a
      variants={itemVariants}
      href={link || "#"}
      target={link ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="glow-card block p-6 rounded-2xl relative overflow-hidden group cursor-pointer"
    >
      {tag && (
        <span className="absolute top-6 right-6 text-xs font-mono px-3 py-1 bg-[var(--color-cyan)]/10 text-[var(--color-cyan)] rounded-full">
          {tag}
        </span>
      )}
      
      <div className="mb-4 pt-8">
        <h3 className="text-xl font-bold font-mono text-[var(--color-cyan)] group-hover:text-white transition-colors">
          {title}
        </h3>
      </div>
      
      <p className="text-gray-400 mb-8 min-h-[80px]">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="text-xs text-[var(--color-violet)] bg-[var(--color-violet)]/10 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      
      {link && (
        <div className="absolute bottom-6 right-6 text-gray-500 group-hover:text-[var(--color-cyan)] transition-colors">
          <ExternalLink size={20} />
        </div>
      )}
    </motion.a>
  );
}
