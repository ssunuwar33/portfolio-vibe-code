import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-12 md:py-20", className)}>
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
        className="max-w-6xl mx-auto px-6 md:px-12"
      >
        {children}
      </motion.div>
    </section>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const itemVariants = {
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
