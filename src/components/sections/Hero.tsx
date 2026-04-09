import { motion } from "framer-motion";
import { Typewriter } from "../ui/Typewriter";
import { SectionWrapper, itemVariants } from "../ui/SectionWrapper";

export function Hero() {
  return (
    <SectionWrapper id="hero" className="min-h-[100vh] flex items-center pt-32 pb-20 justify-center text-center relative overflow-hidden">
      
      {/* ARC REACTOR BACKGROUND */}
      <div className="arc-reactor">
        <div className="arc-ring arc-ring-1"></div>
        <div className="arc-ring arc-ring-2"></div>
        <div className="arc-ring arc-ring-3"></div>
        <div className="arc-core"></div>
      </div>

      <div className="w-full relative z-10">
        <motion.p variants={itemVariants} className="text-[var(--color-hud-cyan)] font-mono mb-4 text-sm md:text-base uppercase tracking-[4px]">
          // System Boot Sequence Initiated
        </motion.p>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-6 tracking-[4px] text-white"
        >
          SUBASH <span className="text-[var(--color-hud-red)] drop-shadow-[0_0_15px_rgba(255,26,26,0.8)]">SUNUWAR</span>
        </motion.h1>
        
        <motion.div variants={itemVariants} className="text-xl md:text-3xl font-orbitron text-[var(--color-hud-gold)] mb-8 h-12 md:h-16 tracking-widest drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]">
          <Typewriter
            words={["AI Engineer", "LLM Specialist", "Automation Builder", "Data Scientist"]}
          />
        </motion.div>
        
        <motion.p variants={itemVariants} className="text-lg font-rajdhani text-[var(--theme-text-muted)] max-w-2xl mx-auto mb-12">
          Building intelligent systems that reduce overhead and scale without friction.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap gap-6 justify-center">
          <a href="#projects" className="clip-btn px-10 py-4 bg-[var(--color-hud-red)]/10 border border-[var(--color-hud-red)] text-[var(--color-hud-red)] font-orbitron font-bold uppercase tracking-[2px] hover:bg-[var(--color-hud-red)]/20 hover:shadow-[0_0_20px_var(--color-hud-red)] transition-all">
            View Projects
          </a>
          <a href="#contact" className="clip-btn px-10 py-4 bg-[var(--color-hud-cyan)]/10 border border-[var(--color-hud-cyan)] text-[var(--color-hud-cyan)] font-orbitron font-bold uppercase tracking-[2px] hover:bg-[var(--color-hud-cyan)]/20 hover:shadow-[0_0_20px_var(--color-hud-cyan)] transition-all">
            Contact Me
          </a>
        </motion.div>
        
        {/* STATS ROW */}
        <motion.div variants={itemVariants} className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto border-t border-[var(--color-hud-border)] pt-8">
            <div className="text-center">
                <div className="font-orbitron text-2xl md:text-3xl text-[var(--color-hud-gold)] drop-shadow-[0_0_5px_currentColor]">05+</div>
                <div className="font-mono text-xs text-[var(--color-hud-text)] opacity-70 mt-1 uppercase tracking-widest">Core Projects</div>
            </div>
            <div className="text-center border-l border-r border-[var(--color-hud-border)]">
                <div className="font-orbitron text-2xl md:text-3xl text-[var(--color-hud-gold)] drop-shadow-[0_0_5px_currentColor]">90%</div>
                <div className="font-mono text-xs text-[var(--color-hud-text)] opacity-70 mt-1 uppercase tracking-widest">Automation Efficiency</div>
            </div>
            <div className="text-center">
                <div className="font-orbitron text-2xl md:text-3xl text-[var(--color-hud-gold)] drop-shadow-[0_0_5px_currentColor]">80%</div>
                <div className="font-mono text-xs text-[var(--color-hud-text)] opacity-70 mt-1 uppercase tracking-widest">Data Processing Reduced</div>
            </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
