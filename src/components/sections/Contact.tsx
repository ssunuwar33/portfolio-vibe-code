import { SectionWrapper, itemVariants } from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import { Mail, Phone, Terminal, User } from "lucide-react";

export function Contact() {
  return (
    <SectionWrapper id="contact" className="mb-8">
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
          <span className="text-[var(--color-violet)]">05.</span> Get In Touch
        </h2>
        <div className="w-20 h-1 bg-[var(--color-cyan)]"></div>
      </motion.div>

      <div className="max-w-2xl">
        <motion.div variants={itemVariants} className="space-y-6 text-gray-400">
          <p className="text-lg">
            I'm always open to discussing AI infrastructure, automation integrations, or new freelance projects. Drop me a message and I'll get back to you within 24 hours.
          </p>
          
          <div className="space-y-4 pt-4">
            <a href="mailto:ssunuwar33@gmail.com" className="flex items-center gap-4 hover:text-[var(--color-cyan)] transition-colors group">
              <Mail className="group-hover:animate-pulse" />
              <span>ssunuwar33@gmail.com</span>
            </a>
            <a href="tel:+447503576160" className="flex items-center gap-4 hover:text-[var(--color-cyan)] transition-colors group">
              <Phone className="group-hover:animate-pulse" />
              <span>+44 7503 576160</span>
            </a>
            <a href="https://linkedin.com/in/subashsunuwar33" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[var(--color-cyan)] transition-colors group">
              <User className="group-hover:animate-pulse" />
              <span>linkedin.com/in/subashsunuwar33</span>
            </a>
            <a href="https://github.com/ssunuwar33" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[var(--color-cyan)] transition-colors group">
              <Terminal className="group-hover:animate-pulse" />
              <span>github.com/ssunuwar33</span>
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
