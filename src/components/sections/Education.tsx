import { SectionWrapper, itemVariants } from "../ui/SectionWrapper";
import { motion } from "framer-motion";

export function Education() {
  return (
    <SectionWrapper id="education">
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
          <span className="text-[var(--color-violet)]">04.</span> Education & Certifications
        </h2>
        <div className="w-20 h-1 bg-[var(--color-cyan)]"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div variants={itemVariants} className="glow-card p-8 rounded-2xl relative">
          <h3 className="text-xl font-bold text-white mb-2">MSc Data Science (Merit)</h3>
          <p className="text-[var(--color-cyan)] font-mono text-sm mb-4">University of Greenwich | 2023–2024</p>
          <div className="text-gray-400">
            <p className="mb-2"><span className="text-white font-medium">Core Modules:</span> Machine Learning, Data Visualization, Big Data, Graph Databases.</p>
            <p>Developed Real-Time Crime Detection System using CNN + GRU.</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <div className="glow-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-1">BE Computer Engineering</h3>
            <p className="text-[var(--color-cyan)] font-mono text-sm mb-2">University of Greenwich | 2016–2022</p>
            <p className="text-gray-400 text-sm">Graduated with GPA 3.19. Heavy focus on software engineering principles and foundational algorithms.</p>
          </div>

          <div className="glow-card p-6 rounded-2xl border-l-[3px] border-l-[var(--color-violet)]">
            <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <span>🏅</span> Data Scientist Associate
            </h3>
            <p className="text-[var(--color-cyan)] font-mono text-sm">DataCamp | Jan 2026–2028</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
