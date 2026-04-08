import { cn } from "../../lib/utils";
import { itemVariants } from "./SectionWrapper";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  label: string;
  className?: string;
}

export function SkillBadge({ label, className }: SkillBadgeProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
        "bg-[var(--color-base)] text-[var(--color-cyan)] border-[var(--color-cyan)]/30",
        "hover:bg-[var(--color-cyan)]/10 hover:border-[var(--color-cyan)] hover:shadow-[0_0_10px_rgba(0,255,209,0.3)]",
        className
      )}
    >
      {label}
    </motion.div>
  );
}
