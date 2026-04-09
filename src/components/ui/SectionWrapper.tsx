import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
  cyanWord?: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40, 
    scale: 0.95, 
    filter: "blur(10px)" 
  },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1
    } 
  }
};

export function SectionWrapper({ children, className, id, title, cyanWord }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-12 md:py-20 relative", className)}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1,
            },
          },
        }}
        className="max-w-6xl mx-auto px-6 md:px-12 relative z-10"
      >
        {title && (
          <motion.div variants={itemVariants} className="mb-12 relative">
            <span className="text-[var(--color-hud-red)] font-mono text-xs uppercase tracking-[4px] block mb-2 opacity-80 pl-1">
              // SYSTEM CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
               {title} {cyanWord && <span className="text-[var(--color-hud-cyan)] drop-shadow-[0_0_10px_currentColor]">{cyanWord}</span>}
            </h2>
            <div className="h-[2px] w-full max-w-[200px] mt-4 bg-gradient-to-r from-transparent via-[var(--color-hud-red)] to-[var(--color-hud-gold)] opacity-70"></div>
          </motion.div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
