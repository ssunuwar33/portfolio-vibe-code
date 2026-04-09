import { cn } from "../../lib/utils";
import { itemVariants } from "./SectionWrapper";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  label: string;
  categoryTitle: string;
  className?: string;
}

export function SkillBadge({ label, categoryTitle, className }: SkillBadgeProps) {
  
  let variantClass = "text-[var(--color-hud-cyan)] border-[var(--color-hud-cyan)]/30 hover:border-[var(--color-hud-cyan)] bg-[var(--color-hud-cyan)]/5 hover:bg-[var(--color-hud-cyan)]/20 hover:shadow-[0_0_10px_var(--color-hud-cyan)]";
  
  if (categoryTitle.includes("Programming") || categoryTitle.includes("ML")) {
     variantClass = "text-[var(--color-hud-red)] border-[var(--color-hud-red)]/30 hover:border-[var(--color-hud-red)] bg-[var(--color-hud-red)]/5 hover:bg-[var(--color-hud-red)]/20 hover:shadow-[0_0_10px_var(--color-hud-red)]";
  } else if (categoryTitle.includes("Automation") || categoryTitle.includes("Data")) {
     variantClass = "text-[var(--color-hud-gold)] border-[var(--color-hud-gold)]/30 hover:border-[var(--color-hud-gold)] bg-[var(--color-hud-gold)]/5 hover:bg-[var(--color-hud-gold)]/20 hover:shadow-[0_0_10px_var(--color-hud-gold)]";
  }

  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        "px-4 py-2 text-xs font-mono border transition-all uppercase tracking-widest",
        variantClass,
        className
      )}
    >
      {label}
    </motion.div>
  );
}
