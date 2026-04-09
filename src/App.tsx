import { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/Contact";
import { HexParticles } from "./components/ui/HexParticles";

function App() {
  return (
    <div className="min-h-screen selection:bg-[var(--color-hud-cyan)] selection:text-black">
      {/* Background Underlays */}
      <div className="hud-bg-grid" />
      <div className="hud-blobs" />
      <HexParticles />
      <div className="scan-line" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
