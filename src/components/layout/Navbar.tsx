import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "../../lib/utils";
import cvFile from "../../assets/Subash Sunuwar-CV.pdf";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') !== 'light';
  });

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (!newMode) {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-transform duration-300",
        isScrolled ? "-translate-y-full" : "translate-y-0 bg-transparent py-4 border-b border-[var(--color-hud-border)]"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center py-2">
        <a href="#" className="flex items-center gap-1 font-orbitron font-black text-2xl text-[var(--color-hud-cyan)] tracking-widest group">
          S<span className="text-[var(--color-hud-red)] group-hover:text-[var(--color-hud-gold)] transition-colors">S</span>.
        </a>

        {/* Desktop Links (Kept empty per previous request, but we restore Download CV) */}
        <div className="hidden md:flex gap-8 items-center">
          <div className="flex items-center gap-2 mr-4">
            <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot"></div>
            <span className="text-green-500 font-mono text-xs tracking-widest mt-0.5">ONLINE</span>
          </div>

          <a
            href={cvFile}
            download="Subash Sunuwar-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-[var(--color-hud-cyan)] text-[var(--color-hud-cyan)] bg-[var(--color-hud-cyan)]/10 hover:bg-[var(--color-hud-cyan)]/20 hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all text-xs font-orbitron uppercase tracking-[2px] clip-btn"
          >
            Download CV
          </a>

          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 border transition-all clip-btn flex items-center justify-center gap-2 font-orbitron text-[10px] uppercase tracking-[2px] h-full",
              isDarkMode 
                ? "border-[rgba(0,229,255,0.4)] text-[var(--color-hud-cyan)] hover:shadow-[0_0_12px_rgba(0,229,255,0.4)]"
                : "border-[rgba(180,30,30,0.4)] text-[var(--color-hud-red)] hover:shadow-[0_0_12px_rgba(180,30,30,0.4)]"
            )}
            style={{ transition: "all 0.4s ease" }}
            title="Toggle Protocol Theme"
          >
            {isDarkMode ? <><Sun size={14} /> LIGHT MODE</> : <><Moon size={14} /> DARK MODE</>}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[var(--color-hud-cyan)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav absolute top-full left-0 w-full flex flex-col py-6 px-6 gap-6 border-b border-[var(--color-hud-border)]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot"></div>
            <span className="text-green-500 font-mono text-xs tracking-widest mt-0.5">SYSTEM ONLINE</span>
          </div>
          <a
            href={cvFile}
            download="Subash Sunuwar-CV.pdf"
            className="w-full text-center py-3 border border-[var(--color-hud-cyan)] text-[var(--color-hud-cyan)] hover:bg-[var(--color-hud-cyan)]/20 transition-all font-orbitron uppercase tracking-widest text-xs clip-btn mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Download CV
          </a>

          <button
            onClick={() => {
              toggleTheme();
              setMobileMenuOpen(false);
            }}
            className={cn(
              "w-full flex items-center justify-center gap-2 py-3 border transition-all font-orbitron uppercase tracking-widest text-xs clip-btn mt-2",
              isDarkMode 
                ? "border-[rgba(0,229,255,0.4)] text-[var(--color-hud-cyan)] bg-[var(--color-hud-cyan)]/5 hover:bg-[var(--color-hud-cyan)]/20"
                : "border-[rgba(180,30,30,0.4)] text-[var(--color-hud-red)] bg-[var(--color-hud-red)]/5 hover:bg-[var(--color-hud-red)]/20"
            )}
            style={{ transition: "all 0.4s ease" }}
          >
            {isDarkMode ? <><Sun size={16} /> ENTER LIGHT MODE</> : <><Moon size={16} /> ENTER DARK MODE</>}
          </button>
        </div>
      )}
    </nav>
  );
}
