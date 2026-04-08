import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import cvFile from "../../assets/Subash Sunuwar-CV.pdf";



export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        "fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-transparent",
        isScrolled ? "-translate-y-full" : "translate-y-0 py-6"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl font-mono font-bold tracking-tighter hover:text-[var(--color-cyan)] transition-colors">
          SS.
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">

          <a
            href={cvFile}
            download="Subash Sunuwar-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-[var(--color-cyan)] text-[var(--color-cyan)] rounded hover:bg-[var(--color-cyan)]/10 transition-colors text-sm font-mono"
          >
            Download CV
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav absolute top-full left-0 w-full flex flex-col py-4 px-6 gap-4 border-b border-white/10">

          <a
            href={cvFile}
            download="Subash Sunuwar-CV.pdf"
            className="w-full text-center py-3 border border-[var(--color-cyan)] text-[var(--color-cyan)] rounded mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
