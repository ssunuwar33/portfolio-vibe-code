import { SectionWrapper, itemVariants } from "../ui/SectionWrapper";
import { motion } from "framer-motion";

export function Education() {
  return (
    <SectionWrapper id="education" title="ACADEMIC" cyanWord="RECORDS">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div variants={itemVariants} className="hud-panel p-8 hud-brackets text-center">
          <div className="hud-panel-highlight"></div>
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="text-xl font-orbitron font-bold text-[var(--color-hud-gold)] mb-2 tracking-widest drop-shadow-[0_0_5px_currentColor]">MSc Data Science</h3>
          <p className="text-[var(--color-hud-cyan)] font-mono text-sm mb-4">University of Greenwich | 2023–2024</p>
          <div className="text-gray-400 font-rajdhani">
            <p className="mb-2"><span className="text-white font-medium">Core Modules:</span> Machine Learning, Data Visualization, Big Data, Graph Databases.</p>
            <p>Developed Real-Time Crime Detection System using CNN + GRU.</p>
          </div>
          <div className="mt-4 font-mono text-xs text-[var(--color-hud-cyan)] p-2 border border-[var(--color-hud-cyan)]/30 rounded bg-[var(--color-hud-cyan)]/5">
            STATUS: PASSED (MERIT)
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <div className="hud-panel p-6 hud-brackets text-center h-full flex flex-col justify-center">
            <div className="hud-panel-highlight"></div>
            <h3 className="text-lg font-orbitron font-bold text-[var(--color-hud-gold)] mb-1 tracking-widest drop-shadow-[0_0_5px_currentColor]">BE Computer Engineering</h3>
            <p className="text-[var(--color-hud-cyan)] font-mono text-sm mb-2">University of Greenwich | 2016–2022</p>
            <p className="text-gray-400 text-sm font-rajdhani">Heavy focus on software engineering principles and foundational algorithms.</p>
            <div className="mt-4 font-mono text-xs text-[var(--color-hud-cyan)] p-2 border border-[var(--color-hud-cyan)]/30 rounded bg-[var(--color-hud-cyan)]/5">
              GRADE: GPA 3.19
            </div>
          </div>

          <div className="hud-panel p-6 hud-brackets text-center border-l-[4px] border-l-[var(--color-hud-gold)] flex flex-col justify-center">
            <div className="hud-panel-highlight"></div>
            <h3 className="text-lg font-orbitron font-bold text-[var(--color-hud-gold)] mb-1 flex justify-center items-center gap-2 drop-shadow-[0_0_5px_currentColor]">
               Data Scientist Associate
            </h3>
            <p className="text-[var(--color-hud-cyan)] font-mono text-sm">DataCamp | Jan 2026–2028</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
