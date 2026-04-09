import { useState, useEffect } from "react";

export function Footer() {
  const [time, setTime] = useState(new Date().toISOString().split("T")[1].split(".")[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toISOString().split("T")[1].split(".")[0]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full py-12 relative border-t border-[var(--color-hud-border)] bg-[var(--theme-hud-bg)] text-center transition-all duration-400">
      
      {/* HUD Corners (Stuck to Footer) */}
      <div className="absolute top-8 left-6 pointer-events-none font-mono text-[10px] md:text-xs text-[var(--theme-text-muted)] opacity-50 leading-tight hidden md:block text-left">
        SYSTEM ONLINE <br/>
        AI MODULE: ACTIVE <br/>
        STATUS: AVAILABLE
      </div>
      <div className="absolute top-8 right-6 pointer-events-none font-mono text-[10px] md:text-xs text-[var(--theme-text-muted)] opacity-50 text-right leading-tight hidden md:block">
        JARVIS v2.0 <br/>
        ENGINEER: SUBASH SUNUWAR <br/>
        T-SYS: {time}Z
      </div>

      <p className="text-[var(--theme-text-muted)] text-sm font-mono tracking-widest uppercase">
        Built by Subash Sunuwar — AI Engineer & Automation Specialist
      </p>
    </footer>
  );
}
