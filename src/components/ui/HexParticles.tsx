import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
}

export function HexParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Initial particle generation
    const initialParticles = Array.from({ length: 30 }).map((_, i) => createParticle(i));
    setParticles(initialParticles);

    // Animation frame loop for floating up
    let animationFrameId: number;
    let lastTime = performance.now();

    const renderLoop = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      setParticles((prev) =>
        prev.map((p) => {
          let newY = p.y - p.speed * delta;
          let newRotation = p.rotation + (p.speed * delta * 2);
          
          if (newY < -10) {
            return createParticle(p.id, true);
          }
          return { ...p, y: newY, rotation: newRotation };
        })
      );
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  function createParticle(id: number, spawnAtBottom = false): Particle {
    return {
      id,
      x: Math.random() * 100,
      y: spawnAtBottom ? 110 : Math.random() * 100,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 15 + 5,
      opacity: Math.random() * 0.15 + 0.05,
      rotation: Math.random() * 360,
    };
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute border border-[var(--color-hud-cyan)] text-transparent"
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            transform: `rotate(${p.rotation}deg)`,
            // Draw a basic hex via clip path
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            background: "rgba(0, 229, 255, 0.1)"
          }}
        />
      ))}
    </div>
  );
}
