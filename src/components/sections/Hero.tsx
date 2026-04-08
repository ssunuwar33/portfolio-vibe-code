import { motion } from "framer-motion";
import { Typewriter } from "../ui/Typewriter";
import { SectionWrapper, itemVariants } from "../ui/SectionWrapper";

export function Hero() {
  return (
    <SectionWrapper id="hero" className="min-h-screen flex items-center pt-32 pb-20 md:pt-0 md:pb-0">
      <div className="w-full">
        <motion.p variants={itemVariants} className="text-[var(--color-violet)] font-mono mb-4 text-sm md:text-base">
          Hello, world. I am
        </motion.p>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white glow-text">
          SUBASH SUNUWAR.
        </motion.h1>
        
        <motion.div variants={itemVariants} className="text-2xl md:text-4xl font-light text-gray-400 mb-8 h-12 md:h-16">
          I am a{" "}
          <Typewriter
            words={["AI Engineer", "LLM Specialist", "Automation Builder", "Data Scientist"]}
          />
        </motion.div>
        
        <motion.p variants={itemVariants} className="text-lg text-gray-500 max-w-2xl mb-8">
          Building intelligent systems that reduce overhead and scale without friction.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <a href="#projects" className="px-6 py-3 bg-[var(--color-cyan)] text-black font-bold rounded hover:bg-[var(--color-cyan)]/90 transition-colors shadow-[0_0_15px_rgba(0,255,209,0.4)]">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-white/20 rounded hover:bg-white/5 transition-colors">
            Contact Me
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
