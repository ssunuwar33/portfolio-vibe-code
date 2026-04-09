import { SectionWrapper, itemVariants } from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import { Mail, Phone, Terminal, User } from "lucide-react";

export function Contact() {
  return (
    <SectionWrapper id="contact" className="mb-8" title="SECURE" cyanWord="CHANNEL">
      <div className="max-w-2xl mx-auto">
        <motion.div variants={itemVariants} className="space-y-6 text-[var(--color-hud-text)] font-rajdhani hud-panel p-8 hud-brackets">
          <div className="hud-panel-highlight"></div>
          <p className="text-lg">
            ENGAGE COMM LINK: Always open to discussing AI infrastructure, automation integrations, or new freelance projects. Drop me a transmission and I'll respond within standard terrestrial hours.
          </p>
          
          <div className="space-y-4 pt-4 border-t border-[var(--color-hud-border)]">
            <a href="mailto:ssunuwar33@gmail.com" className="flex items-center gap-4 text-[var(--color-hud-cyan)] hover:text-white transition-colors group font-mono font-bold tracking-widest text-sm">
              <span className="p-2 border border-[var(--color-hud-cyan)]/50 rounded drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]">
                 <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
              <span>ssunuwar33@gmail.com</span>
            </a>
            <a href="tel:+447503576160" className="flex items-center gap-4 text-[var(--color-hud-cyan)] hover:text-white transition-colors group font-mono font-bold tracking-widest text-sm">
              <span className="p-2 border border-[var(--color-hud-cyan)]/50 rounded drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]">
                 <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
              <span>+44 7503 576160</span>
            </a>
            <a href="https://linkedin.com/in/subashsunuwar33" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[var(--color-hud-gold)] hover:text-white transition-colors group font-mono font-bold tracking-widest text-sm">
              <span className="p-2 border border-[var(--color-hud-gold)]/50 rounded drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]">
                  <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
              <span>linkedin.com/in/subashsunuwar33</span>
            </a>
            <a href="https://github.com/ssunuwar33" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[var(--color-hud-red)] hover:text-white transition-colors group font-mono font-bold tracking-widest text-sm">
              <span className="p-2 border border-[var(--color-hud-red)]/50 rounded drop-shadow-[0_0_5px_rgba(255,26,26,0.5)]">
                  <Terminal className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
              <span>github.com/ssunuwar33</span>
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
