import { useEffect, useRef } from "react";

export default function GradientGlowBg() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (glow) {
        glow.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="gradient-bg">
      <div ref={glowRef} className="cursor-glow"></div>
    </div>
  );
}