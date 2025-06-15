import React, { useEffect, useRef } from "react";

const MouseBackground = ({ intensity = 1 }) => {
  const containerRef = useRef(null);
  const position = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const coreGlow = containerRef.current.querySelector(".core-glow");
    const secondaryGlow = containerRef.current.querySelector(".secondary-glow");
    const ambientGlow = containerRef.current.querySelector(".ambient-glow");

    let targetX = position.current.x;
    let targetY = position.current.y;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // Smoothly interpolate current position towards target position
      position.current.x += (targetX - position.current.x) * 0.1;
      position.current.y += (targetY - position.current.y) * 0.1;

      // Update the CSS transform directly (no React re-render)
      const xCore = position.current.x - 192;
      const yCore = position.current.y - 192;
      const xSecondary = position.current.x - 300;
      const ySecondary = position.current.y - 300;
      const xAmbient = position.current.x - 450;
      const yAmbient = position.current.y - 450;

      if (coreGlow) coreGlow.style.transform = `translate(${xCore}px, ${yCore}px)`;
      if (secondaryGlow) secondaryGlow.style.transform = `translate(${xSecondary}px, ${ySecondary}px)`;
      if (ambientGlow) ambientGlow.style.transform = `translate(${xAmbient}px, ${yAmbient}px)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden"
    >
      <div
        className="core-glow absolute w-96 h-96 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-30 blur-3xl"
        style={{ opacity: 0.3 * intensity }}
      />
      <div
        className="secondary-glow absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-pink-400 to-purple-600 opacity-20 blur-[200px]"
        style={{ opacity: 0.2 * intensity }}
      />
      <div
        className="ambient-glow absolute w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-purple-900 to-purple-600 opacity-15 blur-[400px]"
        style={{ opacity: 0.15 * intensity }}
      />
    </div>
  );
};

export default MouseBackground;
